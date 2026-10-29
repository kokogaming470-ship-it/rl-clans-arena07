(function(){
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var T={player:{n:'شكوى ضد لاعب',i:'🚨',c:'#ef4444',d:'تصرّف غير رياضي أو مخالفة'},var:{n:'طلب مراجعة VAR',i:'📺',c:'#38bdf8',d:'لقطة عايز تتراجع'},decision:{n:'شكوى على قرار VAR',i:'⚖',c:'#e8c872',d:'قرار حسّيت إنه مش صح'}};
function ago(ts){var d=(Date.now()-ts)/1000;if(d<60)return 'الآن';if(d<3600)return 'من '+Math.floor(d/60)+' د';if(d<86400)return 'من '+Math.floor(d/3600)+' س';return 'من '+Math.floor(d/86400)+' يوم'}
var st=document.createElement('style');st.textContent=
'#tb{position:fixed;bottom:calc(18px + env(safe-area-inset-bottom,0px));left:86px;z-index:80;height:54px;padding:0 20px;border-radius:30px;border:0;background:linear-gradient(135deg,#ff8a3d,#c2410c);color:#fff;font:800 15px Tajawal,sans-serif;cursor:pointer;box-shadow:0 8px 24px #000a;display:flex;align-items:center;gap:8px}'+
'#tm{position:fixed;inset:0;z-index:9991;background:#000d;display:none;align-items:center;justify-content:center;padding:12px;font-family:Tajawal,Tahoma,sans-serif;direction:rtl}#tm.on{display:flex}'+
'#tm .bx{width:min(680px,100%);max-height:94vh;display:flex;flex-direction:column;background:linear-gradient(180deg,#12141f,#0a0b14);border:1px solid #e8c87255;border-radius:22px;color:#f4ecd8;box-shadow:0 30px 80px #000;overflow:hidden}'+
'#tm .hd{display:flex;align-items:center;gap:12px;padding:18px 20px;background:linear-gradient(90deg,#ff7a2f22,transparent);border-bottom:1px solid #ffffff14}#tm .hd h3{margin:0;font-size:21px;color:#f3dc92;flex:1}#tm .x{width:38px;height:38px;border-radius:50%;border:1px solid #ffffff22;background:#ffffff0d;color:#fff;font-size:18px;cursor:pointer}'+
'#tm .tabs{display:flex;gap:6px;padding:12px 20px 0}#tm .tabs button{flex:1;padding:11px;border-radius:12px 12px 0 0;border:1px solid #ffffff14;border-bottom:0;background:#ffffff08;color:#bbb;font:700 15px Tajawal,sans-serif;cursor:pointer}#tm .tabs button.on{background:#e8c87222;color:#f3dc92;border-color:#e8c87266}'+
'#tm .body{padding:18px 20px 20px;overflow:auto;flex:1;border-top:1px solid #e8c87233}'+
'#tm .types{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-bottom:14px}#tm .ty{padding:14px 12px;border-radius:16px;border:2px solid #ffffff14;background:#ffffff08;text-align:center;cursor:pointer;color:inherit;font:inherit}#tm .ty b{display:block;font-size:26px}#tm .ty strong{display:block;margin:4px 0 2px;font-size:15px}#tm .ty small{opacity:.65;font-size:12px}#tm .ty.on{border-color:var(--c);background:color-mix(in srgb,var(--c) 14%,transparent);box-shadow:0 0 24px color-mix(in srgb,var(--c) 30%,transparent)}'+
'#tm label{display:block;margin:12px 0 5px;font-weight:700;font-size:14px;color:#e8c872}#tm input,#tm textarea{width:100%;padding:13px 14px;border-radius:12px;border:1px solid #ffffff22;background:#05060f;color:#fff;font:inherit;font-size:15px;user-select:text;-webkit-user-select:text}#tm textarea{resize:vertical;min-height:130px}#tm .cnt{text-align:left;font-size:12px;opacity:.55;margin-top:3px;direction:ltr}'+
'#tm .send{width:100%;margin-top:16px;padding:15px;border:0;border-radius:14px;font:800 17px Tajawal,sans-serif;color:#1a1204;background:linear-gradient(135deg,#fff1b8,#e8c872 50%,#c89a3c);cursor:pointer}#tm .send:disabled{opacity:.5}'+
'#tm .tk{padding:14px 16px;border-radius:16px;margin-bottom:12px;background:#ffffff08;border:1px solid #ffffff14;border-inline-start:4px solid var(--c)}#tm .tk .th2{display:flex;align-items:center;gap:8px;flex-wrap:wrap}#tm .tk .th2 b{font-size:15px}#tm .chip{padding:3px 12px;border-radius:99px;font-size:12px;font-weight:800}#tm .chip.o{background:#ffc53d22;color:#ffd97a}#tm .chip.c{background:#22c55e22;color:#86efac}#tm .tk p{margin:8px 0 0;line-height:1.8;font-size:14.5px;white-space:pre-wrap;word-break:break-word}#tm .tk .tg{opacity:.7;font-size:13px;margin-top:4px}#tm .rp{margin-top:10px;padding:11px 13px;border-radius:12px;background:#e8c87216;border:1px solid #e8c87244;font-size:14px;line-height:1.7}#tm .rp b{color:#f3dc92;display:block;margin-bottom:2px}#tm .em{text-align:center;padding:34px 10px;opacity:.6}'+
'@media(max-width:560px){#tm{padding:0;align-items:flex-end}#tm .bx{border-radius:22px 22px 0 0;max-height:96vh}#tb{left:78px}}';
document.head.appendChild(st);
fetch('/api/me').then(function(r){return r.json()}).then(function(m){
  if(!m)return;
  var b=document.createElement('button');b.id='tb';b.innerHTML='<span style="font-size:22px">🎫</span>تذكرة';b.title='افتح تذكرة';
  var d=document.createElement('div');d.id='tm';
  d.innerHTML='<div class="bx"><div class="hd"><span style="font-size:30px">🎫</span><h3>مركز التذاكر</h3><button class="x" id="tc" aria-label="إغلاق">✕</button></div>'+
   '<div class="tabs"><button class="on" data-t="new">تذكرة جديدة</button><button data-t="mine">تذاكري <span id="tcn"></span></button></div>'+
   '<div class="body"><div id="tp_new"><div class="types" id="tty">'+Object.keys(T).map(function(k,i){var t=T[k];return '<button type="button" class="ty'+(i?'':' on')+'" data-k="'+k+'" style="--c:'+t.c+'"><b>'+t.i+'</b><strong>'+t.n+'</strong><small>'+t.d+'</small></button>'}).join('')+'</div>'+
   '<label>اسم اللاعب / الكلان / وصف القرار</label><input id="tg" maxlength="80" placeholder="مثال: لاعب كلان X — الماتش الأخير">'+
   '<label>التفاصيل (التوقيت · الماتش · الدليل)</label><textarea id="tx" maxlength="800" placeholder="اشرح اللي حصل بالتفصيل…"></textarea><div class="cnt"><span id="tcc">0</span>/800</div>'+
   '<button class="send" id="ts" type="button">إرسال التذكرة</button></div>'+
   '<div id="tp_mine" style="display:none"><div id="tl"></div></div></div></div>';
  document.body.appendChild(b);document.body.appendChild(d);
  var kind='player',list=[];
  function render(){
    var open=list.filter(function(x){return x.status!=='closed'}).length;$('tcn').textContent=list.length?'('+list.length+')':'';
    $('tl').innerHTML=list.map(function(x){var t=T[x.type]||T.player;return '<div class="tk" style="--c:'+t.c+'"><div class="th2"><span style="font-size:20px">'+t.i+'</span><b>'+t.n+'</b><span class="chip '+(x.status==='closed'?'c':'o')+'">'+(x.status==='closed'?'✅ اتقفلت':'⏳ قيد المراجعة')+'</span><small style="margin-inline-start:auto;opacity:.55">'+ago(x.ts)+'</small></div>'+(x.target?'<div class="tg">'+esc(x.target)+'</div>':'')+'<p>'+esc(x.text)+'</p>'+(x.reply?'<div class="rp"><b>رد الإدارة</b>'+esc(x.reply)+'</div>':'')+'</div>'}).join('')||'<div class="em">مفيش تذاكر لسه</div>';
  }
  async function load(){try{list=await (await fetch('/api/tix',{cache:'no-store'})).json();if(!Array.isArray(list))list=[]}catch(e){list=[]}render()}
  function tab(t){document.querySelectorAll('#tm .tabs button').forEach(function(x){x.classList.toggle('on',x.dataset.t===t)});$('tp_new').style.display=t==='new'?'':'none';$('tp_mine').style.display=t==='mine'?'':'none';if(t==='mine')load()}
  document.querySelectorAll('#tm .tabs button').forEach(function(x){x.onclick=function(){tab(x.dataset.t)}});
  document.querySelectorAll('#tty .ty').forEach(function(x){x.onclick=function(){kind=x.dataset.k;document.querySelectorAll('#tty .ty').forEach(function(y){y.classList.toggle('on',y===x)})}});
  $('tx').oninput=function(){$('tcc').textContent=this.value.length};
  b.onclick=function(){d.classList.add('on');tab('new')};$('tc').onclick=function(){d.classList.remove('on')};
  d.addEventListener('click',function(e){if(e.target===d)d.classList.remove('on')});
  $('ts').onclick=async function(){var x=$('tx').value.trim();if(!x){$('tx').focus();return}var s=this;s.disabled=true;
    try{await fetch('/api/tix',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({op:'new',type:kind,target:$('tg').value,text:x})});$('tx').value='';$('tg').value='';$('tcc').textContent='0';if(typeof toast==='function')toast('تم إرسال التذكرة ✅','🎫');tab('mine')}catch(e){}
    s.disabled=false};
}).catch(function(){});
})();
