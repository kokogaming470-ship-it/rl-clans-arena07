(function(){
/* شريط تقدّم السكرول فقط — خفيف وبدون إخفاء أي محتوى */
var bar=document.createElement('div');bar.id='fxp';
bar.style.cssText='position:fixed;top:0;left:0;height:3px;width:100%;transform-origin:0 50%;transform:scaleX(0);z-index:99997;background:linear-gradient(90deg,#e8c872,#ff7a2f,#7c8cff);pointer-events:none';
function init(){
  document.body.appendChild(bar);var tk=0;
  addEventListener('scroll',function(){if(tk)return;tk=requestAnimationFrame(function(){tk=0;var h=document.documentElement;bar.style.transform='scaleX('+Math.min(1,h.scrollTop/((h.scrollHeight-h.clientHeight)||1))+')'})},{passive:true});
}
if(document.body)init();else document.addEventListener('DOMContentLoaded',init);
})();
