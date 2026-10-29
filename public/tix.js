(function(){
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var T={player:'🚨 شكوى ضد لاعب',var:'📺 طلب مراجعة VAR',decision:'⚖ شكوى على قرار VAR'};
var st=document.createElement('style');st.textContent='#tb{position:fixed;bottom:18px;left:88px;z-index:80;width:58px;height:58px;border-radius:50%;border:0;background:linear-gradient(135deg,#ff7a2f,#c2410c);font-size:26px;cursor:pointer;box-shadow:0 8px 24px #000a}#tm{position:fixed;inset:0;z-index:9991;background:#000c;display:none;align-items:center;justify-content:center;font-family:Tajawal,Tahoma,sans-serif}#tm.on{display:flex}#tm .bx{width:min(460px,94vw);max-height:90vh;overflow:auto;background:#0c0f1a;border:1px solid #e8c87255;border-radius:16px;padding:16px;color:#f4ecd8}#tm select,#tm input,#tm textarea{width:100%;margin:6px 0;padding:10px;border-radius:10px;border:1px solid #333;background:#05060f;color:#fff;font:inherit;user-select:text}#tm button{border:0;border-radius:10px;padding:11px 16px;font:inherit;font-weight:800;background:#e8c872;color:#1a1204;cursor:pointer}#tm .t{border:1px solid #333;border-radius:10px;padding:8px;margin-top:8px;font-size:13px}';document.head.appendChild(st);
fetch('/api/me').then(function(r){return r.json()}).then(function(m){
  if(!m)return;
  var b=document.createElement('button');b.id='tb';b.textContent='🎫';b.title='افتح تذكرة';
  var d=document.createElement('div');d.id='tm';
  d.innerHTML='<div class="bx"><h3 style="margin:0;color:#e8c872">🎫 افتح تذكرة</h3><select id="tt"><option value="player">'+T.player+'</option><option value="var">'+T.var+'</option><option value="decision">'+T.decision+'</option></select><input id="tg" placeholder="اسم اللاعب / رقم أو وصف القرار" maxlength="80"><textarea id="tx" rows="4" maxlength="800" placeholder="اشرح اللي حصل بالتفصيل (التوقيت، الماتش، الدليل)"></textarea><div style="display:flex;gap:8px"><button id="ts">إرسال</button><button id="tc" style="background:#4b5563;color:#fff">إغلاق</button></div><h4 style="color:#e8c872;margin:14px 0 0">تذاكري</h4><div id="tl"></div></div>';
  document.body.appendChild(b);document.body.appendChild(d);
  async function load(){var l=await (await fetch('/api/tix')).json();$('tl').innerHTML=(l||[]).map(function(x){return '<div class="t"><b>'+T[x.type]+'</b> — '+(x.status==='closed'?'✅ اتقفلت':'⏳ مفتوحة')+'<br>'+esc(x.target)+'<br>'+esc(x.text)+(x.reply?'<br><b style="color:#e8c872">رد الإدارة:</b> '+esc(x.reply):'')+'</div>'}).join('')||'<div style="opacity:.6">مفيش تذاكر</div>'}
  b.onclick=function(){d.classList.add('on');load()};$('tc').onclick=function(){d.classList.remove('on')};
  $('ts').onclick=async function(){var x=$('tx').value.trim();if(!x)return;await fetch('/api/tix',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({op:'new',type:$('tt').value,target:$('tg').value,text:x})});$('tx').value='';$('tg').value='';load()};
}).catch(function(){});
})();
