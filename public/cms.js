(function(){
var MAP={},ADM=false,EDIT=false,SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,NOSCRIPT:1};
function ok(n){var p=n.parentNode;while(p&&p!==document.body){if(SKIP[p.nodeName]||p.id==='am'||p.id==='xi'||p.id==='cbox'||p.id==='ctb')return false;p=p.parentNode}return !!p}
function apply(){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];while(n=w.nextNode())L.push(n);
  L.forEach(function(n){var t=n.nodeValue.trim();if(!t||!ok(n))return;var k=n._o||t;if(Object.prototype.hasOwnProperty.call(MAP,k)){if(t!==MAP[k]){n._o=k;n.nodeValue=n.nodeValue.replace(t,MAP[k])}}else if(n._o&&n._o!==t){n.nodeValue=n.nodeValue.replace(t,n._o);delete n._o}});
}
var mo=new MutationObserver(function(){clearTimeout(apply.t);apply.t=setTimeout(apply,120)});
async function load(){try{MAP=await (await fetch('/api/tx')).json()||{};apply()}catch(e){}}
function adminUI(){
  var st=document.createElement('style');st.textContent='#ctb{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:9980;padding:10px 22px;border:0;border-radius:30px;font:800 15px Tajawal,sans-serif;background:#1f2937;color:#fff;cursor:pointer;box-shadow:0 8px 24px #000a}body.cms *{outline:1px dashed #e8c87266;cursor:text!important}';document.head.appendChild(st);
  var b=document.createElement('button');b.id='ctb';b.textContent='✏ تعديل النصوص';document.body.appendChild(b);
  b.onclick=function(){EDIT=!EDIT;document.body.classList.toggle('cms',EDIT);b.textContent=EDIT?'✅ وضع التعديل شغال — اضغط على أي نص':'✏ تعديل النصوص';b.style.background=EDIT?'#16a34a':'#1f2937'};
  document.addEventListener('click',async function(e){
    if(!EDIT||e.target.id==='ctb')return;
    var el=e.target,n=null;for(var c=el.firstChild;c;c=c.nextSibling)if(c.nodeType===3&&c.nodeValue.trim()){n=c;break}
    if(!n||!ok(n))return;e.preventDefault();e.stopPropagation();
    var cur=n.nodeValue.trim(),key=n._o||cur,v=prompt('عدّل النص (سيبه فاضي لإرجاع الأصلي):',cur);if(v===null)return;
    await fetch('/api/tx',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({from:key,to:v.trim()})});
    if(v.trim())MAP[key]=v.trim();else delete MAP[key];n._o=key;apply();
  },true);
}
function init(){load();mo.observe(document.body,{childList:true,subtree:true,characterData:false});fetch('/api/me').then(function(r){return r.json()}).then(function(m){if(m&&m.isAdmin)adminUI()}).catch(function(){})}
if(document.body)init();else document.addEventListener('DOMContentLoaded',init);
})();
