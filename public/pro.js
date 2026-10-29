(function(){
/* ============ أداء الفون: شيل التأثيرات الثقيلة + ماتخليش أي كلام يختفي ============ */
var css=document.createElement('style');css.textContent=
'.rv,.fxv{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}'+
'.pg.on{animation:pgf .3s both!important}@keyframes pgf{from{opacity:0}}'+
'.card,.gcard,nav,#drawer,.match,.stand,#cbox,#lv{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'+
'nav{background:rgba(5,6,15,.94)!important}.card{background:#0d0f1af0}'+
'.pg h1,.pg h2,.pg .hero,.pg .big-ic,.pill,.dc{animation:none!important}'+
'.match.mx,.match.mx.live{animation:none!important;border:2px solid #e8c87288!important;background:linear-gradient(160deg,#1a150b,#07080e)!important}'+
'.match.mx.live{border-color:#ff4d5e!important}.mx .vsb b{animation:none!important}.match::after{display:none!important}'+
'.fl{display:none!important}'+
'.card:hover,.gcard:hover,.btn:hover,button:hover,nav button:hover{transform:none!important}'+
'@media (hover:none),(max-width:820px){.card,.gcard,.ev,.banner{background-image:none!important;transition:none!important}h1,h2{text-shadow:none!important}}'+
/* ============ النقاط ============ */
'#pts .ph{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}#pts .ph div{padding:14px;border-radius:16px;text-align:center;background:#ffffff08;border:1px solid #e8c87233}#pts .ph b{display:block;font:800 28px Cinzel,serif;color:#f3dc92}#pts .ph span{font-size:13px;opacity:.7}'+
'.pr{display:flex;align-items:center;gap:12px;padding:12px 14px;margin:9px 0;border-radius:18px;background:linear-gradient(135deg,#171a2bf0,#0a0c17f5);border:1px solid #ffffff14}'+
'.pr .rk{flex:none;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;font:800 17px Cinzel,serif;background:#ffffff10;color:#ddd}.pr.r1 .rk{background:linear-gradient(135deg,#fff1b8,#c89a3c);color:#1a1204}.pr.r2 .rk{background:linear-gradient(135deg,#f1f5f9,#94a3b8);color:#111}.pr.r3 .rk{background:linear-gradient(135deg,#fdba74,#b45309);color:#1a0c00}.pr.r1{border-color:#e8c872aa}'+
'.pr .lg{flex:none;width:56px;height:56px;border-radius:50%;overflow:hidden;display:grid;place-items:center;background:#0b0d18;border:2px solid #e8c87244;font:800 22px Cinzel,serif;color:#e8c872}.pr .lg img{width:100%;height:100%;object-fit:cover}'+
'.pr .nm{flex:1;min-width:0}.pr .nm b{display:block;font-size:17px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pr .sb{display:inline-block;margin-top:5px;padding:3px 11px;border-radius:99px;font-size:12px;font-weight:800}'+
'.sb.active{background:#22c55e22;color:#86efac}.sb.qualified{background:#e8c87226;color:#f3dc92}.sb.withdrawn{background:#f9731626;color:#fdba74}.sb.out{background:#ef444426;color:#fca5a5}.sb.lost{background:#94a3b826;color:#cbd5e1}'+
'.pr .ss{display:flex;gap:8px;flex:none}.pr .ss div{min-width:54px;text-align:center;padding:6px 8px;border-radius:12px;background:#ffffff09}.pr .ss b{display:block;font:800 20px Cinzel,serif}.pr .ss span{font-size:11px;opacity:.65}.pr .ss .pt b{color:#f3dc92;font-size:24px}.pr .ss .pt{background:#e8c87218;border:1px solid #e8c87244}.pr .ss .ww b{color:#86efac}.pr .ss .ll b{color:#fca5a5}'+
'.pr.dim{opacity:.62}.pr.dim .lg img{filter:grayscale(1)}'+
'@media(max-width:560px){.pr{flex-wrap:wrap}.pr .ss{width:100%;justify-content:space-between}.pr .ss div{flex:1}.pr .lg{width:48px;height:48px}}'+
/* ============ أدمن: النقاط + التذاكر ============ */
'.ptr{display:grid;grid-template-columns:auto 1.4fr repeat(3,70px) 1.1fr auto;gap:8px;align-items:center;padding:10px;margin:8px 0;border-radius:14px;background:#ffffff08;border:1px solid #ffffff14}.ptr input,.ptr select{width:100%;margin:0;padding:9px}.ptr .lg{width:46px;height:46px;border-radius:50%;overflow:hidden;background:#0b0d18;border:1px solid #e8c87255;display:grid;place-items:center;cursor:pointer;color:#e8c872;font-weight:800}.ptr .lg img{width:100%;height:100%;object-fit:cover}'+
'@media(max-width:760px){.ptr{grid-template-columns:auto 1fr 1fr 1fr}.ptr .nmi{grid-column:span 3}.ptr select,.ptr .acts{grid-column:span 4}}'+
'.ptr .acts{display:flex;gap:6px}.ptr .acts button{padding:9px 14px}.btn.dn{background:#7f1d1d!important}.btn.ok{background:#166534!important}'+
'.tstat{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}.tstat div{padding:16px;border-radius:16px;text-align:center;background:#ffffff08;border:1px solid #ffffff14}.tstat b{display:block;font:800 30px Cinzel,serif}.tstat span{font-size:13px;opacity:.7}.tstat .o b{color:#ffd97a}.tstat .c b{color:#86efac}'+
'.tflt{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}.tflt button{padding:9px 16px}.tflt button.on{background:linear-gradient(135deg,#e8c872,#c89a3c);color:#1a1204;font-weight:800}'+
'.atk{padding:20px;margin:14px 0;border-radius:20px;background:linear-gradient(160deg,#151826,#0a0b14);border:1px solid #ffffff18;border-inline-start:6px solid var(--c);box-shadow:0 12px 34px #0007}.atk.closed{opacity:.72}'+
'.atk .th{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.atk .th .ic{font-size:30px}.atk .th h3{margin:0;font-size:19px}.atk .th small{opacity:.6}.atk .chip{padding:4px 14px;border-radius:99px;font-size:13px;font-weight:800}.atk .chip.o{background:#ffc53d22;color:#ffd97a}.atk .chip.c{background:#22c55e22;color:#86efac}'+
'.atk .meta{display:flex;gap:18px;flex-wrap:wrap;margin:12px 0;font-size:14px;opacity:.85}.atk .meta b{color:#e8c872}.atk .txt{padding:16px;border-radius:14px;background:#05060f;border:1px solid #ffffff14;line-height:1.9;font-size:16px;white-space:pre-wrap;word-break:break-word}'+
'.atk textarea{width:100%;min-height:90px;margin-top:12px;padding:13px;border-radius:12px;border:1px solid #ffffff22;background:#05060f;color:#fff;font:inherit;font-size:15px}.atk .acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.atk .acts button{padding:12px 20px;font-weight:800}'+
'.tb{display:inline-block;min-width:20px;padding:1px 6px;margin-inline-start:6px;border-radius:99px;background:#ef4444;color:#fff;font-size:12px;font-weight:800}';
document.head.appendChild(css);

var Q=function(s){return document.querySelector(s)},QA=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function post(u,b){return fetch(u,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(function(r){return r.json()})}
function say(t,i){if(typeof toast==='function')toast(t,i||'✦')}
var ST={active:'في البطولة',qualified:'متأهل 🏆',withdrawn:'منسحب من البطولة',out:'خرج من البطولة',lost:'خسران'};
function stOpts(v){return Object.keys(ST).map(function(k){return '<option value="'+k+'"'+(k===v?' selected':'')+'>'+ST[k]+'</option>'}).join('')}
function logoOf(file){return new Promise(function(ok){if(!file)return ok('');var i=new Image,u=URL.createObjectURL(file);i.onload=function(){var c=document.createElement('canvas');c.width=c.height=160;var g=c.getContext('2d'),k=Math.min(160/i.width,160/i.height),w=i.width*k,h=i.height*k;g.drawImage(i,(160-w)/2,(160-h)/2,w,h);var d=c.toDataURL('image/png');if(d.length>140000)d=c.toDataURL('image/jpeg',.85);URL.revokeObjectURL(u);ok(d)};i.onerror=function(){ok('')};i.src=u})}

/* ============ صفحة النقاط (للكل) ============ */
var PTS=[],ptsT=0;
function initials(n){return esc(String(n).trim().slice(0,2).toUpperCase())}
function renderPts(){
  var box=Q('#ptsBox');if(!box)return;
  var tot=PTS.length,act=PTS.filter(function(x){return x.st==='active'||x.st==='qualified'}).length,out=tot-act;
  box.innerHTML='<div class="ph"><div><b>'+tot+'</b><span>كلان مسجّل</span></div><div><b>'+act+'</b><span>مستمر في البطولة</span></div><div><b>'+out+'</b><span>خارج البطولة</span></div></div>'+
  (PTS.length?PTS.map(function(x,i){var dim=(x.st==='out'||x.st==='withdrawn'||x.st==='lost');
    return '<div class="pr r'+(i+1)+(dim?' dim':'')+'"><div class="rk">'+(i+1)+'</div><div class="lg">'+(x.logo?'<img src="'+x.logo+'" alt="" loading="lazy" decoding="async">':initials(x.name))+'</div><div class="nm"><b>'+esc(x.name)+'</b><span class="sb '+esc(x.st)+'">'+(ST[x.st]||ST.active)+'</span></div><div class="ss"><div class="ww"><b>'+(x.w||0)+'</b><span>فوز</span></div><div class="ll"><b>'+(x.l||0)+'</b><span>خسارة</span></div><div class="pt"><b>'+(x.pts||0)+'</b><span>نقطة</span></div></div></div>'}).join(''):'<div class="card emptyc"><div class="big-ic">📊</div><p class="muted">جدول النقاط هيظهر هنا أول ما الإدارة تضيف الكلانات.</p></div>');
}
async function loadPts(){try{var r=await fetch('/api/pts',{cache:'no-store'});var j=await r.json();if(Array.isArray(j)){PTS=j;renderPts();if(Q('#a_pts')&&!Q('#a_pts').classList.contains('hide')&&!document.activeElement.closest('.ptr'))renderAdminPts()}}catch(e){}}
function mountPts(){
  if(Q('#pts'))return;
  var sec=document.createElement('section');sec.className='pg';sec.id='pts';
  sec.innerHTML='<h1 class="grad">النقاط</h1><p class="muted">ترتيب الكلانات في البطولة: الفوز والخسارة والنقاط وحالة كل كلان.</p><div id="ptsBox"></div>';
  var sch=Q('#sched');sch.parentNode.insertBefore(sec,sch.nextSibling);
  var nb=document.createElement('button');nb.setAttribute('data-p','pts');nb.textContent='النقاط';
  var sb=Q('nav button[data-p="sched"]');sb.parentNode.insertBefore(nb,sb.nextSibling);
  nb.onclick=function(){go('pts')};
  var og=window.go;if(typeof og==='function')window.go=function(p){og(p);if(p==='pts')loadPts()};
  renderPts();loadPts();
  setInterval(function(){if(!document.hidden&&Q('#pts').classList.contains('on'))loadPts()},12000);
}

/* ============ أدمن: النقاط ============ */
function ptRow(x){
  return '<div class="ptr" data-id="'+esc(x.id||'')+'"><label class="lg" title="غيّر اللوجو">'+(x.logo?'<img src="'+x.logo+'" alt="">':'＋')+'<input type="file" accept="image/*" hidden></label>'+
  '<input class="nmi" data-f="name" value="'+esc(x.name||'')+'" placeholder="اسم الكلان" maxlength="60"><input type="number" min="0" data-f="w" value="'+(x.w||0)+'" title="فوز"><input type="number" min="0" data-f="l" value="'+(x.l||0)+'" title="خسارة"><input type="number" min="0" data-f="pts" value="'+(x.pts||0)+'" title="نقاط">'+
  '<select data-f="st">'+stOpts(x.st||'active')+'</select><div class="acts"><button class="btn sm ok" data-act="save">حفظ</button>'+(x.id?'<button class="btn sm dn" data-act="del">حذف</button>':'')+'</div></div>';
}
function renderAdminPts(){
  var h=Q('#a_ptsL');if(!h)return;
  h.innerHTML=PTS.map(ptRow).join('')||'<p class="muted">لسه مفيش كلانات — أضف أول كلان من فوق.</p>';
}
function readRow(row){var o={id:row.dataset.id||undefined};row.querySelectorAll('[data-f]').forEach(function(i){o[i.dataset.f]=i.value});return o}
function mountAdminPts(){
  var p=document.createElement('div');p.id='a_pts';p.className='ap hide';
  p.innerHTML='<div class="card"><h2 style="font-size:20px">➕ إضافة كلان للجدول</h2><div class="ptr" id="ptsNew" data-id="">'+
   '<label class="lg" title="لوجو الكلان"><span id="pnL">＋</span><input type="file" accept="image/*" hidden id="pnF"></label><input class="nmi" id="pnN" placeholder="اسم الكلان" maxlength="60"><input type="number" min="0" id="pnW" value="0" title="فوز"><input type="number" min="0" id="pnLs" value="0" title="خسارة"><input type="number" min="0" id="pnP" value="0" title="نقاط"><select id="pnS">'+stOpts('active')+'</select><div class="acts"><button class="btn sm ok" id="pnAdd">إضافة</button></div></div>'+
   '<p class="muted" style="font-size:13px">الأعمدة: فوز · خسارة · نقاط. النقاط بتتكتب يدوي، أو اضغط «حساب تلقائي» لحسابها (فوز = 3 نقاط).</p><button class="btn sm" id="pnAuto">⚡ حساب النقاط تلقائيًا للكل (فوز×3)</button></div>'+
   '<div id="a_ptsL"></div>';
  Q('#a_log').parentNode.appendChild(p);
  var newLogo='';
  Q('#pnF').onchange=async function(){newLogo=await logoOf(this.files[0]);Q('#pnL').innerHTML=newLogo?'<img src="'+newLogo+'" style="width:100%;height:100%;object-fit:cover">':'＋'};
  Q('#pnAdd').onclick=async function(){var n=Q('#pnN').value.trim();if(!n)return say('اكتب اسم الكلان','⚠');
    var r=await post('/api/pts',{name:n,logo:newLogo,w:Q('#pnW').value,l:Q('#pnLs').value,pts:Q('#pnP').value,st:Q('#pnS').value});
    if(r.ok){say('تمت إضافة الكلان','📊');Q('#pnN').value='';Q('#pnW').value=Q('#pnLs').value=Q('#pnP').value=0;newLogo='';Q('#pnL').textContent='＋';Q('#pnF').value='';loadPts()}else say('حصل خطأ','⚠')};
  Q('#pnAuto').onclick=async function(){if(!confirm('هتتحسب نقاط كل الكلانات = عدد الانتصارات × 3. متأكد؟'))return;
    for(var i=0;i<PTS.length;i++){var x=PTS[i];await post('/api/pts',{id:x.id,name:x.name,w:x.w,l:x.l,pts:(x.w||0)*3,st:x.st})}say('تم حساب النقاط','⚡');loadPts()};
  Q('#a_ptsL').addEventListener('click',async function(e){
    var b=e.target.closest('[data-act]');if(!b)return;var row=b.closest('.ptr'),id=row.dataset.id;
    if(b.dataset.act==='del'){if(!confirm('حذف الكلان من الجدول؟'))return;await post('/api/pts',{op:'del',id:id});say('تم الحذف','🗑');loadPts();return}
    var o=readRow(row);o.id=id;var r=await post('/api/pts',o);say(r.ok?'تم الحفظ ✅':'حصل خطأ',r.ok?'📊':'⚠');loadPts()});
  Q('#a_ptsL').addEventListener('change',async function(e){
    var f=e.target;if(f.type!=='file')return;var row=f.closest('.ptr'),logo=await logoOf(f.files[0]);if(!logo)return;
    var o=readRow(row);o.id=row.dataset.id;o.logo=logo;var r=await post('/api/pts',o);say(r.ok?'تم تغيير اللوجو':'حصل خطأ','🖼');loadPts()});
}

/* ============ أدمن: التذاكر (احترافي وبعرض الصفحة) ============ */
var TK=[],tkF='open',tkSeen=null,TY={player:{n:'شكوى ضد لاعب',i:'🚨',c:'#ef4444'},var:{n:'طلب مراجعة VAR',i:'📺',c:'#38bdf8'},decision:{n:'شكوى على قرار VAR',i:'⚖',c:'#e8c872'}};
function renderTix(){
  var box=Q('#a_tixL');if(!box)return;
  var o=TK.filter(function(x){return x.status!=='closed'}).length,c=TK.length-o;
  var badge=Q('#tixBadge');if(badge){badge.textContent=o;badge.style.display=o?'':'none'}
  Q('#tixStat').innerHTML='<div class="o"><b>'+o+'</b><span>مفتوحة</span></div><div class="c"><b>'+c+'</b><span>اتقفلت</span></div><div><b>'+TK.length+'</b><span>الإجمالي</span></div>';
  var l=TK.filter(function(x){return tkF==='all'||(tkF==='open'?x.status!=='closed':x.status==='closed')});
  box.innerHTML=l.map(function(x){var t=TY[x.type]||TY.player,cl=x.status==='closed';
    return '<div class="atk'+(cl?' closed':'')+'" style="--c:'+t.c+'" data-id="'+esc(x.id)+'"><div class="th"><span class="ic">'+t.i+'</span><h3>'+t.n+'</h3><span class="chip '+(cl?'c':'o')+'">'+(cl?'✅ مقفولة':'⏳ مفتوحة')+'</span><small style="margin-inline-start:auto">#'+esc(String(x.id).slice(-5))+' · '+new Date(x.ts).toLocaleString('ar-EG')+'</small></div>'+
    '<div class="meta"><span>👤 مقدّم التذكرة: <b>'+esc(x.name)+'</b></span>'+(x.target?'<span>🎯 بخصوص: <b>'+esc(x.target)+'</b></span>':'')+'</div><div class="txt">'+esc(x.text)+'</div>'+
    '<textarea placeholder="اكتب ردّك للاعب…">'+esc(x.reply||'')+'</textarea><div class="acts">'+(cl?'<button class="btn" data-act="open">↩ إعادة فتح</button><button class="btn" data-act="save">حفظ الرد</button>':'<button class="btn ok" data-act="close">✅ رد وإغلاق التذكرة</button><button class="btn" data-act="save">حفظ الرد فقط</button>')+'<button class="btn dn" data-act="del" style="margin-inline-start:auto">🗑 حذف</button></div></div>'}).join('')||'<div class="card emptyc"><div class="big-ic">🎫</div><p class="muted">مفيش تذاكر '+(tkF==='open'?'مفتوحة':'هنا')+' دلوقتي.</p></div>';
  QA('.tflt button').forEach(function(b){b.classList.toggle('on',b.dataset.f===tkF)});
}
async function loadTix(){
  try{var j=await (await fetch('/api/tix',{cache:'no-store'})).json();if(!Array.isArray(j))return;
    if(tkSeen){var nw=j.filter(function(x){return !tkSeen[x.id]&&x.status!=='closed'});if(nw.length)say('🎫 تذكرة جديدة من '+nw[0].name,'🎫')}
    tkSeen={};j.forEach(function(x){tkSeen[x.id]=1});TK=j;
    if(!document.activeElement||document.activeElement.tagName!=='TEXTAREA')renderTix();else{var b=Q('#tixBadge'),o=TK.filter(function(x){return x.status!=='closed'}).length;if(b){b.textContent=o;b.style.display=o?'':'none'}}
  }catch(e){}
}
function mountAdminTix(){
  var p=document.createElement('div');p.id='a_tix';p.className='ap hide';
  p.innerHTML='<div class="tstat" id="tixStat"></div><div class="tflt"><button class="btn sm" data-f="open">المفتوحة</button><button class="btn sm" data-f="closed">المقفولة</button><button class="btn sm" data-f="all">الكل</button><button class="btn sm" id="tixRef" style="margin-inline-start:auto">🔄 تحديث</button></div><div id="a_tixL"></div>';
  Q('#a_log').parentNode.appendChild(p);
  p.addEventListener('click',async function(e){
    var f=e.target.closest('[data-f]');if(f){tkF=f.dataset.f;renderTix();return}
    if(e.target.id==='tixRef'){loadTix();return}
    var b=e.target.closest('[data-act]');if(!b)return;var card=b.closest('.atk'),id=card.dataset.id,reply=card.querySelector('textarea').value.trim(),a=b.dataset.act;
    if(a==='del'){if(!confirm('حذف التذكرة نهائيًا؟'))return;await post('/api/tix',{op:'del',id:id});say('تم حذف التذكرة','🗑')}
    else{await post('/api/tix',{op:'set',id:id,status:a==='close'?'closed':a==='open'?'open':(TK.find(function(x){return x.id===id})||{}).status,reply:reply});say(a==='close'?'تم الرد وقفل التذكرة ✅':a==='open'?'تمت إعادة فتح التذكرة':'تم حفظ الرد','🎫')}
    loadTix()});
}
function mountAdmin(){
  var row=Q('#admin .row');if(!row||Q('#a_pts'))return;
  function btn(id,t,extra){var b=document.createElement('button');b.className='btn sm';b.setAttribute('data-a',id);b.innerHTML=t;row.appendChild(b);b.onclick=function(){QA('.ap').forEach(function(e){e.classList.add('hide')});Q('#'+id).classList.remove('hide');QA('[data-a]').forEach(function(x){x.classList.toggle('go',x===b)});if(extra)extra()}}
  mountAdminPts();mountAdminTix();
  btn('a_pts','📊 النقاط',function(){renderAdminPts()});
  btn('a_tix','🎫 التذاكر <i class="tb" id="tixBadge" style="display:none">0</i>',function(){loadTix()});
  var v=document.createElement('a');v.className='btn sm';v.href='/var.html';v.target='_blank';v.rel='noopener';v.textContent='🎛 VAR System';v.style.textDecoration='none';row.appendChild(v);
  loadTix();setInterval(function(){if(!document.hidden)loadTix()},20000);
}

function init(){
  mountPts();
  fetch('/api/me',{cache:'no-store'}).then(function(r){return r.json()}).then(function(m){if(m&&m.isAdmin)mountAdmin()}).catch(function(){});
}
if(document.body&&Q('#sched'))init();else document.addEventListener('DOMContentLoaded',init);
})();
