(function(){
var K='intro',first=false;try{first=!sessionStorage.getItem(K);sessionStorage.setItem(K,'1')}catch(e){}
var css=document.createElement('style');
css.textContent='#splash{display:none!important}'+(first?'html.xin,html.xin body{overflow:hidden}':'');
document.head.appendChild(css);
if(!first)return;
document.documentElement.classList.add('xin');

var st=document.createElement('style');
st.textContent=
'#xi{position:fixed;inset:0;z-index:99998;background:#030409;color:#f6eed9;font-family:Tajawal,"Segoe UI",Tahoma,sans-serif;overflow:hidden;direction:rtl;-webkit-tap-highlight-color:transparent;user-select:none;transition:opacity .9s ease,transform .9s ease}'+
'#xi.out{opacity:0;transform:scale(1.06);pointer-events:none}'+
'#xi *{box-sizing:border-box}'+
'#xi .gl{position:absolute;width:90vmax;height:90vmax;border-radius:50%;left:50%;top:50%;margin:-45vmax 0 0 -45vmax;opacity:.55;will-change:transform}'+
'#xi .g1{background:radial-gradient(circle,#e8c87230,transparent 60%);animation:xg1 16s ease-in-out infinite alternate}'+
'#xi .g2{background:radial-gradient(circle,#ff7a2f26,transparent 58%);animation:xg2 19s ease-in-out infinite alternate}'+
'@keyframes xg1{from{transform:translate3d(-22%,-18%,0)}to{transform:translate3d(18%,14%,0)}}@keyframes xg2{from{transform:translate3d(24%,16%,0)}to{transform:translate3d(-16%,-20%,0)}}'+
'#xi canvas{position:absolute;inset:0;width:100%;height:100%}'+
'#xi .vg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,transparent 35%,#000d 100%);pointer-events:none}'+
'#xi .ln{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#e8c872aa,transparent);opacity:.5}#xi .ln.t{top:calc(14px + env(safe-area-inset-top,0px))}#xi .ln.b{bottom:calc(14px + env(safe-area-inset-bottom,0px))}'+
'#xi .sc{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:64px 16px 70px;overflow:hidden}'+
'#xi .sc.on{display:flex}'+
'#xi .it{opacity:0;transform:translate3d(0,26px,0)}#xi .sc.on .it{animation:xi .7s var(--d,0s) both cubic-bezier(.2,.9,.25,1)}@keyframes xi{to{opacity:1;transform:none}}'+
'#xi .k{font:700 12px/1.4 Cinzel,Georgia,serif;letter-spacing:.55em;color:#ff9a52;direction:ltr;padding-inline-start:.55em}'+
'#xi h2{margin:10px 0 22px;font-size:clamp(26px,6.4vw,50px);font-weight:900;line-height:1.25;background:linear-gradient(90deg,#fff8dc,#e8c872 45%,#ff9a52);-webkit-background-clip:text;background-clip:text;color:transparent}'+
'#xi .logo0{position:relative;width:min(46vw,190px);aspect-ratio:1}'+
'#xi .logo0 svg{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 0 22px #e8c87288)}'+
'#xi .sc.on .sh{stroke-dasharray:420;stroke-dashoffset:420;animation:xd 2s .1s forwards ease-out}@keyframes xd{to{stroke-dashoffset:0}}'+
'#xi .sc.on .shf{opacity:0;animation:xf 1s 1.5s forwards}@keyframes xf{to{opacity:1}}'+
'#xi .rg{position:absolute;inset:0;border-radius:50%;border:1.5px solid #e8c872;opacity:0}#xi .sc.on .rg{animation:xr 3.2s var(--d,0s) infinite ease-out}@keyframes xr{0%{transform:scale(.5);opacity:.8}100%{transform:scale(2.6);opacity:0}}'+
'#xi .nm{display:flex;justify-content:center;gap:.05em;margin-top:26px;font:900 clamp(30px,9vw,70px)/1 Cinzel,Georgia,serif;letter-spacing:.06em;direction:ltr;color:#f4d98a;flex-wrap:wrap}'+
'#xi .nm span{display:inline-block;opacity:0;background:linear-gradient(180deg,#fff7d6,#e8c872 55%,#a8741a);-webkit-background-clip:text;background-clip:text;color:transparent}#xi .sc.on .nm span{animation:xl .7s calc(1.3s + var(--i)*.07s) both cubic-bezier(.2,1.1,.3,1)}@keyframes xl{from{opacity:0;transform:translate3d(0,40px,0) scale(.7)}to{opacity:1;transform:none}}'+
'#xi .ttl{font-size:clamp(40px,12.5vw,124px);font-weight:900;line-height:1.12;margin:12px 0 4px;background:linear-gradient(100deg,#8a5d12 5%,#fff4c4 30%,#e8c872 50%,#fff4c4 70%,#8a5d12 95%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}#xi .sc.on .ttl{animation:xi .9s .3s both cubic-bezier(.2,.9,.25,1),xs 5s 1s linear infinite}@keyframes xs{to{background-position:-250% 0}}'+
'#xi .out2{font:900 clamp(26px,8vw,76px)/1.1 Cinzel,Georgia,serif;letter-spacing:.14em;direction:ltr;color:transparent;-webkit-text-stroke:1.5px #e8c872;margin:4px 0 10px;padding-inline-start:.14em}'+
'#xi .bar2{width:0;height:3px;border-radius:3px;background:linear-gradient(90deg,transparent,#e8c872,#ff7a2f,#e8c872,transparent);margin:14px 0}#xi .sc.on .bar2{animation:xw 1.2s .8s forwards ease-out}@keyframes xw{to{width:min(70vw,460px)}}'+
'#xi .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;width:min(900px,100%)}'+
'#xi .tile{flex:1 1 140px;max-width:220px;padding:18px 12px;border-radius:18px;background:linear-gradient(160deg,#1b1a2dcc,#0a0b16f2);border:1px solid #e8c87255;box-shadow:0 10px 30px #0008}#xi .tile b{display:block;font:900 clamp(34px,9vw,52px)/1 Impact,sans-serif;color:#e8c872;letter-spacing:2px;direction:ltr}#xi .tile small{display:block;margin-top:8px;opacity:.8;font-size:14px}'+
'#xi .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:10px;width:min(940px,100%);margin-top:6px}'+
'#xi .c{display:flex;gap:12px;align-items:center;text-align:right;padding:12px 14px;border-radius:16px;background:linear-gradient(135deg,#1a1d3acc,#090b18f2);border:1px solid #e8c87238}#xi .c i{font-style:normal;flex:none;width:42px;height:42px;display:grid;place-items:center;border-radius:12px;font-size:22px;background:#e8c87218;border:1px solid #e8c87244;font-weight:800;color:#e8c872}#xi .c b{display:block;font-size:15.5px;line-height:1.5}#xi .c small{display:block;opacity:.72;font-size:12.5px;margin-top:2px}'+
'#xi .chips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:16px}#xi .chips span{padding:7px 14px;border-radius:99px;font-size:13.5px;background:#e8c8721a;border:1px solid #e8c87255;color:#ffe9a8}'+
'#xi .rv2{position:relative;width:min(640px,94%);aspect-ratio:600/300;border-radius:16px;overflow:hidden;background:#06140c;border:1px solid #fff3;box-shadow:0 0 50px #38bdf822,0 20px 50px #000a}#xi .rv2 svg{position:absolute;inset:0;width:100%;height:100%}'+
'#xi .rv2 .scan{position:absolute;left:0;right:0;height:26%;top:-26%;background:linear-gradient(180deg,transparent,#38bdf833,transparent);z-index:1}#xi .sc.on .scan{animation:xsc 2.6s linear infinite}@keyframes xsc{to{transform:translate3d(0,500%,0)}}'+
'#xi .rec{position:absolute;top:8px;left:10px;right:10px;display:flex;justify-content:space-between;font:700 11px/1 monospace;letter-spacing:1px;direction:ltr;color:#fff;z-index:2}#xi .rec span:first-child:before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef4444;margin-inline-end:6px;animation:xk 1s steps(2) infinite}@keyframes xk{50%{opacity:0}}'+
'#xi .cams{position:absolute;bottom:8px;left:10px;display:flex;gap:6px;z-index:2}#xi .cams b{font:700 10px/1 monospace;padding:4px 7px;border:1px solid #fff6;border-radius:4px;background:#0009;direction:ltr}'+
'#xi .chk{position:absolute;bottom:10px;right:12px;z-index:2;font:900 13px Impact,sans-serif;letter-spacing:3px;color:#38bdf8;direction:ltr}#xi .chk i{display:inline-block;width:7px;height:7px;margin-inline-start:6px;border-radius:50%;background:#38bdf8;animation:xk .6s steps(2) infinite}'+
'#xi .sc.on .bl{animation:xbl 3s .2s forwards ease-in-out}@keyframes xbl{to{transform:translate3d(300px,0,0)}}#xi .sc.on .ol{animation:xol 3s .2s forwards linear}@keyframes xol{from{transform:translate3d(220px,0,0)}to{transform:translate3d(330px,0,0)}}'+
'#xi .vd{position:absolute;inset:0;display:grid;place-items:center;z-index:3;opacity:0;font:900 clamp(34px,9vw,70px) Impact,sans-serif;letter-spacing:6px;color:#22c55e;text-shadow:0 0 30px #22c55e99;background:#000a;direction:ltr}#xi .sc.on .vd{animation:xv .6s 3.6s forwards cubic-bezier(.2,1.5,.4,1)}@keyframes xv{from{opacity:0;transform:scale(1.8)}to{opacity:1;transform:none}}'+
'#xi .fin{font-size:clamp(42px,12vw,104px);font-weight:900;margin:10px 0 6px;background:linear-gradient(90deg,#fff8dc,#e8c872,#ff9a52,#e8c872);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}#xi .sc.on .fin{animation:xi .8s .2s both cubic-bezier(.2,.9,.25,1),xs 4s 1s linear infinite}'+
'#xi .go{margin-top:26px;padding:15px 38px;border:0;border-radius:16px;font:800 19px Tajawal,sans-serif;color:#1a1204;background:linear-gradient(135deg,#fff1b8,#e8c872 50%,#c89a3c);cursor:pointer;box-shadow:0 10px 34px #e8c87255;opacity:0}'+
'#xi .sc.on .go{animation:xi .7s 1s both cubic-bezier(.2,.9,.25,1)}'+
'#xi .skip{position:absolute;z-index:5;top:calc(14px + env(safe-area-inset-top,0px));left:14px;padding:8px 16px;border-radius:99px;border:1px solid #e8c87255;background:#0008;color:#f6eed9;font:700 13px Tajawal,sans-serif;cursor:pointer}'+
'#xi .pgs{position:absolute;z-index:5;left:16px;right:16px;bottom:calc(22px + env(safe-area-inset-bottom,0px));display:flex;gap:6px}#xi .pgs i{flex:1;height:3px;border-radius:3px;background:#ffffff22;overflow:hidden}#xi .pgs b{display:block;height:100%;width:0;background:linear-gradient(90deg,#e8c872,#ff9a52)}'+
'#xi .tap{position:absolute;z-index:5;bottom:calc(36px + env(safe-area-inset-bottom,0px));width:100%;text-align:center;font-size:11px;letter-spacing:3px;opacity:.45;direction:ltr}'+
'@media (prefers-reduced-motion:reduce){#xi .gl{animation:none!important}}';
document.head.appendChild(st);

var VR=[];try{VR=VAR.map(function(v){return v[1]})}catch(e){}
function E(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}

var SHIELD='<svg viewBox="0 0 64 64"><defs><linearGradient id="xg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4cf"/><stop offset=".5" stop-color="#e8c872"/><stop offset="1" stop-color="#9a6a16"/></linearGradient></defs><path class="shf" d="M32 3 56 12v18c0 15-10 26-24 31C18 56 8 45 8 30V12z" fill="#120e06"/><path class="sh" d="M32 3 56 12v18c0 15-10 26-24 31C18 56 8 45 8 30V12z" fill="none" stroke="url(#xg)" stroke-width="2.4"/><path class="shf" d="M20 40V24h9.5c3.6 0 5.8 2 5.8 5 0 2.6-1.6 4.4-4 4.9L37 40h-4.6l-4.2-5.6H24.2V40zm4.2-9.2h4.9c1.4 0 2.2-.7 2.2-1.9s-.8-1.8-2.2-1.8h-4.9zM39 40V24h4.2v12.4H50V40z" fill="url(#xg)"/></svg>';

function card(i,t,s,d){return '<div class="c it" style="--d:'+d+'s"><i>'+i+'</i><div><b>'+E(t)+'</b>'+(s?'<small>'+E(s)+'</small>':'')+'</div></div>'}

function scenes(){
  var A=[];
  A.push({d:6400,h:'<div class="logo0"><i class="rg"></i><i class="rg" style="--d:1s"></i><i class="rg" style="--d:2s"></i>'+SHIELD+'</div><div class="nm">'+'RL ARENA'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')+'</div><div class="k it" style="--d:3s;margin-top:18px">CLAN TOURNAMENT</div><div class="it" style="--d:3.5s;opacity:.8;margin-top:8px">ساحة الكلانات · Rocket League</div>'});
  A.push({d:6000,h:'<div class="k it" style="--d:.1s">WELCOME TO THE</div><div class="ttl">بطولة الكلانات</div><div class="out2 it" style="--d:.9s">ROCKET LEAGUE</div><div class="bar2"></div><div class="it" style="--d:1.8s;font-size:clamp(15px,3.6vw,22px);opacity:.88">كلان ضد كلان · تحكيم VAR احترافي · بث مباشر</div><div class="chips"><span class="it" style="--d:2.6s">🎮 بطولة ترفيهية</span><span class="it" style="--d:2.9s">⚔ 1v1 · 2v2 · 3v3</span><span class="it" style="--d:3.2s">📺 VAR + Replay</span></div>'});
  A.push({d:8200,h:'<div class="k it" style="--d:.1s">TOURNAMENT SYSTEM</div><h2 class="it" style="--d:.2s">نظام البطولة</h2><div class="row">'+[['1v1','مواجهة قادة الكلانات'],['2v2','ثنائي من كل كلان'],['3v3','ثلاثي من كل كلان']].map(function(c,j){return '<div class="tile it" style="--d:'+(.45+j*.3)+'s"><b>'+c[0]+'</b><small>'+c[1]+'</small></div>'}).join('')+'</div><div class="g" style="margin-top:14px">'+[['🛡','لكل كلان 3 فرص','3 خسارات = خروج من البطولة'],['🏆','فوزين = تأهل','خسرت 2 وكسبت 1؟ لازم فوز كمان'],['📅','وافق على المعاد؟','لو وافقت وماحضرتش = انسحاب'],['🎯','الشرط: Gold 2 أو أعلى','في 1v1 أو 2v2']].map(function(c,j){return card(c[0],c[1],c[2],1.5+j*.4)}).join('')+'</div>'});
  A.push({d:8000,h:'<div class="k it" style="--d:.1s">VAR REVIEW</div><h2 class="it" style="--d:.2s">لقطة مشكوك فيها… الكل بيستنى القرار</h2><div class="rv2 it" style="--d:.4s"><div class="scan"></div><div class="rec"><span>REC · VAR ROOM</span><span class="tc">00:00:00:00</span></div><svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice"><rect width="600" height="300" fill="#0b4a22"/><g stroke="#fff6" stroke-width="2" fill="none"><rect x="8" y="8" width="584" height="284" rx="10"/><path d="M300 8V292"/><circle cx="300" cy="150" r="46"/><rect x="8" y="95" width="64" height="110"/><rect x="528" y="95" width="64" height="110"/></g><circle cx="210" cy="100" r="9" fill="#38bdf8"/><circle cx="330" cy="190" r="9" fill="#38bdf8"/><circle cx="420" cy="110" r="9" fill="#f97316"/><circle cx="460" cy="200" r="9" fill="#f97316"/><circle class="bl" cx="220" cy="150" r="6" fill="#fff"/><line class="ol" x1="0" y1="8" x2="0" y2="292" stroke="#ef4444" stroke-width="3"/></svg><div class="cams"><b>CAM 1</b><b>CAM 2</b><b>SLOW-MO</b></div><div class="chk">VAR CHECKING<i></i></div><div class="vd">GOAL ✓</div></div>'});
  var n=Math.min(VR.length||0,9);
  if(n)A.push({d:Math.min(13000,3600+n*900),h:'<div class="k it" style="--d:.1s">VAR RULES</div><h2 class="it" style="--d:.2s">قوانين الـ VAR</h2><div class="g">'+VR.slice(0,n).map(function(r,j){return card(j+1,r,'',.5+j*.6)}).join('')+'</div>'});
  A.push({d:8000,h:'<div class="k it" style="--d:.1s">EVERYTHING YOU NEED</div><h2 class="it" style="--d:.2s">كل اللي تحتاجه في مكان واحد</h2><div class="g">'+[['📅','مواعيد رسمية','كروت ماتشات وعدّاد تنازلي'],['📊','جدول النقاط','كل كلان: فوز · خسارة · نقاط'],['📺','بث مباشر','شاهد الماتش لايف وشجّع'],['💬','شات عام','للمسجّلين في الموقع'],['🎫','تذاكر وشكاوى','VAR · لاعب · قرار'],['🔔','إشعارات حيّة','كل جديد يوصلك لحظيًا']].map(function(c,j){return card(c[0],c[1],c[2],.5+j*.45)}).join('')+'</div>'});
  A.push({d:0,h:'<div class="k it" style="--d:.1s">ARE YOU READY</div><div class="fin">جاهز للساحة؟</div><div class="it" style="--d:.7s;opacity:.85">VAR · مواعيد · نقاط · بث مباشر</div><button class="go" type="button">ادخل الساحة ⚽</button>'});
  return A;
}

function run(){
  var S=scenes(),x=document.createElement('div');x.id='xi';
  var h='<div class="gl g1"></div><div class="gl g2"></div><canvas></canvas><div class="vg"></div><i class="ln t"></i><i class="ln b"></i><button class="skip" type="button">تخطي ⏭</button>';
  S.forEach(function(s,i){h+='<div class="sc" data-i="'+i+'">'+s.h+'</div>'});
  h+='<div class="pgs">'+S.map(function(){return '<i><b></b></i>'}).join('')+'</div><div class="tap">TAP TO CONTINUE</div>';
  x.innerHTML=h;document.body.appendChild(x);

  var sc=x.querySelectorAll('.sc'),bars=x.querySelectorAll('.pgs b'),cur=-1,tm,done=false,raf=0;
  var cv=x.querySelector('canvas'),g=cv.getContext('2d'),W=0,H=0,P=[],N=innerWidth<700?26:60;
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
  for(var i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.6,v:Math.random()*.6+.15,a:Math.random()*6});
  (function loop(){if(done)return;raf=requestAnimationFrame(loop);if(document.hidden)return;g.clearRect(0,0,W,H);g.fillStyle='#e8c872';for(var i=0;i<N;i++){var p=P[i];p.y-=p.v;p.a+=.02;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}g.globalAlpha=.25+Math.abs(Math.sin(p.a))*.45;g.beginPath();g.arc(p.x,p.y,p.r,0,6.3);g.fill()}})();
  var t0=Date.now(),tcI=setInterval(function(){var d=Date.now()-t0,f=function(n){return String(n).padStart(2,'0')},e=x.querySelector('.sc.on .tc');if(e)e.textContent='00:'+f(Math.floor(d/60000)%60)+':'+f(Math.floor(d/1000)%60)+':'+f(Math.floor(d/40)%25)},120);
  function finish(){if(done)return;done=true;clearTimeout(tm);clearInterval(tcI);cancelAnimationFrame(raf);removeEventListener('resize',rs);document.documentElement.classList.remove('xin');x.classList.add('out');setTimeout(function(){x.remove();st.remove()},1000)}
  function go(n){
    if(done)return;if(n>=S.length)return finish();
    clearTimeout(tm);
    sc.forEach(function(s,i){s.classList.toggle('on',i===n)});
    bars.forEach(function(b,i){b.style.transition='none';b.style.width=i<n?'100%':'0'});
    cur=n;
    if(!S[n].d){bars[n].style.width='100%';return}
    void bars[n].offsetWidth;bars[n].style.transition='width '+S[n].d+'ms linear';bars[n].style.width='100%';
    tm=setTimeout(function(){go(n+1)},S[n].d);
  }
  x.addEventListener('click',function(e){if(e.target.closest('.skip')||e.target.closest('.go'))return;go(cur+1)});
  x.querySelector('.skip').onclick=finish;x.querySelector('.go').onclick=finish;
  addEventListener('keydown',function(e){if(done)return;if(e.key==='Escape')finish();else if(e.key==='ArrowRight'||e.key==='ArrowLeft'||e.key===' ')go(cur+1)});
  go(0);
}
if(document.body)run();else document.addEventListener('DOMContentLoaded',run);
})();
