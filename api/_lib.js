// RL Clans Arena v4 — كل الـ API في ملف واحد (login / callback / me / db / sync / health)
const crypto = require("crypto");

let fileCfg = {};
try { fileCfg = require("../discord-config.js"); } catch (e) {}
const pick = k => String((fileCfg && fileCfg[k]) || process.env[k] || "").trim();

const CID = pick("DISCORD_CLIENT_ID");
const SEC = pick("DISCORD_CLIENT_SECRET");
const KEY = pick("SESSION_SECRET") || (SEC ? crypto.createHash("sha256").update("rl-arena|" + SEC).digest("hex") : "");
const ADMINS = pick("ADMIN_IDS").split(",").map(s => s.trim()).filter(Boolean);
const COLS = ["rules", "schedule", "applications", "visitors", "logs"];
const MODES = ["1v1", "2v2", "3v3"];

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
let _redis;
const redis = () => {
  if (!_redis) { const { Redis } = require("@upstash/redis"); _redis = new Redis({ url: REDIS_URL, token: REDIS_TOKEN, enableAutoPipelining: true }); }
  return _redis;
};

const sign = v => crypto.createHmac("sha256", KEY).update(v).digest("base64url");
const same = (a, b) => { const x = Buffer.from(a), y = Buffer.from(b); return x.length === y.length && crypto.timingSafeEqual(x, y); };
const mk = o => { const b = Buffer.from(JSON.stringify(o)).toString("base64url"); return b + "." + sign(b); };
const cookies = h => Object.fromEntries((h || "").split(/;\s*/).filter(Boolean).map(s => { const i = s.indexOf("="); return [s.slice(0, i), s.slice(i + 1)]; }));
function sess(req) {
  if (!KEY) return null;
  const v = cookies(req.headers.cookie).rl; if (!v) return null;
  const [b, s] = v.split("."); if (!b || !s || !same(s, sign(b))) return null;
  try { const o = JSON.parse(Buffer.from(b, "base64url").toString()); return o.exp && o.exp < Date.now() ? null : o; } catch { return null; }
}
const json = (res, c, o) => { res.statusCode = c; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "no-store"); res.end(JSON.stringify(o)); };
const go = (res, to, extra) => { if (extra) res.setHeader("Set-Cookie", extra); res.statusCode = 302; res.setHeader("Location", to); res.end(); };
const avatarOf = (id, av) => av ? `https://cdn.discordapp.com/avatars/${id}/${av}.${av.startsWith("a_") ? "gif" : "png"}?size=128`
  : `https://cdn.discordapp.com/embed/avatars/${Number((BigInt(id) >> 22n) % 6n)}.png`;
const parse = v => { if (typeof v === "string") { try { return JSON.parse(v); } catch { return null; } } return v; };
const hash = async c => { const h = (await redis().hgetall(c)) || {}; return Object.entries(h).map(([id, v]) => ({ id, ...parse(v) })); };
const ck = (n, v, age) => `${n}=${v}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${age}`;
const str = (v, n) => String(v == null ? "" : v).slice(0, n);

// "ver" بيزيد مع كل تغيير — الموقع بيسأل عنه كل كام ثانية وبيسحب البيانات بس لو اتغيّر (يوفّر طلبات Upstash)
const bump = () => redis().incr("ver");
const pushEvent = async (type, text) => {
  const ev = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), type, text: str(text, 200), ts: Date.now() };
  await redis().lpush("events", JSON.stringify(ev));
  await redis().ltrim("events", 0, 59);
};
const lite = a => { const { img, ...r } = a; return { ...r, img: img ? 1 : 0 }; };
const cleanApp = d => {
  d = d || {};
  return {
    clan: str(d.clan, 60).trim(), acc: str(d.acc, 60).trim(), lead: str(d.lead, 60).trim(), rank: str(d.rank, 30).trim(),
    mem: str(d.mem, 400).trim(), since: str(d.since, 60).trim(), days: str(d.days, 120).trim(),
    mode: MODES.includes(d.mode) ? d.mode : "",
    img: typeof d.img === "string" && d.img.startsWith("data:image/") && d.img.length < 700000 ? d.img : "",
  };
};

