(function(){
var css=document.createElement('style');css.textContent=
'@property --a{syntax:"<angle>";initial-value:0deg;inherits:false}@keyframes mxr{to{--a:360deg}}'+
'.match.mx{border:2px solid transparent;background:linear-gradient(160deg,#1a150b,#07080e) padding-box,conic-gradient(from var(--a),#e8c872,#ff7a2f,#7c8cff,#e8c872) border-box;animation:mxr 7s linear infinite;box-shadow:0 24px 60px #000a,0 0 40px #e8c87222}'+
'.match.mx.live{background:linear-gradient(160deg,#2a0a10,#07080e) padding-box,conic-gradient(from var(--a),#ff4d5e,#ffd666,#ff4d5e) border-box;box-shadow:0 0 60px #ff4d5e55}'+
'.mx .vsb b{font:900 clamp(34px,9vw,58px) Impact,sans-serif;background:linear-gradient(#fff6c8,#e8c872,#b8860b);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 0 16px #e8c87299);animation:mvs 2.4s ease-in-out infinite alternate}@keyframes mvs{to{transform:scale(1.14)}}'+
'.mx .team{text-align:center;position:relative}.mx .team h3{margin:10px 0 4px;font-size:clamp(16px,4.4vw,24px)}.mx .team.win .mlogo{border-color:#22c55e;box-shadow:0 0 0 5px #22c55e33,0 0 50px #22c55e88}.mx .team.lose{opacity:.55;filter:grayscale(.7)}'+
'.mx .crn,.mx .wdr{display:inline-block;margin:2px;padding:3px 12px;border-radius:99px;font-weight:800;font-size:13px}.mx .crn{background:#22c55e2a;color:#86efac}.mx .wdr{background:#ef44442a;color:#fca5a5}'+
'.mx em{display:block;margin:6px auto 0;width:fit-content;font-style:normal;font-size:12px;padding:3px 12px;border-radius:99px}.mx em.ok{background:#22c55e2a;color:#86efac}.mx em.no{background:#ef44442a;color:#fca5a5}.mx em.wt{background:#ffc53d22;color:#ffd97a}'+
'.mban{margin:10px 0;padding:10px;border-radius:12px;text-align:center;font-weight:800}.mban.c{background:#ef444422;border:1px solid #ef4444;color:#fca5a5}.mban.p{background:#ffc53d22;border:1px solid #ffc53d;color:#ffd97a}'+
'.mrule{margin-top:10px;text-align:center;font-size:12px;opacity:.65}'+
'.stand{margin:14px 0;padding:16px;border-radius:20px;background:linear-gradient(160deg,#16130c,#07080e);border:1px solid #e8c87255}.stand h3{margin:0 0 4px;color:#f3dc92}.stand small{opacity:.7;display:block;margin-bottom:10px}.sr{display:flex;align-items:center;gap:10px;padding:9px 12px;margin-top:6px;border-radius:12px;background:#ffffff08}.sr b{flex:1}.sr .hs{letter-spacing:3px}.sr .bd{font-size:12px;padding:3px 10px;border-radius:99px;background:#ffffff14}.sr.q{border:1px solid #22c55e88}.sr.x{opacity:.5;text-decoration:line-through}.sr.w{border:1px solid #ffc53d88}'+
'#am{position:fixed;inset:0;z-index:99990;background:radial-gradient(circle at 50% 30%,#2a210f,#02030a 75%);display:flex;align-items:center;justify-content:center;padding:16px;font-family:Tajawal,Tahoma,sans-serif;color:#f4ecd8;animation:ami .7s}@keyframes ami{from{opacity:0;transform:scale(1.15);filter:blur(12px)}}#am .bx{width:min(520px,100%);text-align:center;padding:26px 20px;border-radius:24px;background:#0b0d17ee;border:2px solid #e8c872;box-shadow:0 0 80px #e8c87244}#am h2{margin:0 0 6px;color:#f3dc92;font-size:28px}#am .vs{font:900 38px Impact,sans-serif;margin:14px 0;direction:ltr}#am .wr{margin:14px 0;padding:12px;border-radius:12px;background:#ef44441c;border:1px solid #ef444477;color:#fca5a5;font-size:14px;line-height:1.8}#am button{margin:6px;padding:14px 30px;border:0;border-radius:14px;font:800 18px Tajawal,sans-serif;cursor:pointer}';
document.head.appendChild(css);
var HS=function(n){return '❤'.repeat(Math.max(0,3-n))+'🖤'.repeat(Math.min(3,n))};
function stand(){
  var m={};function g(n){var k=String(n).trim().toLowerCase();return m[k]=m[k]||{n:n,w:0,l:0}}
  (S.sched||[]).forEach(function(x){g(x.c1);g(x.c2);if(!x.res)return;var a=g(x.c1),b=g(x.c2);if(x.res==='c1'||x.res==='wd2'){a.w++;b.l++}else{b.w++;a.l++}});
  var L=Object.values(m);if(!L.length)return '';
  L.sort(function(a,b){return b.w-a.w||a.l-b.l});
  return '<div class="stand"><h3>🏆 الفرص والتأهل</h3><small>لكل كلان 3 فرص: 3 خسارات = خروج من البطولة · فوزين = تأهل · الانسحاب يتحسب خسارة</small>'+L.map(function(c){
    var q=c.w>=2,x=!q&&c.l>=3,w=!q&&!x&&c.l===2,cl=q?'q':x?'x':w?'w':'',bd=q?'🏆 متأهل':x?'❌ خرج':w?'⚠ لازم يكسب الماتش الجاي':'✅ مستمر';
    return '<div class="sr '+cl+'"><b>'+esc(c.n)+'</b><span class="hs">'+HS(c.l)+'</span><span>'+c.w+'F · '+c.l+'L</span><span class="bd">'+bd+'</span></div>'}).join('')+'</div>';
}
var _st=stOf;
stOf=function(s){if(s.status==='cancelled'||s.res)return 'end';return _st(s)};
window.matchHtml=function(s){
  var t=+new Date(s.when),st=stOf(s),L={up:'⏳ قريبًا',live:'🔴 يُلعب الآن',end:'انتهى'}[st],can=s.status==='cancelled',pp=s.status==='postponed';
  if(can)L='🚫 ملغي';else if(s.res)L='🏁 انتهى';else if(pp&&st==='up')L='⏸ اتأجل';
  var w=s.res==='c1'||s.res==='wd2'?1:s.res==='c2'||s.res==='wd1'?2:0,act=st!=='end'&&!can;
  var cd=st==='up'?'<div class="cd"><div><b>00</b><small>يوم</small></div><div><b>00</b><small>ساعة</small></div><div><b>00</b><small>دقيقة</small></div><div><b>00</b><small>ثانية</small></div></div>':'<div class="cdx">'+(can?'تم إلغاء هذا الماتش':s.res?'تم تسجيل النتيجة':st==='live'?'🔥 الماتش شغّال دلوقتي — ادخل الغرفة!':'انتهى موعد هذه المباراة')+'</div>';
  function chip(o){return o==='yes'?'<em class="ok">✅ وافق على المعاد</em>':o==='no'?'<em class="no">❌ رفض المعاد</em>':'<em class="wt">⏳ منتظر الموافقة</em>'}
  function team(k){var n=s['c'+k],i=s['i'+k];return '<div class="team'+(w===k?' win':w?' lose':'')+'"><div class="mlogo">'+logo(i,n)+'</div><h3>'+esc(n)+'</h3>'+(w===k?'<div class="crn">👑 فاز</div>':'')+(s.res==='wd'+k?'<div class="wdr">🏳 انسحب</div>':'')+(act&&st==='up'?chip(s['ok'+k]):'')+'</div>'}
  return '<div class="match mx rv '+st+'" data-t="'+t+'" data-st="'+st+'"><div class="mtop"><span class="mmode">'+esc(s.mode)+'</span><span class="mst">'+L+'</span></div>'+
  (can?'<div class="mban c">🚫 تم إلغاء الماتش'+(s.note?' — '+esc(s.note):'')+'</div>':pp?'<div class="mban p">⏸ الماتش اتأجل — تم تحديد موعد جديد'+(s.note?' — '+esc(s.note):'')+'</div>':'')+
  '<div class="mbody">'+team(1)+'<div class="vsb"><i></i><b>VS</b><i></i></div>'+team(2)+'</div>'+cd+
  '<div class="mmeta"><span>🕒 '+fmt(s.when)+'</span>'+(s.room&&act?'<span class="cp" data-v="'+esc(s.room)+'" onclick="cp(this)">🏠 الغرفة <b>'+esc(s.room)+'</b> ⧉</span>':'')+(s.pass&&act?'<span class="cp" data-v="'+esc(s.pass)+'" onclick="cp(this)">🔑 <b>'+esc(s.pass)+'</b> ⧉</span>':'')+'</div>'+
  (act?'<div class="mrule">⚠ بعد الموافقة، لو جه الوقت وماقدرتش تدخل لأي سبب = انسحاب (خسارة)</div>':'')+'</div>';
};
var SC=[],scT=0;
async function scGet(){if(Date.now()-scT<15000)return;scT=Date.now();try{SC=await (await fetch('/api/sc')).json()}catch(e){}}
function scoreHtml(){if(!SC.length)return '';return '<div class="stand sct"><h3>⚽ الهدافين</h3>'+SC.slice(0,10).map(function(x,i){return '<div class="sr'+(i===0?' q':'')+'"><span>'+(['🥇','🥈','🥉'][i]||(i+1))+'</span><b>'+esc(x.name)+'</b><small>'+esc(x.clan)+'</small><span class="bd">'+x.g+' ⚽</span></div>'}).join('')+'</div>'}
function inject(){var l=document.getElementById('schedList');if(!l)return;scGet().then(function(){var st=l.querySelector('.stand:not(.sct)');if(!st){var h=stand();if(h)l.insertAdjacentHTML('afterbegin',h);st=l.querySelector('.stand:not(.sct)')}if(st&&!l.querySelector('.sct')){var s2=scoreHtml();if(s2)st.insertAdjacentHTML('afterend',s2)}})}
new MutationObserver(function(){clearTimeout(inject.t);inject.t=setTimeout(inject,150)}).observe(document.body,{childList:true,subtree:true});
async function ask(){
  try{var l=await (await fetch('/api/mt')).json();if(!Array.isArray(l))return;
  var x=l.filter(function(m){return new Date(m.when)>Date.now()&&!m['ok'+m.side]})[0];if(!x)return;
  var d=document.createElement('div');d.id='am';
  d.innerHTML='<div class="bx"><div style="font-size:54px">📅</div><h2>موعد ماتشك</h2><div class="vs">'+esc(x.c1)+' <span style="color:#e8c872">VS</span> '+esc(x.c2)+'</div><div style="font-size:20px">🕒 '+fmt(x.when)+' · '+esc(x.mode)+'</div><div class="wr">لو وافقت ووصل الوقت وماقدرتش تدخل لأي سبب، ده يتحسب <b>انسحاب من الماتش</b> (خسارة).<br>كل كلان له 3 فرص، ولو جهازك علّق الماتش بيتوقف مؤقتًا لحد ما ترجع.</div><button id="ay" style="background:linear-gradient(135deg,#fff3c4,#e8c872,#c89a3c);color:#1a1204">✅ موافق على المعاد</button><button id="an" style="background:#4b5563;color:#fff">❌ مش موافق</button></div>';
  document.body.appendChild(d);
  function go(v){return async function(){await fetch('/api/mt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:x.id,ok:v})});d.remove();ask()}}
  document.getElementById('ay').onclick=go('yes');document.getElementById('an').onclick=go('no');
  }catch(e){}
}
fetch('/api/me').then(function(r){return r.json()}).then(function(m){if(m)setTimeout(ask,2500)}).catch(function(){});
})();
