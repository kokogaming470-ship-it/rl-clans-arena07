(function(){
var st=document.createElement('style');st.textContent=
'.fxv{opacity:0;transform:translateY(46px) scale(.96);filter:blur(6px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,1.2,.3,1),filter .8s}.fxv.in{opacity:1;transform:none;filter:none}'+
'.card,.gcard,.ev,.banner{position:relative;transition:transform .35s cubic-bezier(.2,1.2,.3,1),box-shadow .35s,border-color .35s;background-image:radial-gradient(circle 220px at var(--mx,50%) var(--my,50%),#e8c87222,transparent 70%)}'+
'.card:hover,.gcard:hover{box-shadow:0 14px 44px #e8c87233,0 0 0 1px #e8c87277;transform:translateY(-6px)}'+
'.btn,button{position:relative;overflow:hidden;transition:transform .2s,filter .2s,box-shadow .3s}.btn:hover,button:hover{filter:brightness(1.15);transform:translateY(-2px)}.btn:active,button:active{transform:scale(.95)}'+
'.fxr{position:absolute;border-radius:50%;background:#fff6;transform:scale(0);animation:fxr .7s ease-out forwards;pointer-events:none}@keyframes fxr{to{transform:scale(4);opacity:0}}'+
'#fxp{position:fixed;top:0;left:0;height:3px;width:0;z-index:99997;background:linear-gradient(90deg,#e8c872,#ff7a2f,#7c8cff);box-shadow:0 0 14px #e8c872}'+
'h1,h2{animation:fxh 5s ease-in-out infinite alternate}@keyframes fxh{to{text-shadow:0 0 26px #e8c87255}}'+
'.hero{animation:fxf 7s ease-in-out infinite alternate}@keyframes fxf{to{transform:translateY(-10px)}}'+
'.live,.onl,.dot{animation:fxk 1.6s infinite}@keyframes fxk{50%{opacity:.35}}';
document.head.appendChild(st);
var bar=document.createElement('div');bar.id='fxp';
function init(){
  document.body.appendChild(bar);
  addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%'},{passive:true});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
  function scan(){document.querySelectorAll('.card:not(.fxv),.match:not(.fxv),.gcard:not(.fxv),.ev:not(.fxv),.banner:not(.fxv),.hero:not(.fxv),.kv:not(.fxv),.row:not(.fxv)').forEach(function(el,i){el.classList.add('fxv');el.style.transitionDelay=Math.min(i%6,5)*70+'ms';io.observe(el)})}
  scan();new MutationObserver(function(){clearTimeout(scan.t);scan.t=setTimeout(scan,120)}).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('pointermove',function(e){var c=e.target.closest&&e.target.closest('.card,.match,.gcard,.ev,.banner');if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button,.btn');if(!b)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');s.className='fxr';s.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';b.appendChild(s);setTimeout(function(){s.remove()},700)});
}
if(document.body)init();else document.addEventListener('DOMContentLoaded',init);
})();