module.exports = async (req, res, forced) => {
  const u = new URL(req.url, "http://x");
  const route = forced || (u.searchParams.get("r") || u.pathname.replace(/^\/api\/?/, "")).replace(/^\/|\/$/g, "");
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const SITE = (pick("SITE_URL") || "https://" + host).replace(/\/$/, "");
  const REDIRECT = SITE + "/api/callback";
  const me = sess(req), adm = !!me && ADMINS.includes(me.id);
  const hasRedis = !!(REDIS_URL && REDIS_TOKEN);

  try {
    if (route === "health" || route === "") return json(res, 200, { ok: true, v: 4, clientId: !!CID, secret: !!SEC, session: !!KEY, redis: hasRedis, redirect: REDIRECT });

    if (route === "login") {
      if (!CID || !SEC) return go(res, "/?login=config");
      const state = crypto.randomBytes(16).toString("hex");
      const q = new URLSearchParams({ client_id: CID, redirect_uri: REDIRECT, response_type: "code", scope: "identify", state, prompt: "none" });
      return go(res, "https://discord.com/oauth2/authorize?" + q, ck("rl_s", state, 600));
    }

    if (route === "callback") {
      if (u.searchParams.get("error")) return go(res, "/?login=failed&why=denied");
      const code = u.searchParams.get("code");
      const st = cookies(req.headers.cookie).rl_s;
      if (!code) return go(res, "/?login=failed&why=nocode");
      if (!st || st !== u.searchParams.get("state")) return go(res, "/?login=failed&why=state");
      const tr = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_id: CID, client_secret: SEC, grant_type: "authorization_code", code, redirect_uri: REDIRECT }),
      });
      const t = await tr.json();
      if (!t.access_token) return go(res, "/?login=failed&why=" + encodeURIComponent(t.error || "token"));
      const d = await (await fetch("https://discord.com/api/users/@me", { headers: { Authorization: "Bearer " + t.access_token } })).json();
      if (!d.id) return go(res, "/?login=failed&why=user");
      const tok = mk({ id: d.id, name: d.global_name || d.username, av: d.avatar || "", exp: Date.now() + 2592000000 });
      return go(res, "/?welcome=1", [ck("rl", tok, 2592000), ck("rl_s", "", 0)]);
    }

    if (route === "logout") return go(res, "/", ck("rl", "", 0));
    if (route === "me") return json(res, 200, me ? { id: me.id, name: me.name, avatar: avatarOf(me.id, me.av), isAdmin: adm } : null);

    // ========= sync: نبض الموقع (الحضور + الإصدار + كل البيانات لما تتغيّر) =========
    if (route === "sync") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis(), now = Date.now(), cv = u.searchParams.get("v");

      if (me && u.searchParams.get("hb") === "1") {
        const old = parse(await r.hget("visitors", me.id));
        const rec = { ...(old || {}), name: me.name, dc: me.name, first: (old && old.first) || now, seen: now };
        await Promise.all([
          r.hset("visitors", { [me.id]: JSON.stringify(rec) }),
          r.zadd("presence", { score: now, member: "u" + me.id }),
          r.zremrangebyscore("presence", 0, now - 86400000),
        ]);
        if (!old || now - (old.seen || 0) > 1800000) await bump();
      }

      const [verRaw, ids] = await Promise.all([r.get("ver"), r.zrange("presence", now - 70000, "+inf", { byScore: true })]);
      const ver = Number(verRaw) || 0;
      const online = (ids || []).length;
      const base = { v: ver, online };
      if (adm) base.onlineIds = (ids || []).map(x => String(x).slice(1));
      if (cv === String(ver)) return json(res, 200, { ...base, same: 1 });

      const [rules, schedule, events, members] = await Promise.all([hash("rules"), hash("schedule"), r.lrange("events", 0, 29), r.hlen("visitors")]);
      const out = { ...base, rules, schedule, events: (events || []).map(parse).filter(e => e && e.type === "news"), members: Number(members) || 0, apps: [], vis: [], logs: [] };
      if (adm) { const [a, v, l] = await Promise.all([hash("applications"), hash("visitors"), hash("logs")]); out.apps = a.map(lite); out.vis = v; out.logs = l; }
      else if (me) { const a = parse(await r.hget("applications", me.id)); if (a) out.apps = [lite({ id: me.id, ...a })]; }
      return json(res, 200, out);
    }

    // ========= db =========
    if (route === "db") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      if (req.method === "GET") {
        const c = u.searchParams.get("c"); if (!COLS.includes(c)) return json(res, 400, {});
        if (c === "applications" && u.searchParams.get("img")) {   // صورة إثبات الرانك — بتتحمّل لوحدها عشان الـ sync يفضل خفيف
          const id = u.searchParams.get("id") || "";
          if (!me || (!adm && id !== me.id)) return json(res, 403, {});
          const a = parse(await redis().hget(c, id));
          return json(res, 200, { img: (a && a.img) || "" });
        }
        let l = await hash(c);
        if (c === "rules" || c === "schedule") return json(res, 200, l);
        if (!me) return json(res, 401, []);
        if (!adm) l = l.filter(x => x.id === me.id && (c === "applications" || c === "visitors"));
        return json(res, 200, c === "applications" ? l.map(lite) : l);
      }
      if (req.method === "POST") {
        if (!me) return json(res, 401, {});
        let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
        const { c, id, op, data } = b || {};
        if (!COLS.includes(c) || !id || typeof id !== "string" || id.length > 80) return json(res, 400, {});
        const r = redis();
        const old = parse(await r.hget(c, id));
        const put = o => r.hset(c, { [id]: JSON.stringify(o) });
        const done = async (type, text) => { if (type) await pushEvent(type, text); await bump(); return json(res, 200, { ok: 1 }); };
        const msg = (t, a) => ({ t: str(t, 500).trim(), adm: a, ts: Date.now() });

        if (adm) {
          if (c === "applications" && op === "msg") {
            const m = msg(data && data.t, true); if (!old || !m.t) return json(res, 400, {});
            await put({ ...old, chat: [...(old.chat || []), m].slice(-300) }); return done();
          }
          if (c === "applications" && op === "closechat") {
            if (!old) return json(res, 404, {});
            const { img, ...rest } = old;
            await r.hset("logs", { [`${id}_${Date.now()}`]: JSON.stringify({ ...rest, closed: Date.now() }) });
            await put({ ...old, chatOpen: false, chat: [] }); return done();
          }
          if (op === "delete") {
            await r.hdel(c, id);
            if (c === "rules") return done("rule_del", "تم حذف أحد القوانين");
            if (c === "schedule" && old) return done("sched_del", `تم إلغاء موعد: ${old.c1} VS ${old.c2}`);
            return done();
          }
          const nd = op === "update" ? { ...(old || {}), ...data } : data;
          await put(nd);
          if (c === "applications" && op === "update" && data && (data.status === "accepted" || data.status === "rejected")) { const { img, ...rest } = nd; await r.hset("logs", { [`app_${id}_${Date.now()}`]: JSON.stringify({ ...rest, result: data.status, decided: Date.now() }) }); }
          if (c === "rules") return done(old ? "rule_edit" : "rule_add", old ? "تم تعديل أحد القوانين" : `أضافت الإدارة قانونًا جديدًا: «${str(nd.text, 70)}»`);
          if (c === "schedule" && !old) return done("sched_add", `موعد جديد: ${nd.c1} VS ${nd.c2} (${nd.mode})`);
          if (c === "applications" && op === "update" && data && data.status === "accepted" && (!old || old.status !== "accepted")) return done("accepted", `تم قبول كلان «${nd.clan}» في البطولة 🎉`);
          return done();
        }

        // ===== مستخدم عادي =====
        if (id !== me.id || c !== "applications") return json(res, 403, {});
        if (op === "set" && (!old || old.status === "rejected")) {
          const a = cleanApp(data);
          if (!a.clan || !a.acc || !a.lead || !a.rank || !a.mode || !a.img) return json(res, 400, { error: "missing" });
          await put({ ...a, status: "review", chat: [], chatOpen: false, dc: me.name, ts: Date.now() });
          return done("apply", `${me.name} قدّم طلب دخول لكلان «${a.clan}» (${a.mode})`);
        }
        if (op === "open" && old) { await put({ ...old, chatOpen: true }); return done(); }
        if (op === "msg" && old && old.chatOpen) {
          const m = msg(data && data.t, false); if (!m.t) return json(res, 400, {});
          await put({ ...old, chat: [...(old.chat || []), m].slice(-300) }); return done();
        }
        return json(res, 403, {});
      }
    }

    // ===== VAR System (سكور بورد) =====
    if (route === "vs") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis(), lg = u.searchParams.get("logo");
      if (req.method === "GET") {
        if (lg) {
          const d = await r.get("vs:logo:" + lg); if (!d) return json(res, 404, {});
          res.statusCode = 200; res.setHeader("Content-Type", "image/png"); res.setHeader("Cache-Control", "public,max-age=31536000,immutable");
          return res.end(Buffer.from(String(d).split(",")[1], "base64"));
        }
        const v = parse(await r.get("vs:state"));
        res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "public,max-age=0,s-maxage=1");
        return res.end(JSON.stringify({ state: v, now: Date.now(), locked: true }));
      }
      if (!adm) return json(res, 401, { error: "للإدارة فقط" });
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
      if (lg) { if (!/^data:image\/png;base64,/.test(b.data || "") || b.data.length > 600000) return json(res, 400, { error: "logo" }); await r.set("vs:logo:" + (lg === "b" ? "b" : "a"), b.data); return json(res, 200, { ok: 1 }); }
      const st = b.state, now = Date.now(); if (!st || !st.t) return json(res, 400, {});
      if (st.t.at === "NOW") st.t.at = now;
      if (st.ev && st.ev.id === "NEW") st.ev.id = now;
      await r.set("vs:state", JSON.stringify(st)); return json(res, 200, { state: st, now });
    }

    // ===== الشات العام + الحظر =====
    if (route === "chat") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis(), now = Date.now();
      const myBan = me ? parse(await r.hget("bans", me.id)) : null;
      const ban = myBan && myBan.until > now ? myBan : null;
      if (req.method === "GET") {
        if (u.searchParams.get("ban")) return json(res, 200, { ban });
        if (!me) return json(res, 401, {});
        const [open, raw] = await Promise.all([r.get("chat:open"), r.lrange("chat:msgs", 0, 59)]);
        const out = { open: String(open) !== "0", ban, admin: adm, msgs: (raw || []).map(parse).filter(Boolean).reverse() };
        if (adm) { const bl = await hash("bans"); out.bans = bl.filter(x => x.until > now); }
        return json(res, 200, out);
      }
      if (!me) return json(res, 401, {});
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
      b = b || {};
      if (b.op === "send") {
        const open = String(await r.get("chat:open")) !== "0";
        if (ban) return json(res, 403, { error: "banned" });
        if (!open && !adm) return json(res, 403, { error: "closed" });
        const t = str(b.t, 300).trim(); if (!t) return json(res, 400, {});
        const m = { id: now.toString(36) + Math.random().toString(36).slice(2, 5), uid: me.id, name: me.name, av: avatarOf(me.id, me.av), t, ts: now, adm };
        await r.lpush("chat:msgs", JSON.stringify(m)); await r.ltrim("chat:msgs", 0, 199); return json(res, 200, { ok: 1 });
      }
      if (!adm) return json(res, 403, {});
      if (b.op === "toggle") { await r.set("chat:open", b.open ? "1" : "0"); return json(res, 200, { ok: 1 }); }
      if (b.op === "del") { const l = await r.lrange("chat:msgs", 0, 199); const f = (l || []).map(parse).find(x => x && x.id === b.id); if (f) await r.lrem("chat:msgs", 1, JSON.stringify(f)); return json(res, 200, { ok: 1 }); }
      if (b.op === "ban") { const mins = Math.max(1, Math.min(525600, Number(b.mins) || 60)); if (!b.uid || ADMINS.includes(String(b.uid))) return json(res, 400, {}); await r.hset("bans", { [String(b.uid)]: JSON.stringify({ until: now + mins * 60000, reason: str(b.reason, 120), name: str(b.name, 60) }) }); return json(res, 200, { ok: 1 }); }
      if (b.op === "unban") { await r.hdel("bans", String(b.uid)); return json(res, 200, { ok: 1 }); }
      return json(res, 400, {});
    }

    // ===== بث الماتش (WebRTC) =====
    if (route === "live") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis(), now = Date.now(), q = u.searchParams;
      if (req.method === "GET") {
        if (q.get("ice")) {
          const L = [{ urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:global.stun.twilio.com:3478"] }];
          const tu = pick("TURN_URL"), tn = pick("TURN_USER"), tc = pick("TURN_PASS");
          if (tu) L.push({ urls: tu.split(",").map(x => x.trim()).filter(Boolean), username: tn, credential: tc });
          L.push({ urls: ["turn:openrelay.metered.ca:80", "turn:openrelay.metered.ca:443", "turn:openrelay.metered.ca:443?transport=tcp"], username: "openrelayproject", credential: "openrelayproject" });
          return json(res, 200, { iceServers: L });
        }
        if (q.get("offer")) return json(res, 200, { offer: (await r.get("live:offer:" + str(q.get("offer"), 40))) || null });
        if (q.get("joins")) {
          if (!adm) return json(res, 403, {});
          const j = (await r.hgetall("live:join")) || {}, a = (await r.hgetall("live:ans")) || {};
          const jk = Object.keys(j), ak = Object.keys(a);
          if (jk.length) await r.hdel("live:join", ...jk);
          if (ak.length) await r.hdel("live:ans", ...ak);
          return json(res, 200, { joins: jk, answers: a });
        }
        const [info, cheers, raw] = await Promise.all([r.get("live:info"), r.get("live:cheers"), r.lrange("live:chat", 0, 39)]);
        res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "public,max-age=0,s-maxage=2");
        return res.end(JSON.stringify({ info: parse(info) || { on: false }, cheers: Number(cheers) || 0, msgs: (raw || []).map(parse).filter(Boolean).reverse() }));
      }
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      if (b.op === "start" || b.op === "stop" || b.op === "offer") {
        if (!adm) return json(res, 403, {});
        if (b.op === "start") { await Promise.all([r.set("live:info", JSON.stringify({ on: true, title: str(b.title, 120), c1: str(b.c1, 60), c2: str(b.c2, 60), since: now })), r.set("live:cheers", 0), r.del("live:chat", "live:join", "live:ans")]); }
        else if (b.op === "stop") await r.set("live:info", JSON.stringify({ on: false }));
        else await r.set("live:offer:" + str(b.vid, 40), b.sdp, { ex: 120 });
        return json(res, 200, { ok: 1 });
      }
      if (!me) return json(res, 401, {});
      if (b.op === "join") { await r.hset("live:join", { [str(b.vid, 40)]: String(now) }); return json(res, 200, { ok: 1 }); }
      if (b.op === "answer") { await r.hset("live:ans", { [str(b.vid, 40)]: str(b.sdp, 20000) }); return json(res, 200, { ok: 1 }); }
      if (b.op === "cheer") { await r.incr("live:cheers"); return json(res, 200, { ok: 1 }); }
      if (b.op === "comment") {
        const bn = parse(await r.hget("bans", me.id)); if (bn && bn.until > now) return json(res, 403, { error: "banned" });
        const t = str(b.t, 200).trim(); if (!t) return json(res, 400, {});
        await r.lpush("live:chat", JSON.stringify({ name: me.name, av: avatarOf(me.id, me.av), t, ts: now })); await r.ltrim("live:chat", 0, 99);
        return json(res, 200, { ok: 1 });
      }
      return json(res, 400, {});
    }

    // ===== التذاكر =====
    if (route === "tix") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      if (!me) return json(res, 401, {});
      const r = redis();
      if (req.method === "GET") { const l = await hash("tickets"); return json(res, 200, (adm ? l : l.filter(x => x.uid === me.id)).sort((a, b) => b.ts - a.ts)); }
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      if (b.op === "new") {
        const type = ["player", "var", "decision"].includes(b.type) ? b.type : "player", text = str(b.text, 800).trim();
        if (!text) return json(res, 400, {});
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
        await r.hset("tickets", { [id]: JSON.stringify({ uid: me.id, name: me.name, type, target: str(b.target, 80), text, ts: Date.now(), status: "open", reply: "" }) });
        return json(res, 200, { ok: 1 });
      }
      if (adm && b.op === "set") { const o = parse(await r.hget("tickets", String(b.id))); if (!o) return json(res, 404, {}); await r.hset("tickets", { [String(b.id)]: JSON.stringify({ ...o, status: b.status === "closed" ? "closed" : "open", reply: str(b.reply, 1000), rts: Date.now() }) }); return json(res, 200, { ok: 1 }); }
      if (adm && b.op === "del") { await r.hdel("tickets", String(b.id)); return json(res, 200, { ok: 1 }); }
      return json(res, 403, {});
    }

    // ===== موافقة المعاد (mt) + تعديل النصوص (tx) =====
    if (route === "mt") {
      if (!hasRedis || !me) return json(res, 401, {});
      const r = redis(), nz = x => String(x || "").trim().toLowerCase();
      const [sch, apps] = await Promise.all([hash("schedule"), hash("applications")]);
      const rep = (it, k) => { const o = String(it["p" + k] || "").trim(); if (o) return o; const a = apps.find(x => x.status === "accepted" && nz(x.clan) === nz(it["c" + k])); return a ? a.id : ""; };
      if (req.method === "GET") return json(res, 200, sch.filter(it => it.status !== "cancelled" && !it.res).map(it => ({ id: it.id, c1: it.c1, c2: it.c2, when: it.when, mode: it.mode, i1: 0, side: rep(it, 1) === me.id ? 1 : rep(it, 2) === me.id ? 2 : 0, ok1: it.ok1 || "", ok2: it.ok2 || "" })).filter(x => x.side));
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      const it = sch.find(x => x.id === b.id); if (!it || !["yes", "no"].includes(b.ok)) return json(res, 400, {});
      const k = rep(it, 1) === me.id ? 1 : rep(it, 2) === me.id ? 2 : 0; if (!k) return json(res, 403, {});
      const { id, ...rest } = it; await r.hset("schedule", { [it.id]: JSON.stringify({ ...rest, ["ok" + k]: b.ok }) });
      await pushEvent("ok", `كلان «${it["c" + k]}» ${b.ok === "yes" ? "وافق على" : "رفض"} موعد ${it.c1} VS ${it.c2}`); await bump();
      return json(res, 200, { ok: 1 });
    }
    if (route === "tx") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis();
      if (req.method === "GET") { const h = (await r.hgetall("texts")) || {}; res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "public,max-age=0,s-maxage=5"); return res.end(JSON.stringify(h)); }
      if (!adm) return json(res, 403, {});
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      const f = str(b.from, 300); if (!f) return json(res, 400, {});
      if (b.to === "" || b.to == null) await r.hdel("texts", f); else await r.hset("texts", { [f]: str(b.to, 600) });
      return json(res, 200, { ok: 1 });
    }

    // ===== جدول النقاط (عام للقراءة، الإدارة للتعديل) =====
    if (route === "pts") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis();
      const STS = ["active", "qualified", "withdrawn", "out", "lost"];
      if (req.method === "GET") {
        const l = (await hash("points")).sort((a, b) => (b.pts || 0) - (a.pts || 0) || (b.w || 0) - (a.w || 0) || (a.l || 0) - (b.l || 0));
        res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "public,max-age=0,s-maxage=3");
        return res.end(JSON.stringify(l));
      }
      if (!adm) return json(res, 403, {});
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      const id = str(b.id, 40) || (Date.now().toString(36) + Math.random().toString(36).slice(2, 5));
      if (b.op === "del") { await r.hdel("points", id); await bump(); return json(res, 200, { ok: 1 }); }
      const old = parse(await r.hget("points", id)) || {};
      const name = str(b.name, 60).trim(); if (!name) return json(res, 400, { error: "name" });
      const n = (v, d) => Math.max(0, Math.min(9999, Math.round(Number(v))) || 0) || d;
      const num = v => Math.max(0, Math.min(9999, Math.round(Number(v) || 0)));
      let logo = old.logo || "";
      if (typeof b.logo === "string") logo = b.logo === "" ? "" : (/^data:image\/(png|jpeg|webp);base64,/.test(b.logo) && b.logo.length < 150000 ? b.logo : logo);
      await r.hset("points", { [id]: JSON.stringify({ name, logo, w: num(b.w), l: num(b.l), pts: num(b.pts), st: STS.includes(b.st) ? b.st : "active", ts: Date.now() }) });
      await bump(); return json(res, 200, { ok: 1, id });
    }

    if (route === "sc") {
      if (!hasRedis) return json(res, 503, { error: "no_redis" });
      const r = redis();
      if (req.method === "GET") { const l = await hash("scorers"); res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.setHeader("Cache-Control", "public,max-age=0,s-maxage=5"); return res.end(JSON.stringify(l.sort((a, b) => b.g - a.g).slice(0, 30))); }
      if (!adm) return json(res, 403, {});
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      const name = str(b.name, 40).trim(), clan = str(b.clan, 60).trim(), id = (name + "|" + clan).toLowerCase().replace(/\s+/g, "_");
      if (!name) return json(res, 400, {});
      if (b.op === "del") { await r.hdel("scorers", id); return json(res, 200, { ok: 1 }); }
      const o = parse(await r.hget("scorers", id)) || { name, clan, g: 0 };
      o.g = b.op === "inc" ? (o.g || 0) + 1 : Math.max(0, Math.min(999, Number(b.g) || 0));
      await r.hset("scorers", { [id]: JSON.stringify({ name, clan, g: o.g }) }); return json(res, 200, { ok: 1 });
    }
    if (route === "news") {
      if (!hasRedis || !adm) return json(res, 403, {});
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } } b = b || {};
      const t = str(b.t, 200).trim(); if (!t) return json(res, 400, {});
      await pushEvent("news", t); await bump(); return json(res, 200, { ok: 1 });
    }
    json(res, 404, { error: "not_found", route });
  } catch (e) { json(res, 500, { error: String(e.message || e) }); }
};
