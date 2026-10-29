(function(){
var K='intro',first=false;try{first=!sessionStorage.getItem(K);sessionStorage.setItem(K,'1')}catch(e){}
var css=document.createElement('style');
css.textContent='#splash{display:none!important}'+(first?'html.xin,html.xin body{overflow:hidden}':'');
document.head.appendChild(css);
if(!first)return;
document.documentElement.classList.add('xin');

var st=document.createElement('style');
st.textContent=
'#xi{position:fixed;inset:0;z-index:99998;background:#020307;color:#f6eed9;font-family:Tajawal,"Segoe UI",Tahoma,sans-serif;overflow:hidden;direction:rtl;-webkit-tap-highlight-color:transparent;user-select:none;transition:opacity 1s ease,transform 1s ease}'+
'#xi.out{opacity:0;transform:scale(1.08);pointer-events:none}#xi *{box-sizing:border-box}'+
/* المسرح: إضاءات + أرضية Arena بمنظور + جزيئات */
'#xi .gl{position:absolute;width:100vmax;height:100vmax;border-radius:50%;left:50%;top:50%;margin:-50vmax 0 0 -50vmax;will-change:transform}'+
'#xi .g1{background:radial-gradient(circle,#e8c8723a,transparent 58%);animation:xg1 14s ease-in-out infinite alternate}#xi .g2{background:radial-gradient(circle,#ff7a2f2e,transparent 56%);animation:xg2 17s ease-in-out infinite alternate}#xi .g3{background:radial-gradient(circle,#38bdf81f,transparent 55%);animation:xg1 21s ease-in-out infinite alternate-reverse}'+
'@keyframes xg1{from{transform:translate3d(-26%,-20%,0)}to{transform:translate3d(22%,16%,0)}}@keyframes xg2{from{transform:translate3d(28%,18%,0)}to{transform:translate3d(-20%,-24%,0)}}'+
'#xi .floor{position:absolute;left:-30%;right:-30%;bottom:0;height:58%;overflow:hidden;transform:perspective(380px) rotateX(64deg);transform-origin:50% 100%;opacity:.5;-webkit-mask-image:linear-gradient(0deg,#000 20%,transparent 95%);mask-image:linear-gradient(0deg,#000 20%,transparent 95%)}'+
'#xi .floor i{position:absolute;left:0;right:0;top:-90px;bottom:0;background-image:linear-gradient(#e8c87266 1.5px,transparent 1.5px),linear-gradient(90deg,#e8c87244 1.5px,transparent 1.5px);background-size:90px 90px;background-position:center;animation:xfl 1.6s linear infinite}@keyframes xfl{to{transform:translate3d(0,90px,0)}}'+
'#xi canvas{position:absolute;inset:0;width:100%;height:100%}'+
'#xi .vg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 30%,#000e 100%);pointer-events:none}'+
'#xi .scl{position:absolute;inset:0;background:repeating-linear-gradient(0deg,#ffffff06 0 1px,transparent 1px 3px);pointer-events:none;opacity:.6}'+
/* شريط سينمائي */
'#xi .lb{position:absolute;left:0;right:0;height:0;background:#000;z-index:6;animation:xlb 1.4s .2s forwards cubic-bezier(.2,.8,.2,1)}#xi .lb.t{top:0;border-bottom:1px solid #e8c87255}#xi .lb.bt{bottom:0;border-top:1px solid #e8c87255}@keyframes xlb{to{height:calc(6vh + env(safe-area-inset-top,0px)*.5)}}'+
/* انتقال بين المشاهد */
'#xi .sw{position:absolute;inset:0;z-index:4;pointer-events:none;background:linear-gradient(105deg,transparent 35%,#fff3c455 47%,#fff 50%,#fff3c455 53%,transparent 65%);transform:translate3d(120%,0,0)}#xi .sw.go{animation:xsw .85s ease-in}@keyframes xsw{from{transform:translate3d(120%,0,0)}to{transform:translate3d(-120%,0,0)}}'+
/* مشاهد */
'#xi .sc{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:9vh 16px 11vh;overflow:hidden;z-index:2}#xi .sc.on{display:flex}'+
'#xi .zm{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-height:100%;will-change:transform}#xi .sc.on .zm{animation:xz var(--z,8s) linear both}@keyframes xz{from{transform:scale(1)}to{transform:scale(1.07)}}'+
'#xi .it{opacity:0;transform:translate3d(0,30px,0) scale(.97)}#xi .sc.on .it{animation:xi .8s var(--d,0s) both cubic-bezier(.2,.9,.25,1)}@keyframes xi{to{opacity:1;transform:none}}'+
'#xi .k{font:700 12px/1.4 Cinzel,Georgia,serif;letter-spacing:.6em;color:#ffa564;direction:ltr;padding-inline-start:.6em;text-shadow:0 0 18px #ff7a2f88}'+
'#xi h2{margin:10px 0 20px;font-size:clamp(26px,6.4vw,50px);font-weight:900;line-height:1.25;background:linear-gradient(90deg,#fff8dc,#e8c872 45%,#ff9a52);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 18px #e8c87244)}'+
'#xi .gold{background:linear-gradient(100deg,#8a5d12 5%,#fff4c4 28%,#e8c872 50%,#fff4c4 72%,#8a5d12 95%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}'+
/* S0 شعار */
'#xi .lg0{position:relative;width:min(48vw,200px);aspect-ratio:1}#xi .lg0 svg{position:relative;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 0 26px #e8c872aa)}'+
'#xi .halo{position:absolute;inset:-22%;border-radius:50%;background:conic-gradient(from 0deg,transparent 0,#e8c872 18%,transparent 40%,#ff7a2f 62%,transparent 80%);-webkit-mask:radial-gradient(circle,transparent 66%,#000 67%,#000 69%,transparent 70%);mask:radial-gradient(circle,transparent 66%,#000 67%,#000 69%,transparent 70%);opacity:0}#xi .sc.on .halo{animation:xhf 1s 1.2s forwards,xrot 7s 1.2s linear infinite}@keyframes xhf{to{opacity:1}}@keyframes xrot{to{transform:rotate(360deg)}}'+
'#xi .halo.b{inset:-40%;animation-direction:reverse;-webkit-mask:radial-gradient(circle,transparent 74%,#000 75%,#000 76%,transparent 77%);mask:radial-gradient(circle,transparent 74%,#000 75%,#000 76%,transparent 77%)}#xi .sc.on .halo.b{animation:xhf 1s 1.6s forwards,xrot 11s 1.6s linear infinite reverse}'+
'#xi .sc.on .sh{stroke-dasharray:420;stroke-dashoffset:420;animation:xd 2s .3s forwards ease-out}@keyframes xd{to{stroke-dashoffset:0}}#xi .sc.on .shf{opacity:0;animation:xf 1s 1.7s forwards}@keyframes xf{to{opacity:1}}'+
'#xi .rg{position:absolute;inset:0;border-radius:50%;border:1.5px solid #e8c872;opacity:0}#xi .sc.on .rg{animation:xr 3.4s var(--d,0s) infinite ease-out}@keyframes xr{0%{transform:scale(.6);opacity:.8}100%{transform:scale(3);opacity:0}}'+
'#xi .nm{display:flex;justify-content:center;margin-top:34px;font:900 clamp(34px,10.5vw,84px)/1 Cinzel,Georgia,serif;letter-spacing:.07em;direction:ltr;flex-wrap:wrap;filter:drop-shadow(0 6px 0 #5a3d0c) drop-shadow(0 16px 24px #000)}#xi .nm span{display:inline-block;opacity:0;background:linear-gradient(180deg,#fffbe6,#f4d98a 45%,#b8801c);-webkit-background-clip:text;background-clip:text;color:transparent}#xi .sc.on .nm span{animation:xl .8s calc(1.7s + var(--i)*.08s) both cubic-bezier(.2,1.2,.3,1)}@keyframes xl{from{opacity:0;transform:translate3d(0,50px,0) scale(.6)}to{opacity:1;transform:none}}'+
'#xi .flare{position:absolute;left:0;right:0;top:50%;height:2px;margin-top:-1px;background:linear-gradient(90deg,transparent,#fff,#e8c872,#fff,transparent);box-shadow:0 0 40px 8px #e8c872aa;opacity:0;transform:scaleX(0);z-index:3}#xi .sc.on .flare{animation:xfa 1.6s .1s ease-out}@keyframes xfa{0%{opacity:1;transform:scaleX(0)}55%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1.1)}}'+
/* S1 اسم البطولة */
'#xi .ttl{font-size:clamp(46px,15vw,150px);font-weight:900;line-height:1.1;margin:10px 0 0;filter:drop-shadow(0 8px 0 #4d330a) drop-shadow(0 20px 30px #000)}#xi .sc.on .ttl{animation:xtt 1.1s .3s both cubic-bezier(.15,1,.3,1),xs 5s 1.4s linear infinite}@keyframes xtt{from{opacity:0;transform:scale(1.6) translate3d(0,-20px,0)}to{opacity:1;transform:none}}@keyframes xs{to{background-position:-260% 0}}'+
'#xi .out2{font:900 clamp(26px,8.6vw,84px)/1.1 Cinzel,Georgia,serif;letter-spacing:.16em;direction:ltr;color:transparent;-webkit-text-stroke:1.5px #e8c872;margin:2px 0 8px;padding-inline-start:.16em}'+
'#xi .bar2{height:3px;border-radius:3px;background:linear-gradient(90deg,transparent,#e8c872,#ff7a2f,#e8c872,transparent);margin:14px 0;width:0}#xi .sc.on .bar2{animation:xw 1.4s 1s forwards ease-out}@keyframes xw{to{width:min(76vw,520px)}}'+
'#xi .chips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:16px}#xi .chips span{padding:8px 16px;border-radius:99px;font-size:14px;background:#e8c8721a;border:1px solid #e8c87266;color:#ffe9a8}'+
/* S2 اشتباك */
'#xi .cl{position:relative;width:min(900px,100%);height:clamp(150px,34vh,260px);display:flex;align-items:center;justify-content:center}'+
'#xi .tm{position:absolute;top:50%;margin-top:-52px;width:46%;height:104px;display:flex;align-items:center;font:900 clamp(20px,5.4vw,40px) Cinzel,Georgia,serif;letter-spacing:.12em;direction:ltr;padding:0 22px;opacity:0}#xi .tm.a{right:0;justify-content:flex-start;background:linear-gradient(90deg,#0b3a66,#38bdf8cc);clip-path:polygon(0 0,100% 0,88% 100%,0 100%);color:#e6f6ff;box-shadow:0 0 50px #38bdf8}#xi .tm.b{left:0;justify-content:flex-end;background:linear-gradient(270deg,#6b2208,#ff7a2fcc);clip-path:polygon(12% 0,100% 0,100% 100%,0 100%);color:#fff1e6;box-shadow:0 0 50px #ff7a2f}'+
'#xi .sc.on .tm.a{animation:xca .9s .3s forwards cubic-bezier(.15,1,.3,1)}#xi .sc.on .tm.b{animation:xcb .9s .3s forwards cubic-bezier(.15,1,.3,1)}@keyframes xca{from{opacity:1;transform:translate3d(120vw,0,0)}to{opacity:1;transform:none}}@keyframes xcb{from{opacity:1;transform:translate3d(-120vw,0,0)}to{opacity:1;transform:none}}'+
'#xi .vs{position:absolute;z-index:3;font:900 clamp(60px,18vw,150px)/1 Impact,sans-serif;direction:ltr;color:#fff;opacity:0;text-shadow:0 0 40px #e8c872,0 0 90px #ff7a2f;-webkit-text-stroke:2px #e8c872}#xi .sc.on .vs{animation:xvs .7s 1.15s forwards cubic-bezier(.2,1.6,.4,1)}@keyframes xvs{from{opacity:0;transform:scale(4)}to{opacity:1;transform:none}}'+
'#xi .shock{position:absolute;width:120px;height:120px;border-radius:50%;border:4px solid #fff;opacity:0;z-index:2}#xi .sc.on .shock{animation:xsk 1.1s 1.15s ease-out}@keyframes xsk{0%{opacity:1;transform:scale(.3)}100%{opacity:0;transform:scale(9)}}'+
'#xi .fl{position:absolute;inset:0;background:#fff;opacity:0;z-index:5;pointer-events:none}#xi .sc.on .fl{animation:xff .6s 1.15s ease-out}@keyframes xff{0%{opacity:.85}100%{opacity:0}}'+
'#xi .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;width:min(900px,100%)}'+
'#xi .tile{flex:1 1 120px;max-width:200px;padding:16px 10px;border-radius:18px;background:linear-gradient(160deg,#1b1a2dcc,#0a0b16f2);border:1px solid #e8c87266;box-shadow:0 10px 30px #0008}#xi .tile b{display:block;font:900 clamp(32px,9vw,50px)/1 Impact,sans-serif;direction:ltr;letter-spacing:2px;background:linear-gradient(#fff6c8,#e8c872,#b8860b);-webkit-background-clip:text;background-clip:text;color:transparent}#xi .tile small{display:block;margin-top:8px;opacity:.8;font-size:13.5px}'+
/* كروت */
'#xi .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(270px,100%),1fr));gap:10px;width:min(960px,100%)}'+
'#xi .c{position:relative;overflow:hidden;display:flex;gap:12px;align-items:center;text-align:right;padding:13px 15px;border-radius:16px;background:linear-gradient(135deg,#1b1e3ccc,#080a17f4);border:1px solid #e8c87244;box-shadow:0 8px 26px #0007}#xi .c:before{content:"";position:absolute;inset:0 auto 0 0;width:4px;background:linear-gradient(#e8c872,#ff7a2f)}#xi .c i{font-style:normal;flex:none;width:44px;height:44px;display:grid;place-items:center;border-radius:13px;font-size:22px;background:linear-gradient(135deg,#e8c87226,#e8c87208);border:1px solid #e8c87255;font-weight:800;color:#f3dc92}#xi .c b{display:block;font-size:15.5px;line-height:1.55}#xi .c small{display:block;opacity:.72;font-size:12.5px;margin-top:2px}'+
'#xi .lives{display:flex;gap:14px;margin:6px 0 16px}#xi .lives svg{width:clamp(54px,15vw,84px);filter:drop-shadow(0 0 16px #e8c872aa)}#xi .lives .it:nth-child(3){opacity:.4}'+
/* VAR */
'#xi .rv2{position:relative;width:min(680px,94%);aspect-ratio:600/300;border-radius:16px;overflow:hidden;background:#06140c;border:1px solid #fff4;box-shadow:0 0 60px #38bdf833,0 24px 60px #000}#xi .rv2 svg{position:absolute;inset:0;width:100%;height:100%}'+
'#xi .rv2 .scan{position:absolute;left:0;right:0;height:26%;top:-26%;background:linear-gradient(180deg,transparent,#38bdf844,transparent);z-index:1}#xi .sc.on .scan{animation:xsc 2.4s linear infinite}@keyframes xsc{to{transform:translate3d(0,500%,0)}}'+
'#xi .br{position:absolute;width:26px;height:26px;border:3px solid #38bdf8;z-index:2}#xi .br.a{top:30px;left:10px;border-right:0;border-bottom:0}#xi .br.b{top:30px;right:10px;border-left:0;border-bottom:0}#xi .br.c{bottom:34px;left:10px;border-right:0;border-top:0}#xi .br.d{bottom:34px;right:10px;border-left:0;border-top:0}'+
'#xi .rec{position:absolute;top:8px;left:10px;right:10px;display:flex;justify-content:space-between;font:700 11px/1 monospace;letter-spacing:1px;direction:ltr;color:#fff;z-index:2}#xi .rec span:first-child:before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef4444;margin-inline-end:6px;animation:xk 1s steps(2) infinite}@keyframes xk{50%{opacity:0}}'+
'#xi .cams{position:absolute;bottom:8px;left:12px;display:flex;gap:6px;z-index:2}#xi .cams b{font:700 10px/1 monospace;padding:4px 7px;border:1px solid #fff6;border-radius:4px;background:#0009;direction:ltr}'+
'#xi .chk{position:absolute;bottom:10px;right:14px;z-index:2;font:900 13px Impact,sans-serif;letter-spacing:3px;color:#38bdf8;direction:ltr}#xi .chk i{display:inline-block;width:7px;height:7px;margin-inline-start:6px;border-radius:50%;background:#38bdf8;animation:xk .6s steps(2) infinite}'+
'#xi .sc.on .bl{animation:xbl 3s .3s forwards ease-in-out}@keyframes xbl{to{transform:translate3d(300px,0,0)}}#xi .sc.on .ol{animation:xol 3s .3s forwards linear}@keyframes xol{from{transform:translate3d(220px,0,0)}to{transform:translate3d(330px,0,0)}}'+
'#xi .sc.on .lens{opacity:0;animation:xln 3s .3s forwards ease-in-out}@keyframes xln{0%{opacity:1;transform:translate3d(0,0,0)}100%{opacity:1;transform:translate3d(300px,0,0)}}'+
'#xi .vd{position:absolute;inset:0;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;z-index:3;opacity:0;font:900 clamp(30px,9vw,64px) Impact,sans-serif;letter-spacing:6px;color:#22c55e;text-shadow:0 0 30px #22c55e99;background:#000b;direction:ltr}#xi .vd small{font:700 12px monospace;letter-spacing:4px;color:#bbf7d0}#xi .sc.on .vd{animation:xv .6s 3.7s forwards cubic-bezier(.2,1.5,.4,1)}@keyframes xv{from{opacity:0;transform:scale(1.9)}to{opacity:1;transform:none}}'+
/* نهاية */
'#xi .fin{font-size:clamp(46px,14vw,120px);font-weight:900;margin:12px 0 6px;filter:drop-shadow(0 8px 0 #4d330a) drop-shadow(0 18px 28px #000)}#xi .sc.on .fin{animation:xtt 1s .3s both cubic-bezier(.15,1,.3,1),xs 4s 1.4s linear infinite}'+
'#xi .go{position:relative;margin-top:28px;padding:16px 42px;border:0;border-radius:18px;font:800 20px Tajawal,sans-serif;color:#1a1204;background:linear-gradient(135deg,#fff6c8,#e8c872 50%,#c89a3c);cursor:pointer;box-shadow:0 12px 40px #e8c87266;opacity:0}#xi .sc.on .go{animation:xi .8s 1.2s both cubic-bezier(.2,.9,.25,1),xgp 2s 2.2s ease-in-out infinite}@keyframes xgp{50%{transform:scale(1.06);box-shadow:0 12px 60px #e8c872aa}}'+
/* واجهة */
'#xi .skip{position:absolute;z-index:8;top:calc(8vh + 8px);left:14px;padding:8px 16px;border-radius:99px;border:1px solid #e8c87266;background:#000a;color:#f6eed9;font:700 13px Tajawal,sans-serif;cursor:pointer}'+
'#xi .pgs{position:absolute;z-index:8;left:16px;right:16px;bottom:calc(7vh + 6px);display:flex;gap:6px}#xi .pgs i{flex:1;height:3px;border-radius:3px;background:#ffffff22;overflow:hidden}#xi .pgs b{display:block;height:100%;width:0;background:linear-gradient(90deg,#e8c872,#ff9a52)}'+
'@media (max-height:520px){#xi .sc{padding:6vh 12px 8vh}#xi .lb{animation-name:xlbs}@keyframes xlbs{to{height:3vh}}}';
document.head.appendChild(st);

var VR=[];try{VR=VAR.map(function(v){return v[1]})}catch(e){}
function E(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
var SH='<path d="M32 3 56 12v18c0 15-10 26-24 31C18 56 8 45 8 30V12z"';
var SHIELD='<svg viewBox="0 0 64 64"><defs><linearGradient id="xg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4cf"/><stop offset=".5" stop-color="#e8c872"/><stop offset="1" stop-color="#9a6a16"/></linearGradient></defs>'+SH+' class="shf" fill="#120e06"/>'+SH+' class="sh" fill="none" stroke="url(#xg)" stroke-width="2.4"/><path class="shf" d="M20 40V24h9.5c3.6 0 5.8 2 5.8 5 0 2.6-1.6 4.4-4 4.9L37 40h-4.6l-4.2-5.6H24.2V40zm4.2-9.2h4.9c1.4 0 2.2-.7 2.2-1.9s-.8-1.8-2.2-1.8h-4.9zM39 40V24h4.2v12.4H50V40z" fill="url(#xg)"/></svg>';
var MINI='<svg viewBox="0 0 64 64">'+SH+' fill="#120e06" stroke="#e8c872" stroke-width="2.6"/><path d="M20 33l8 8 16-18" fill="none" stroke="#e8c872" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function card(i,t,s,d){return '<div class="c it" style="--d:'+d+'s"><i>'+i+'</i><div><b>'+E(t)+'</b>'+(s?'<small>'+E(s)+'</small>':'')+'</div></div>'}
function W(h){return '<div class="zm">'+h+'</div>'}

function scenes(){
  var A=[];
  A.push({d:7400,b:[1900,.5,.34],h:'<i class="flare"></i>'+W('<div class="lg0"><i class="halo"></i><i class="halo b"></i><i class="rg"></i><i class="rg" style="--d:1.1s"></i><i class="rg" style="--d:2.2s"></i>'+SHIELD+'</div><div class="nm">'+'RL ARENA'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')+'</div><div class="k it" style="--d:3.6s;margin-top:20px">CLAN TOURNAMENT</div><div class="it" style="--d:4.1s;opacity:.82;margin-top:8px">ساحة الكلانات · Rocket League</div>')});
  A.push({d:6800,h:'<i class="flare"></i>'+W('<div class="k it" style="--d:.1s">WELCOME TO THE</div><div class="ttl gold">بطولة الكلانات</div><div class="out2 it" style="--d:1s">ROCKET LEAGUE</div><div class="bar2"></div><div class="it" style="--d:1.9s;font-size:clamp(15px,3.7vw,23px);opacity:.9">كلان ضد كلان · تحكيم VAR احترافي · بث مباشر</div><div class="chips"><span class="it" style="--d:2.7s">🎮 بطولة ترفيهية</span><span class="it" style="--d:3s">⚔ 1v1 · 2v2 · 3v3</span><span class="it" style="--d:3.3s">📺 VAR + Replay</span></div>')});
  A.push({d:7400,b:[1150,.5,.45],h:'<i class="fl"></i>'+W('<div class="k it" style="--d:.1s">THE CLASH</div><div class="cl"><div class="tm a">CLAN A</div><div class="tm b">CLAN B</div><i class="shock"></i><div class="vs">VS</div></div><h2 class="it" style="--d:1.7s;margin:14px 0 14px">كلان ضد كلان</h2><div class="row"><div class="tile it" style="--d:2.1s"><b>1v1</b><small>قادة الكلانات</small></div><div class="tile it" style="--d:2.4s"><b>2v2</b><small>ثنائي من كل كلان</small></div><div class="tile it" style="--d:2.7s"><b>3v3</b><small>ثلاثي من كل كلان</small></div></div>')});
  A.push({d:8800,h:W('<div class="k it" style="--d:.1s">TOURNAMENT SYSTEM</div><h2 class="it" style="--d:.2s">لكل كلان 3 فرص</h2><div class="lives"><div class="it" style="--d:.5s">'+MINI+'</div><div class="it" style="--d:.8s">'+MINI+'</div><div class="it" style="--d:1.1s">'+MINI+'</div></div><div class="g">'+[['🏆','فوزين = تأهل','خسرت 2 وكسبت 1؟ لازم فوز كمان'],['🛡','3 خسارات = خروج','من البطولة'],['📅','وافق على المعاد؟','لو وافقت وماحضرتش = انسحاب'],['🎯','الشرط: Gold 2 أو أعلى','في 1v1 أو 2v2']].map(function(c,j){return card(c[0],c[1],c[2],1.6+j*.45)}).join('')+'</div>')});
  A.push({d:8400,h:W('<div class="k it" style="--d:.1s">VAR REVIEW</div><h2 class="it" style="--d:.2s">لقطة مشكوك فيها… الكل بيستنى القرار</h2><div class="rv2 it" style="--d:.4s"><div class="scan"></div><div class="rec"><span>REC · VAR ROOM</span><span class="tc">00:00:00:00</span></div><i class="br a"></i><i class="br b"></i><i class="br c"></i><i class="br d"></i><svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice"><rect width="600" height="300" fill="#0b4a22"/><g stroke="#fff6" stroke-width="2" fill="none"><rect x="8" y="8" width="584" height="284" rx="10"/><path d="M300 8V292"/><circle cx="300" cy="150" r="46"/><rect x="8" y="95" width="64" height="110"/><rect x="528" y="95" width="64" height="110"/></g><circle cx="210" cy="100" r="9" fill="#38bdf8"/><circle cx="330" cy="190" r="9" fill="#38bdf8"/><circle cx="420" cy="110" r="9" fill="#f97316"/><circle cx="460" cy="200" r="9" fill="#f97316"/><circle class="bl" cx="220" cy="150" r="6" fill="#fff"/><circle class="lens" cx="220" cy="150" r="26" fill="none" stroke="#fff" stroke-width="2"/><line class="ol" x1="0" y1="8" x2="0" y2="292" stroke="#ef4444" stroke-width="3"/></svg><div class="cams"><b>CAM 1</b><b>CAM 2</b><b>SLOW-MO 0.25x</b></div><div class="chk">VAR CHECKING<i></i></div><div class="vd">GOAL ✓<small>DECISION CONFIRMED</small></div></div>')});
  var n=Math.min(VR.length||0,9);
  if(n)A.push({d:Math.min(14000,4000+n*1000),h:W('<div class="k it" style="--d:.1s">VAR RULES</div><h2 class="it" style="--d:.2s">قوانين الـ VAR</h2><div class="g">'+VR.slice(0,n).map(function(r,j){return card(j+1,r,'',.5+j*.7)}).join('')+'</div>')});
  A.push({d:8600,h:W('<div class="k it" style="--d:.1s">EVERYTHING YOU NEED</div><h2 class="it" style="--d:.2s">كل اللي تحتاجه في مكان واحد</h2><div class="g">'+[['📅','مواعيد رسمية','كروت ماتشات وعدّاد تنازلي'],['📊','جدول النقاط','فوز · خسارة · نقاط · حالة الكلان'],['📺','بث مباشر','شاهد الماتش لايف وشجّع'],['💬','شات عام','للمسجّلين في الموقع'],['🎫','تذاكر وشكاوى','VAR · لاعب · قرار'],['🔔','إشعارات حيّة','كل جديد يوصلك لحظيًا']].map(function(c,j){return card(c[0],c[1],c[2],.5+j*.5)}).join('')+'</div>')});
  A.push({d:0,b:[350,.5,.42],h:'<i class="flare"></i>'+W('<div class="k it" style="--d:.1s">ARE YOU READY</div><div class="fin gold">جاهز للساحة؟</div><div class="it" style="--d:.8s;opacity:.88">VAR · مواعيد · نقاط · بث مباشر</div><button class="go" type="button">ادخل الساحة ⚽</button>')});
  return A;
}

function run(){
  var S=scenes(),x=document.createElement('div');x.id='xi';
  var h='<div class="gl g1"></div><div class="gl g2"></div><div class="gl g3"></div><div class="floor"><i></i></div><canvas></canvas><div class="vg"></div><div class="scl"></div><div class="sw"></div><i class="lb t"></i><i class="lb bt"></i><button class="skip" type="button">تخطي ⏭</button>';
  S.forEach(function(s,i){h+='<div class="sc" data-i="'+i+'">'+s.h+'</div>'});
  h+='<div class="pgs">'+S.map(function(){return '<i><b></b></i>'}).join('')+'</div>';
  x.innerHTML=h;document.body.appendChild(x);

  var sc=x.querySelectorAll('.sc'),bars=x.querySelectorAll('.pgs b'),sw=x.querySelector('.sw'),cur=-1,tm,bt,done=false,raf=0;
  var cv=x.querySelector('canvas'),g=cv.getContext('2d'),W_=0,H_=0,P=[],B=[],N=innerWidth<700?30:70;
  function rs(){W_=cv.width=innerWidth;H_=cv.height=innerHeight}rs();addEventListener('resize',rs);
  for(var i=0;i<N;i++)P.push({x:Math.random()*W_,y:Math.random()*H_,r:Math.random()*2.2+.5,v:Math.random()*.7+.2,a:Math.random()*6});
  function burst(fx,fy){var n=innerWidth<700?46:90,cx=W_*fx,cy=H_*fy;for(var i=0;i<n;i++){var a=Math.random()*6.283,sp=Math.random()*7+2;B.push({x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,l:1,r:Math.random()*2.6+.8,c:Math.random()<.3?'#ff9a52':'#ffe08a'})}}
  (function loop(){if(done)return;raf=requestAnimationFrame(loop);if(document.hidden)return;g.clearRect(0,0,W_,H_);g.fillStyle='#e8c872';
    for(var i=0;i<N;i++){var p=P[i];p.y-=p.v;p.a+=.02;if(p.y<-5){p.y=H_+5;p.x=Math.random()*W_}g.globalAlpha=.25+Math.abs(Math.sin(p.a))*.5;g.beginPath();g.arc(p.x,p.y,p.r,0,6.3);g.fill()}
    for(var j=B.length-1;j>=0;j--){var q=B[j];q.x+=q.vx;q.y+=q.vy;q.vx*=.965;q.vy*=.965;q.vy+=.04;q.l-=.014;if(q.l<=0){B.splice(j,1);continue}g.globalAlpha=q.l;g.fillStyle=q.c;g.beginPath();g.arc(q.x,q.y,q.r*q.l+.4,0,6.3);g.fill()}
  })();
  var t0=Date.now(),tcI=setInterval(function(){var d=Date.now()-t0,f=function(n){return String(n).padStart(2,'0')},e=x.querySelector('.sc.on .tc');if(e)e.textContent='00:'+f(Math.floor(d/60000)%60)+':'+f(Math.floor(d/1000)%60)+':'+f(Math.floor(d/40)%25)},120);
  function finish(){if(done)return;done=true;clearTimeout(tm);clearTimeout(bt);clearInterval(tcI);cancelAnimationFrame(raf);removeEventListener('resize',rs);document.documentElement.classList.remove('xin');x.classList.add('out');setTimeout(function(){x.remove();st.remove()},1100)}
  function go(n){
    if(done)return;if(n>=S.length)return finish();
    clearTimeout(tm);clearTimeout(bt);
    if(cur>=0){sw.classList.remove('go');void sw.offsetWidth;sw.classList.add('go')}
    var sw_t=cur>=0?380:0;
    setTimeout(function(){if(done)return;
      sc.forEach(function(s,i){s.classList.toggle('on',i===n)});
      sc[n].style.setProperty('--z',((S[n].d||6000)/1000+1)+'s');
      if(S[n].b)bt=setTimeout(function(){burst(S[n].b[1],S[n].b[2])},S[n].b[0]);
    },sw_t);
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
