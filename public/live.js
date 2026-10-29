(function(){
var $=function(i){return document.getElementById(i)},INFO={on:false},vid=Math.random().toString(36).slice(2,12),pc=null,open=false,pt,ME=null;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function api(b){return fetch('/api/live',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(function(r){return r.json()})}
var st=document.createElement('style');st.textContent=
'#lv{position:fixed;inset:0;z-index:9990;background:#02030af2;display:none;flex-direction:column;color:#f4ecd8;font-family:Tajawal,Tahoma,sans-serif}#lv.on{display:flex}'+
'#lv .h{display:flex;align-items:center;gap:10px;padding:12px 16px;font-weight:800}#lv .h b{color:#ef4444;animation:lk 1.2s infinite}@keyframes lk{50%{opacity:.3}}#lv .h button{margin-right:auto}'+
'.vw{position:relative;flex:3;min-width:min(100%,520px)}.vw video{width:100%;height:100%;min-width:0}#lsc{position:absolute;border:0;background:transparent;pointer-events:none;aspect-ratio:1300/420;width:100%;top:0;left:0}#lsc.tl{width:58%}#lsc.tr{width:58%;left:auto;right:0}#lsc.bc{top:auto;bottom:6%}#lsc.off{display:none}#lvr{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;border-radius:14px;overflow:hidden;background:radial-gradient(circle at 50% 38%,#0b2250,#02030a 75%)}#lvr.on{display:flex;animation:vin .8s}@keyframes vin{from{opacity:0;transform:scale(1.2);filter:blur(14px)}}#lvr:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 3px,#ffffff08 3px 4px)}#lvr .vv{font:900 min(34vw,300px)/1 Impact,sans-serif;color:transparent;-webkit-text-stroke:3px #38bdf8;filter:drop-shadow(0 0 40px #38bdf8);animation:vp 2s ease-in-out infinite alternate;direction:ltr}@keyframes vp{to{transform:scale(1.07);filter:drop-shadow(0 0 80px #38bdf8)}}#lvr .vc{position:absolute;bottom:22%;display:flex;gap:12px;align-items:center;padding:8px 34px;border:2px solid #38bdf8;border-radius:10px;background:#02061acc;color:#fff;font:900 clamp(18px,4vw,40px) Impact,sans-serif;letter-spacing:6px;direction:ltr;box-shadow:0 0 40px #38bdf866}#lvr .vc span{width:14px;height:14px;border-radius:50%;background:#ef4444;animation:lk 1s infinite}'+'#lv .b{flex:1;display:flex;gap:10px;padding:0 10px 10px;min-height:0;flex-wrap:wrap}#lv video{flex:3;min-width:min(100%,520px);width:100%;max-height:100%;background:#000;border-radius:14px;border:1px solid #e8c87244;box-shadow:0 0 50px #e8c87222}'+
'#lv .s{flex:1;min-width:260px;display:flex;flex-direction:column;background:#0c0f1a;border-radius:14px;border:1px solid #e8c87233;min-height:220px}#lc{flex:1;overflow:auto;padding:8px;display:flex;flex-direction:column;gap:6px;font-size:14px}#lc b{color:#e8c872}'+
'#lv .f{display:flex;gap:6px;padding:8px}#lv input{flex:1;padding:9px;border-radius:10px;border:1px solid #333;background:#05060f;color:#fff;user-select:text}#lv button,.lvb{border:0;border-radius:10px;padding:9px 14px;font:inherit;font-weight:800;background:#e8c872;color:#1a1204;cursor:pointer}'+
'.lvc{display:flex;align-items:center;gap:12px;margin:10px 0;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#3a0a12,#12060a);border:1px solid #ef4444aa;box-shadow:0 0 30px #ef444444;animation:lp 2s infinite;color:#fff}@keyframes lp{50%{box-shadow:0 0 54px #ef4444aa}}.lvc b{flex:1}'+
'#lfb{position:fixed;bottom:18px;right:18px;z-index:80;display:none}#lfb.on{display:block;animation:lp 2s infinite}';
st.textContent+='#lv{background:radial-gradient(circle at 50% 0,#1a2036f5,#02030af8 70%);backdrop-filter:blur(8px)}#lv .h{background:linear-gradient(90deg,#ef444422,transparent);border-bottom:1px solid #e8c87233}#lv .h b{display:inline-block;padding:2px 12px;border-radius:99px;background:#ef4444;color:#fff;font-size:13px;letter-spacing:2px}#lv .h #lt{font-size:18px;color:#f3dc92}#lv .vw{border-radius:16px;overflow:hidden;border:2px solid #e8c87266;box-shadow:0 0 60px #e8c87233,0 20px 60px #000a;background:#000;min-height:240px}#lv .vw video{border:0;border-radius:0;box-shadow:none;object-fit:contain}#lw{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(circle,#101830,#02030a);font-weight:800;color:#e8c872}#lw i{width:54px;height:54px;border-radius:50%;border:4px solid #e8c87233;border-top-color:#e8c872;animation:lsp 1s linear infinite}@keyframes lsp{to{transform:rotate(360deg)}}#lv .s{background:linear-gradient(180deg,#10142a,#080a14);border:1px solid #e8c87244}#lv .s:before{content:"💬 تعليقات المشاهدين";padding:10px 12px;font-weight:800;color:#e8c872;border-bottom:1px solid #ffffff14}#lc div{padding:6px 10px;border-radius:10px;background:#ffffff0a;animation:lci .4s}@keyframes lci{from{opacity:0;transform:translateY(8px)}}#lcn{background:linear-gradient(135deg,#ff7a2f,#c2410c)!important;color:#fff!important;font-size:16px}.fh{position:fixed;bottom:90px;z-index:9999;font-size:34px;pointer-events:none;animation:fhf 2s forwards}@keyframes fhf{to{transform:translateY(-260px) scale(1.6);opacity:0}}';
document.head.appendChild(st);
function gather(p){return new Promise(function(ok){if(p.iceGatheringState==='complete')return ok();var t=setTimeout(ok,4000);p.onicegatheringstatechange=function(){if(p.iceGatheringState==='complete'){clearTimeout(t);ok()}}})}
var ICE={iceServers:[{urls:['stun:stun.l.google.com:19302','stun:stun1.l.google.com:19302','stun:global.stun.twilio.com:3478']},{urls:['turn:openrelay.metered.ca:80','turn:openrelay.metered.ca:443','turn:openrelay.metered.ca:443?transport=tcp'],username:'openrelayproject',credential:'openrelayproject'}]},tries=0,wd;
var fv;
function okFrames(){var v=$('lvid');return v&&v.videoWidth>0&&v.readyState>=2&&!v.paused}
function fetchIce(){return fetch('/api/live?ice=1',{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){if(j&&j.iceServers&&j.iceServers.length)ICE={iceServers:j.iceServers}}).catch(function(){})}
var STX={checking:'بنبحث عن أفضل مسار اتصال…',connected:'اتصلنا — بنستنى أول صورة…',completed:'اتصلنا — بنستنى أول صورة…',failed:'فشل الاتصال المباشر',disconnected:'الاتصال اتقطع'};
async function connect(){
  if(!open)return;
  if(pc){try{pc.close()}catch(e){}}
  clearInterval(fv);clearTimeout(wd);
  await fetchIce();if(!open)return;
  var myvid=vid=Math.random().toString(36).slice(2,12),p=pc=new RTCPeerConnection(ICE),v=$('lvid');
  $('lw').style.display='flex';$('lretry').style.display='none';$('lwt').textContent='بيتوصل بالبث…';$('lst').textContent='⏳ بيتوصل...';
  p.ontrack=function(e){if(p!==pc)return;if(v.srcObject!==e.streams[0])v.srcObject=e.streams[0];v.muted=true;var pr=v.play();if(pr&&pr.catch)pr.catch(function(){})};
  p.oniceconnectionstatechange=function(){if(p!==pc)return;var t=STX[p.iceConnectionState];if(t&&$('lw').style.display!=='none')$('lwt').textContent=t};
  p.onconnectionstatechange=function(){var s=p.connectionState;if(open&&p===pc&&(s==='failed'||s==='closed'))setTimeout(function(){if(open&&p===pc&&!okFrames())retry()},300)};
  /* LIVE بتظهر بس لما الصورة توصل فعلًا */
  fv=setInterval(function(){if(!open||p!==pc){clearInterval(fv);return}if(okFrames()){clearInterval(fv);clearTimeout(wd);tries=0;$('lw').style.display='none';$('lst').textContent='LIVE';$('lsnd').style.display=v.muted?'':'none'}},400);
  wd=setTimeout(function(){if(open&&p===pc&&!okFrames())retry()},22000);
  try{await api({op:'join',vid:myvid})}catch(e){}
  var n=0,iv=setInterval(async function(){
    if(!open||p!==pc){clearInterval(iv);return}
    if(++n>40){clearInterval(iv);retry();return}
    try{var j=await (await fetch('/api/live?offer='+myvid,{cache:'no-store'})).json();
      if(j.offer){clearInterval(iv);$('lwt').textContent='استلمنا البث — بنجهّز الاتصال…';await p.setRemoteDescription({type:'offer',sdp:j.offer});var a=await p.createAnswer();await p.setLocalDescription(a);await gather(p);await api({op:'answer',vid:myvid,sdp:p.localDescription.sdp})}
    }catch(e){}
  },1000);
}
function retry(){
  if(!open)return;
  if(++tries>5){$('lst').textContent='❌ تعذّر الاتصال';$('lwt').textContent='ماقدرناش نوصل للبث';$('lretry').style.display='';$('lw').style.display='flex';return}
  connect();
}
async function watch(){
  if(!ME){alert('سجّل دخول بحساب ديسكورد عشان تشاهد');return}
  $('lv').classList.add('on');open=true;tries=0;$('lsnd').style.display='none';
  connect();tick();
}
function close(){open=false;clearTimeout(wd);clearInterval(fv);$('lv').classList.remove('on');if(pc){try{pc.close()}catch(e){}pc=null}$('lvid').srcObject=null}
var was=null;
function paint(j){
  INFO=j.info||{on:false};var on=!!INFO.on;if(was===false&&on&&!open&&typeof toast==='function')toast('🔴 بدأ بث مباشر — اضغط «بث مباشر» للمشاهدة','📺');was=on;if($('lt'))$('lt').textContent=INFO.title||'';
  $('lfb').classList.toggle('on',on);
  var old=document.querySelector('.lvc');
  if(!on){if(old)old.remove();if(open){$('lst').textContent='انتهى البث';}return}
  if(open){$('lcn').textContent='👏 '+j.cheers;$('lc').innerHTML=j.msgs.map(function(m){return '<div><b>'+esc(m.name)+'</b> '+esc(m.t)+'</div>'}).join('');$('lc').scrollTop=1e9}
  var list=$('schedList');if(!list)return;
  if(!old){
    old=document.createElement('div');old.className='lvc';
    old.innerHTML='<span style="font-size:30px">🔴</span><b>'+esc(INFO.title||'بث مباشر')+'<br><small style="font-weight:400;opacity:.8">شاهد الماتش لايف وشجّع</small></b><button class="lvb">شاهد الآن</button>';
    old.querySelector('button').onclick=watch;
    var ms=list.querySelectorAll('.match'),at=null;
    ms.forEach(function(m){if(INFO.c1&&INFO.c2&&m.textContent.indexOf(INFO.c1)>-1&&m.textContent.indexOf(INFO.c2)>-1)at=m});
    if(at)at.after(old);else list.insertBefore(old,list.firstChild);
  }
}
async function vsv(){try{var j=await (await fetch('/api/vs')).json(),s=j.state||{},v=s.view||'game';$('lsc').className=(v==='game'?'':'off ')+(s.pos||'tc');$('lvr').classList.toggle('on',v==='var')}catch(e){}}
async function tick(){if(open)vsv();try{var r=await fetch('/api/live');paint(await r.json())}catch(e){}clearTimeout(pt);pt=setTimeout(tick,open?3000:7000)}
function build(){
  var d=document.createElement('div');d.id='lv';
  d.innerHTML='<div class="h"><b>●</b><b id="lst">LIVE</b><span id="lt"></span><button id="lx">✕ إغلاق</button></div><div class="b"><div class="vw"><div id="lw"><i></i><span id="lwt">بيتوصل بالبث…</span><button id="lretry" style="display:none">🔄 إعادة المحاولة</button></div><video id="lvid" autoplay muted playsinline controls></video><button id="lsnd" style="display:none;position:absolute;z-index:4;bottom:56px;right:12px">🔊 تشغيل الصوت</button><iframe id="lsc" src="overlay.html" scrolling="no"></iframe><div id="lvr"><div class="vv">VAR</div><div class="vc"><span></span>VAR CHECK</div></div></div><div class="s"><div id="lc"></div><div class="f"><input id="li" maxlength="200" placeholder="اكتب تعليق..."><button id="ls">إرسال</button><button id="lcn" title="تشجيع">👏 0</button></div></div></div>';
  document.body.appendChild(d);
  var b=document.createElement('button');b.id='lfb';b.className='lvb';b.textContent='🔴 بث مباشر';b.onclick=watch;document.body.appendChild(b);
  $('lx').onclick=close;$('lretry').onclick=function(){tries=0;connect()};$('lsnd').onclick=function(){var v=$('lvid');v.muted=false;v.play().catch(function(){});this.style.display='none'};
  async function send(){var i=$('li'),t=i.value.trim();if(!t)return;i.value='';var j=await api({op:'comment',t:t});if(j.error==='banned')alert('أنت محظور');tick()}
  $('ls').onclick=send;$('li').onkeydown=function(e){if(e.key==='Enter')send()};
  $('lcn').onclick=async function(){for(var i=0;i<6;i++){(function(i){setTimeout(function(){var h=document.createElement('div');h.className='fh';h.textContent=['👏','🔥','⚽','🏆','💛'][i%5];h.style.right=(20+Math.random()*220)+'px';document.body.appendChild(h);setTimeout(function(){h.remove()},2000)},i*120)})(i)}await api({op:'cheer'});tick()};
}
fetch('/api/me').then(function(r){return r.json()}).then(function(m){ME=m}).catch(function(){}).then(function(){build();tick()});
})();
