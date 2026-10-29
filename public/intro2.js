(function(){
var K='intro',first=false;try{first=!sessionStorage.getItem(K);sessionStorage.setItem(K,'1')}catch(e){}
var css=document.createElement('style');
css.textContent='#splash{display:none!important}'+
'#xi{position:fixed;inset:0;z-index:99998;background:#02030a;color:#f4ecd8;font-family:Tajawal,"Segoe UI",Tahoma,sans-serif;overflow:hidden;transition:opacity 1s,transform 1s,filter 1s}'+
'#xi.out{opacity:0;transform:scale(1.35);filter:blur(24px);pointer-events:none}'+
'#xi canvas{position:absolute;inset:0}'+
'#xi .beam{position:absolute;inset:-50%;background:conic-gradient(from 0deg at 50% 60%,transparent 0 8%,#e8c87224 10%,transparent 14% 30%,#ff7a2f1c 33%,transparent 37% 55%,#e8c8721f 58%,transparent 62% 80%,#7c8cff18 84%,transparent 88%);animation:xb 14s linear infinite}@keyframes xb{to{transform:rotate(360deg)}}'+
'#xi .vg{position:absolute;inset:0;background:radial-gradient(circle,transparent 40%,#000 100%)}'+
'#xi .sc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:70px 18px 90px;opacity:0;pointer-events:none;text-align:center}'+
'#xi .sc.on{opacity:1;pointer-events:auto}'+
'#xi .big{position:absolute;font:900 min(60vw,520px)/1 Impact,sans-serif;color:#e8c87210;z-index:0;animation:xg 6s ease-in-out infinite alternate;direction:ltr}@keyframes xg{to{transform:scale(1.12) rotate(3deg)}}'+
'#xi .k{letter-spacing:9px;font-size:13px;color:#ff7a2f;direction:ltr;z-index:1}'+
'#xi h2{margin:8px 0 22px;font-size:clamp(26px,6vw,52px);font-weight:900;z-index:1;background:linear-gradient(90deg,#fff6d0,#e8c872,#ff7a2f,#e8c872);background-size:300%;-webkit-background-clip:text;color:transparent;animation:xs 4s linear infinite}@keyframes xs{to{background-position:300%}}'+
'#xi .it{opacity:0;transform:translateY(40px) scale(.9);filter:blur(8px)}'+
'#xi .sc.on .it{animation:xi .8s var(--d,0s) both cubic-bezier(.2,1.3,.4,1)}@keyframes xi{to{opacity:1;transform:none;filter:none}}'+
'#xi .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(290px,100%),1fr));gap:12px;width:min(920px,100%);z-index:1}'+
'#xi .c{position:relative;display:flex;gap:12px;align-items:center;text-align:right;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a1d3a99,#0a0c1ccc);border:1px solid #e8c87244;box-shadow:0 0 24px #e8c87214;overflow:hidden}'+
'#xi .c:after{content:"";position:absolute;top:0;bottom:0;width:60px;background:linear-gradient(90deg,transparent,#ffffff33,transparent);transform:skewX(-20deg);left:-100px;animation:xw 3s var(--d,0s) infinite}@keyframes xw{60%,100%{left:120%}}'+
'#xi .c i{font-style:normal;font-size:30px;flex:none;filter:drop-shadow(0 0 10px #e8c872)}#xi .c b{display:block;font-size:16px}#xi .c small{opacity:.7;font-size:12.5px}'+
'#xi .c em{font-style:normal;position:absolute;top:6px;left:8px;font-size:10px;background:#ff7a2f;color:#1a0b00;border-radius:6px;padding:1px 6px;font-weight:800}'+
'#xi .logo{font:900 clamp(46px,14vw,120px)/1 Impact,sans-serif;letter-spacing:8px;direction:ltr;z-index:1;background:linear-gradient(90deg,#e8c872,#fff,#ff7a2f,#e8c872);background-size:300%;-webkit-background-clip:text;color:transparent;animation:xs 3s linear infinite,xp 1.6s both cubic-bezier(.2,1.4,.3,1)}@keyframes xp{from{transform:scale(.2) rotate(-14deg);opacity:0;filter:blur(24px)}}'+
'#xi .rg{position:absolute;left:50%;top:50%;width:140px;height:140px;margin:-70px;border:2px solid #e8c872;border-radius:50%;opacity:0;animation:xr 3.2s infinite ease-out}@keyframes xr{0%{transform:scale(.3);opacity:.9}100%{transform:scale(9);opacity:0}}'+
'#xi .cam{position:relative;width:min(960px,100%);padding:26px 18px;z-index:1}#xi .cam:before,#xi .cam:after{content:"";position:absolute;width:46px;height:46px;border:3px solid #ef4444}#xi .cam:before{top:0;right:0;border-left:0;border-bottom:0}#xi .cam:after{bottom:0;left:0;border-right:0;border-top:0}'+
'#xi .rec{display:flex;gap:14px;justify-content:center;align-items:center;font:700 14px monospace;direction:ltr;color:#ef4444;margin-bottom:6px}#xi .rec:before{content:"";width:12px;height:12px;border-radius:50%;background:#ef4444;animation:xk 1s infinite}@keyframes xk{50%{opacity:.1}}'+
'#xi .scan{position:absolute;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#ef4444,transparent);animation:xn 2.4s linear infinite}@keyframes xn{from{top:0}to{top:100%}}'+
'#xi .stamp{display:inline-block;margin:4px 0 14px;padding:4px 16px;border:3px solid #22c55e;color:#22c55e;font:900 22px Impact,sans-serif;letter-spacing:4px;transform:rotate(-6deg);direction:ltr;animation:xs2 .5s 2.2s both}@keyframes xs2{from{transform:scale(3) rotate(-6deg);opacity:0}to{transform:rotate(-6deg)}}'+
'#xi .btn{margin-top:26px;z-index:2;padding:16px 46px;border:0;border-radius:40px;font:900 22px Tajawal,sans-serif;color:#1a1204;cursor:pointer;background:linear-gradient(135deg,#fff3c4,#e8c872,#c89a3c);box-shadow:0 0 50px #e8c872aa;animation:xbp 1.6s infinite}@keyframes xbp{50%{transform:scale(1.08);box-shadow:0 0 90px #e8c872}}'+
'#xi .skip{position:absolute;top:16px;left:16px;z-index:5;border:1px solid #ffffff44;background:#0008;color:#fff;border-radius:20px;padding:6px 16px;cursor:pointer;font:inherit}'+
'#xi .pg{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:5;width:min(520px,86vw)}#xi .pg i{flex:1;height:4px;border-radius:9px;background:#ffffff22;overflow:hidden}#xi .pg i b{display:block;height:100%;width:0;background:linear-gradient(90deg,#e8c872,#ff7a2f)}'+
'#xi .wp{position:absolute;inset:0;z-index:4;background:linear-gradient(100deg,transparent 40%,#e8c872 50%,transparent 60%);transform:translateX(-120%);pointer-events:none}#xi .wp.go{animation:xw2 .7s}@keyframes xw2{to{transform:translateX(120%)}}';
css.textContent+='#xi .nmw{display:flex;justify-content:center;flex-wrap:wrap;direction:ltr;z-index:1;font:900 clamp(40px,11vw,120px)/1.1 Impact,sans-serif;letter-spacing:6px;perspective:800px}#xi .nmw span{display:inline-block;background:linear-gradient(#fff6d0,#e8c872,#b8860b);-webkit-background-clip:text;color:transparent;opacity:0;animation:nl .9s calc(.5s + var(--i)*.09s) both cubic-bezier(.2,1.4,.4,1);filter:drop-shadow(0 0 22px #e8c87288)}@keyframes nl{from{opacity:0;transform:rotateX(-100deg) translateY(80px) scale(.5);filter:blur(14px)}to{opacity:1;transform:none}}#xi .nms{width:0;height:4px;margin:10px 0;background:linear-gradient(90deg,transparent,#e8c872,#ff7a2f,transparent);z-index:1;animation:nsl 1.4s 2s forwards}@keyframes nsl{to{width:min(640px,80vw)}}#xi .rv2{position:relative;width:min(760px,100%);padding:30px 12px 14px;z-index:1;border:2px solid #ef444488;border-radius:16px;background:#050709cc;overflow:hidden}#xi .rv2 svg{width:100%;display:block;border-radius:10px;animation:zm 6s ease-in-out both}@keyframes zm{0%{transform:scale(1)}60%{transform:scale(1.12) translateX(-2%)}100%{transform:scale(1.04)}}#xi .ol{animation:ol 3.4s 1s both ease-in-out}@keyframes ol{from{transform:translateX(70px)}to{transform:translateX(400px)}}#xi .bl{animation:bl 3.4s 1s both ease-in-out}@keyframes bl{to{transform:translate(180px,10px)}}#xi .cams{position:absolute;top:34px;right:20px;display:flex;flex-direction:column;gap:4px}#xi .cams b{font:700 12px monospace;color:#fff;background:#ef4444;padding:2px 8px;border-radius:4px;opacity:0;animation:cm 6s infinite}#xi .cams b:nth-child(2){animation-delay:1.5s}#xi .cams b:nth-child(3){animation-delay:3s}@keyframes cm{0%,5%{opacity:0}10%,30%{opacity:1}35%,100%{opacity:0}}#xi .chk{position:absolute;left:20px;bottom:20px;font:900 20px Impact,sans-serif;letter-spacing:4px;color:#38bdf8;direction:ltr;animation:chk 6s both}@keyframes chk{0%{opacity:0}5%,70%{opacity:1}78%,100%{opacity:0}}#xi .chk i{display:block;height:4px;margin-top:4px;background:#38bdf8;width:0;animation:cf2 4.2s .3s forwards}@keyframes cf2{to{width:100%}}#xi .vd{position:absolute;top:50%;left:50%;margin:-40px 0 0 -120px;padding:6px 30px;font:900 56px Impact,sans-serif;letter-spacing:6px;color:#22c55e;border:5px solid #22c55e;border-radius:12px;background:#000b;transform:rotate(-8deg) scale(0);animation:vd .6s 5s forwards cubic-bezier(.2,1.6,.4,1)}@keyframes vd{to{transform:rotate(-8deg) scale(1)}}';
document.head.appendChild(css);
if(!first)return;
var S=[
{nm:1},{sys:1},{rv:1},{k:'VAR RULES',h:'قوانين الـ VAR كاملة',v:1},
{k:'PENALTY',h:'ضربة جزاء وقوانين اللعب',big:'⚖',c:[['💥','تفجير لاعب لاعبًا آخر','= ضربة جزاء'],['🧍','الوقوف 5 ثواني أو أكتر','= ضربة جزاء'],['📡','جهازك علّق؟','الماتش بيتوقف مؤقتًا لحد ما ترجع']]},
{k:'MATCH TIME',h:'المواعيد: موافق ولا لا؟',big:'⏰',c:[['👤','الإدارة بتحدد صاحب الكلان اللي هيلعب أو شخص معين','',1],['✅','أول ما تفتح الموقع يظهرلك المعاد: موافق ولا لا؟','',1],['🚫','لو وافقت وجه الوقت وماقدرتش تدخل لأي سبب','= انسحاب من الماتش',1],['🔁','الإدارة تقدر تأجّل أو تلغي المعاد حتى بعد بداية الماتش','',1]]},
{k:'3 CHANCES',h:'كل كلان له 3 فرص',big:'3',c:[['🛡','خسر 3 فرص','= طلع من البطولة',1],['⚔','خسر 2 وكسب 1','لازم يكسب مرة كمان عشان يتأهل',1],['🏆','3 فرص بس','كل ماتش بيفرق',1]]},
{k:'TICKETS',h:'افتح تذكرة',big:'🎫',c:[['🚨','تقديم شكوى ضد لاعب','',1],['📺','طلب مراجعة VAR','',1],['⚖','شكوى على قرار الـ VAR','',1]]},
{k:'CHAT',h:'شات عام للمسجلين',big:'💬',c:[['💬','شات عام للناس اللي سجلت في الموقع بس'],['🔒','الإدارة تقفل الشات وتفتحه وتمسح رسايل معينة'],['⛔','حظر لحد وقت معين… وتظهر لك دخلة الحظر أول ما تفتح الموقع']]},
{k:'LIVE SCREEN',h:'شير سكرين للماتش',big:'📺',c:[['🎥','صوت وصورة وفيديو','والإدارة تفتحه من لوحة التحكم',1],['👀','أي حد يشوف الماتش من الموقع ويكتب تعليق ويشجّع','',1],['⚔','يظهر تحت المعاد: «الماتش الخاص بكلان X VS Y»','',1],['🔀','الإدارة تنقل السكرين لمكان تاني بزرار','',1]]},
{k:'SMART SYSTEM',h:'النظام الذكي',big:'🤖',c:[['⚽','بيراقب الماتش وأول ما حد يسجل جول يعدّل النتيجة تلقائي حسب أسماء اللاعبين','',1],['📍','النتيجة فوق في النص ومكانها بتحدده الإدارة','',1],['🎬','لو غيّرت السكرين: مراجعة VAR بخلفية كاملة ولا اللعبة؟','',1],['⏸','بيوقف الوقت لوحده في إعادة الجول (Replay) ويشغله لما تخلص','',1]]},
{k:'ADMIN',h:'الإدارة · VAR System',big:'🎛',c:[['🎛','سكور بورد وتايمر وجول وOver Time','إيقاف · تشغيل · زيادة وقت'],['🕵','من دخل الموقع واسم حسابه وآخر مرة','للإدارة بس',1],['📁','سجل التقديم: القبول والرفض بيتحفظ','',1],['✏','تعديل القوانين وأي كلام في الموقع','',1]]},
{f:1}
];
function build(){
  var VR=[];try{VR=VAR.map(function(v){return v[1]})}catch(e){}window.__vrn=VR.length;
  var x=document.createElement('div');x.id='xi';
  var h='<div class="beam"></div><canvas></canvas><div class="vg"></div><div class="wp"></div><button class="skip">تخطي ⏭</button>';
  S.forEach(function(s,i){
    h+='<div class="sc" data-i="'+i+'">';
    if(s.nm)h+='<i class="rg"></i><i class="rg" style="animation-delay:1s"></i><i class="rg" style="animation-delay:2s"></i><div class="k it" style="--d:.2s">WELCOME TO</div><div class="nmw">'+'RL CLANS ARENA'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')+'</div><div class="nms"></div><div class="k it" style="--d:2.4s;margin-top:16px">CLAN TOURNAMENT · ROCKET LEAGUE</div><div class="it" style="--d:3s;opacity:.85;font-size:18px">بطولة الكلانات · كلان ضد كلان</div>';
    else if(s.sys)h+='<div class="k it" style="--d:.1s">TOURNAMENT SYSTEM</div><h2 class="it" style="--d:.25s">نظام البطولة</h2><div class="g">'+[['1v1','مواجهة قادة الكلانات'],['2v2','ثنائي من كل كلان'],['3v3','ثلاثي من كل كلان']].map(function(c,j){return '<div class="c it" style="--d:'+(.5+j*.4)+'s;justify-content:center"><div><b style="font:900 40px Impact,sans-serif;color:#e8c872">'+c[0]+'</b><small>'+c[1]+'</small></div></div>'}).join('')+[['🛡','لكل كلان 3 فرص','3 خسارات = خروج من البطولة'],['🏆','فوزين = تأهل','خسر 2 وكسب 1 لازم يكسب مرة كمان'],['📅','وافق على المعاد؟','لو وافقت وماحضرتش = انسحاب'],['🎮','ترفيهية','بدون جوائز']].map(function(c,j){return '<div class="c it" style="--d:'+(1.8+j*.4)+'s"><i>'+c[0]+'</i><div><b>'+c[1]+'</b><small>'+c[2]+'</small></div></div>'}).join('')+'</div>';
    else if(s.rv)h+='<div class="k it" style="--d:.1s">VAR REVIEW</div><h2 class="it" style="--d:.2s">لقطة VAR… الكل بيستنى القرار</h2><div class="rv2"><div class="scan"></div><div class="rec"><span>REC · VAR ROOM</span><span class="tc">00:00:00:00</span></div><svg viewBox="0 0 600 260"><rect x="4" y="4" width="592" height="252" rx="14" fill="#0a3d1c" stroke="#fff6" stroke-width="2"/><path d="M300 4V256" stroke="#fff5"/><circle cx="300" cy="130" r="40" fill="none" stroke="#fff5"/><rect x="4" y="80" width="60" height="100" fill="none" stroke="#fff5"/><rect x="536" y="80" width="60" height="100" fill="none" stroke="#fff5"/><circle cx="220" cy="90" r="9" fill="#38bdf8"/><circle cx="330" cy="160" r="9" fill="#38bdf8"/><circle cx="410" cy="100" r="9" fill="#f97316"/><circle cx="450" cy="170" r="9" fill="#f97316"/><circle class="bl" cx="250" cy="125" r="6" fill="#fff"/><line class="ol" x1="0" y1="4" x2="0" y2="256" stroke="#ef4444" stroke-width="3"/></svg><div class="cams"><b>CAM 1</b><b>CAM 2</b><b>SLOW-MO</b></div><div class="chk">VAR CHECKING<i></i></div><div class="vd">GOAL ✓</div></div>';
    else if(s.t)h+='<i class="rg"></i><i class="rg" style="animation-delay:1s"></i><i class="rg" style="animation-delay:2s"></i><div class="k it" style="--d:.2s">RL CLANS ARENA</div><div class="logo">VAR SYSTEM</div><div class="k it" style="--d:1.2s;margin-top:14px">TOURNAMENT · REVIEW · LIVE</div>';
    else if(s.f)h+='<div class="k it" style="--d:.1s">ARE YOU READY</div><h2 class="it" style="--d:.3s;font-size:clamp(40px,10vw,90px)">جاهز للساحة؟</h2><div class="it" style="--d:.7s;opacity:.8">VAR · شات · مواعيد · بث مباشر</div><button class="btn it" style="--d:1s">ادخل الساحة ⚽</button>';
    else if(s.v)h+='<div class="cam"><div class="scan"></div><div class="rec"><span>REC · VAR ROOM</span><span class="tc">00:00:00:00</span></div><div class="k">'+s.k+'</div><h2>'+s.h+'</h2><div class="stamp">VAR CHECK ✓</div><div class="g">'+VR.map(function(r,j){return '<div class="c it" style="--d:'+(.4+j*.7)+'s"><i>'+(j+1)+'</i><div><b>'+r.replace(/</g,'&lt;')+'</b></div></div>'}).join('')+'</div></div>';
    else h+='<div class="big">'+s.big+'</div><div class="k it" style="--d:.1s">'+s.k+'</div><h2 class="it" style="--d:.25s">'+s.h+'</h2><div class="g">'+s.c.map(function(c,j){return '<div class="c it" style="--d:'+(.5+j*.4)+'s"><i>'+c[0]+'</i><div><b>'+c[1]+'</b>'+(c[2]?'<small>'+c[2]+'</small>':'')+'</div>'+(c[3]?'<em>قريبًا</em>':'')+'</div>'}).join('')+'</div>';
    h+='</div>';
  });
  h+='<div class="pg">'+S.map(function(){return '<i><b></b></i>'}).join('')+'</div>';
  x.innerHTML=h;document.body.appendChild(x);return x;
}
function run(){
  var x=build(),sc=x.querySelectorAll('.sc'),bars=x.querySelectorAll('.pg b'),cur=-1,tm,t0,raf,wp=x.querySelector('.wp'),done=false;
  var cv=x.querySelector('canvas'),g=cv.getContext('2d'),P=[],W,H;
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
  for(var i=0;i<90;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.4+.6,v:Math.random()*.7+.2,a:Math.random()});
  (function loop(){if(done)return;g.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v;p.a+=.02;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}g.globalAlpha=.35+Math.sin(p.a)*.3;g.fillStyle='#e8c872';g.beginPath();g.arc(p.x,p.y,p.r,0,6.3);g.fill()});requestAnimationFrame(loop)})();
  var tcI=setInterval(function(){var d=Date.now()%86400000,f=function(n){return String(n).padStart(2,'0')};var e=x.querySelector('.tc');if(e)e.textContent=f(Math.floor(d/3600000)%24)+':'+f(Math.floor(d/60000)%60)+':'+f(Math.floor(d/1000)%60)+':'+f(Math.floor(d/40)%25)},40);
  function finish(){if(done)return;done=true;clearTimeout(tm);clearInterval(tcI);x.classList.add('out');setTimeout(function(){x.remove()},1100)}
  function go(n){
    if(n>=sc.length)return finish();
    clearTimeout(tm);cancelAnimationFrame(raf);
    wp.classList.remove('go');void wp.offsetWidth;wp.classList.add('go');
    sc.forEach(function(s,i){s.classList.toggle('on',i===n)});
    bars.forEach(function(b,i){b.style.transition='none';b.style.width=i<n?'100%':'0'});
    cur=n;if(n===sc.length-1){bars[n].style.width='100%';return}
    var dur=n===0?5600:n===1?7000:n===2?7200:n===3?3500+(window.__vrn||9)*800:6800;
    void bars[n].offsetWidth;bars[n].style.transition='width '+dur+'ms linear';bars[n].style.width='100%';
    tm=setTimeout(function(){go(n+1)},dur);
  }
  x.addEventListener('click',function(e){if(e.target.closest('.skip')||e.target.closest('.btn'))return;go(cur+1)});
  x.querySelector('.skip').onclick=finish;x.querySelector('.btn').onclick=finish;
  addEventListener('keydown',function(e){if(done)return;if(e.key==='Escape')finish();else if(e.key==='ArrowRight'||e.key==='ArrowLeft'||e.key===' ')go(cur+1)});
  go(0);
}
if(document.body)run();else document.addEventListener('DOMContentLoaded',run);
})();
