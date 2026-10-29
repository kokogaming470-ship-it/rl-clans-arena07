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
document.head.appendChild(css);
if(!first)return;
var S=[
{t:0},
{k:'VAR ROOM',h:'لقطة VAR… مراجعة وكاميرا وماتش',v:1},
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
  var VR=[];try{VR=VAR.slice(0,6).map(function(v){return v[1]})}catch(e){}
  var x=document.createElement('div');x.id='xi';
  var h='<div class="beam"></div><canvas></canvas><div class="vg"></div><div class="wp"></div><button class="skip">تخطي ⏭</button>';
  S.forEach(function(s,i){
    h+='<div class="sc" data-i="'+i+'">';
    if(s.t)h+='<i class="rg"></i><i class="rg" style="animation-delay:1s"></i><i class="rg" style="animation-delay:2s"></i><div class="k it" style="--d:.2s">RL CLANS ARENA</div><div class="logo">VAR SYSTEM</div><div class="k it" style="--d:1.2s;margin-top:14px">TOURNAMENT · REVIEW · LIVE</div>';
    else if(s.f)h+='<div class="k it" style="--d:.1s">ARE YOU READY</div><h2 class="it" style="--d:.3s;font-size:clamp(40px,10vw,90px)">جاهز للساحة؟</h2><div class="it" style="--d:.7s;opacity:.8">VAR · شات · مواعيد · بث مباشر</div><button class="btn it" style="--d:1s">ادخل الساحة ⚽</button>';
    else if(s.v)h+='<div class="cam"><div class="scan"></div><div class="rec"><span>REC · VAR ROOM</span><span class="tc">00:00:00:00</span></div><div class="k">'+s.k+'</div><h2>'+s.h+'</h2><div class="stamp">VAR CHECK ✓</div><div class="g">'+VR.map(function(r,j){return '<div class="c it" style="--d:'+(.5+j*.35)+'s"><i>'+(j+1)+'</i><div><b>'+r.replace(/</g,'&lt;')+'</b></div></div>'}).join('')+'</div></div>';
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
    var dur=n===0?4200:n===1?8500:6800;
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
