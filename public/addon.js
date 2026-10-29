(function(){
var $=function(i){return document.getElementById(i)},ME=null,CH=null,tm,openP=false;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function api(b){return fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(function(r){return r.json()})}
var css=document.createElement('style');css.textContent=
'#cbtn{position:fixed;bottom:18px;left:18px;z-index:80;width:58px;height:58px;border-radius:50%;border:0;background:linear-gradient(135deg,#e8c872,#c89a3c);font-size:26px;cursor:pointer;box-shadow:0 8px 24px #000a}'+
'#cbox{position:fixed;bottom:86px;left:18px;z-index:80;width:min(360px,92vw);height:min(480px,70vh);background:#0c0f1aee;border:1px solid #e8c87255;border-radius:16px;display:none;flex-direction:column;backdrop-filter:blur(10px);color:#f4ecd8;font-family:Tajawal,Tahoma,sans-serif}'+
'#cbox.on{display:flex}#ch{padding:10px 12px;font-weight:800;color:#e8c872;display:flex;gap:6px;align-items:center}#ch button{margin-right:auto;border:0;border-radius:8px;padding:4px 10px;background:#4b5563;color:#fff;cursor:pointer}'+
'#cm2{flex:1;overflow:auto;padding:8px;display:flex;flex-direction:column;gap:8px}.m{display:flex;gap:8px;align-items:flex-start}.m img{width:30px;height:30px;border-radius:50%}.m b{font-size:12px;color:#e8c872}.m p{margin:2px 0 0;font-size:14px;word-break:break-word}.m.a b{color:#ff7a2f}'+
'#cf{display:flex;gap:6px;padding:8px}#ci{flex:1;padding:9px;border-radius:10px;border:1px solid #333;background:#05060f;color:#fff;user-select:text}#cs{border:0;border-radius:10px;background:#e8c872;padding:0 14px;font-weight:800;cursor:pointer}'+
'#ban{position:fixed;inset:0;z-index:99999;background:radial-gradient(circle at 50% 40%,#3a0610,#02030a 70%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;font-family:Tajawal,Tahoma,sans-serif;text-align:center;padding:20px;overflow:hidden}'+
'#ban .lk{font-size:110px;animation:bz 1.4s infinite}@keyframes bz{0%,100%{transform:rotate(-8deg) scale(1)}50%{transform:rotate(8deg) scale(1.15);filter:drop-shadow(0 0 40px #ef4444)}}'+
'#ban h1{margin:0;font-size:clamp(40px,10vw,84px);letter-spacing:4px;background:linear-gradient(90deg,#ef4444,#ffd666,#ef4444);background-size:300%;-webkit-background-clip:text;color:transparent;animation:bs 3s linear infinite,bi 1s both}@keyframes bs{to{background-position:300%}}@keyframes bi{from{opacity:0;transform:scale(2.5);filter:blur(20px)}}'+
'#ban .t{font:800 54px Impact,sans-serif;color:#ffd666;direction:ltr;text-shadow:0 0 30px #ef4444}#ban .rr{position:absolute;border:2px solid #ef4444;border-radius:50%;width:140px;height:140px;animation:br 3s infinite ease-out;opacity:0}@keyframes br{0%{transform:scale(.3);opacity:.9}100%{transform:scale(9);opacity:0}}';
document.head.appendChild(css);
function fmt(ms){var s=Math.max(0,Math.floor(ms/1000)),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);return (d?d+'d ':'')+String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function showBan(b){
  if($('ban'))return;var d=document.createElement('div');d.id='ban';
  d.innerHTML='<div class="rr"></div><div class="rr" style="animation-delay:1s"></div><div class="rr" style="animation-delay:2s"></div><div class="lk">🔒</div><h1>تم حظرك</h1><div style="font-size:18px;opacity:.85">'+(b.reason?'السبب: '+esc(b.reason):'تم حظرك من الموقع بقرار الإدارة')+'</div><div class="t" id="bt"></div><div style="opacity:.6">الوقت المتبقي على فك الحظر</div>';
  document.body.appendChild(d);
  var i=setInterval(function(){var l=b.until-Date.now();if(l<=0){clearInterval(i);location.reload();return}$('bt').textContent=fmt(l)},500);
}
function render(){
  if(!CH)return;var box=$('cm2'),near=box.scrollHeight-box.scrollTop-box.clientHeight<80;
  box.innerHTML=CH.msgs.map(function(m){return '<div class="m'+(m.adm?' a':'')+'" data-i="'+m.id+'" data-u="'+m.uid+'" data-n="'+esc(m.name)+'"><img src="'+esc(m.av)+'"><div><b>'+esc(m.name)+(m.adm?' 🛡':'')+'</b><p>'+esc(m.t)+'</p></div></div>'}).join('')||'<div style="opacity:.6;text-align:center;margin-top:30px">مفيش رسايل لسه</div>';
  if(near)box.scrollTop=box.scrollHeight;
  $('cf').style.display=(CH.open||CH.admin)&&!CH.ban?'flex':'none';
  $('cnote').textContent=CH.ban?'أنت محظور':!CH.open?'🔒 الشات مقفول حالياً':'';
  if(CH.admin){var t=$('ctg');t.style.display='inline-block';t.textContent=CH.open?'قفل الشات':'فتح الشات'}
}
async function poll(){
  if(!openP)return;
  try{var r=await fetch('/api/chat');if(r.ok){CH=await r.json();if(CH.ban)showBan(CH.ban);render()}}catch(e){}
  tm=setTimeout(poll,5000);
}
function build(){
  var b=document.createElement('button');b.id='cbtn';b.textContent='💬';
  var x=document.createElement('div');x.id='cbox';
  x.innerHTML='<div id="ch">💬 الشات العام<button id="ctg" style="display:none"></button></div><div id="cnote" style="padding:0 12px;font-size:13px;color:#ef4444"></div><div id="cm2"></div><div id="cf"><input id="ci" maxlength="300" placeholder="اكتب رسالة..."><button id="cs">إرسال</button></div>';
  document.body.appendChild(b);document.body.appendChild(x);
  b.onclick=function(){openP=!openP;x.classList.toggle('on',openP);clearTimeout(tm);if(openP)poll()};
  async function send(){var i=$('ci'),t=i.value.trim();if(!t)return;i.value='';var j=await api({op:'send',t:t});if(j.error==='closed')alert('الشات مقفول');if(j.error==='banned')location.reload();clearTimeout(tm);poll()}
  $('cs').onclick=send;$('ci').onkeydown=function(e){if(e.key==='Enter')send()};
  $('ctg').onclick=async function(){await api({op:'toggle',open:!CH.open});clearTimeout(tm);poll()};
  $('cm2').onclick=async function(e){
    if(!CH||!CH.admin)return;var m=e.target.closest('.m');if(!m)return;
    var a=prompt('اكتب: 1 = مسح الرسالة   2 = حظر صاحبها','1');
    if(a==='1')await api({op:'del',id:m.dataset.i});
    else if(a==='2'){var mins=prompt('مدة الحظر بالدقائق (60=ساعة، 1440=يوم)','60');if(!mins)return;var why=prompt('السبب (اختياري)','')||'';await api({op:'ban',uid:m.dataset.u,name:m.dataset.n,mins:mins,reason:why})}
    clearTimeout(tm);poll();
  };
}
function adminLink(){
  var a=$('admin');if(!a||$('vslink'))return;
  var d=document.createElement('a');d.id='vslink';d.href='/var.html';
  d.style.cssText='display:block;margin:12px 0;padding:18px;border-radius:14px;text-align:center;font:800 20px Tajawal,sans-serif;color:#1a1204;text-decoration:none;background:linear-gradient(135deg,#e8c872,#c89a3c);box-shadow:0 0 30px #e8c87255';
  d.innerHTML='🎛 VAR System — التحكم في السكور بورد والبث<br><small style="font-weight:400">رابط الـ OBS: /overlay.html · صفحة المشاهدين: /overlay.html?bg=1</small>';
  a.insertBefore(d,a.firstChild);
}
fetch('/api/chat?ban=1').then(function(r){return r.json()}).then(function(j){if(j.ban)showBan(j.ban)}).catch(function(){});
fetch('/api/me').then(function(r){return r.json()}).then(function(m){
  ME=m;if(!m)return;build();
  if(m.isAdmin)setInterval(adminLink,1500);
}).catch(function(){});
})();
