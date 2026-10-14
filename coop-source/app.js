(()=>{
'use strict';
/* ---------- icons ---------- */
const P={
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 ext:'<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
 in:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
 copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
 check:'<path d="m5 12 5 5 9-10"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3"/>',
 bank:'<path d="m3 9 9-5 9 5"/><path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3 20h18"/>',
 gov:'<path d="M12 3v3M5 21V11h14v10M3 21h18M8 11V8h8v3M9 15v3M12 15v3M15 15v3"/>',
 calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h4"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 kanban:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v7M12 7v4M16 7v10"/>',
 send:'<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4z"/>',
 cards:'<rect x="6" y="4" width="14" height="16" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
 heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
 spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
 up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 shuffle:'<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 next:'<path d="m15 6-6 6 6 6"/>',prev:'<path d="m9 6 6 6-6 6"/>',
 download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>',
 file:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/>',
 wand:'<path d="m15 4 5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
 users:'<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M17 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
 clip:'<path d="M21 11 12 20a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>'
};
const svg=n=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(P[n]||'')+'</svg>';
const ic=(n,st)=>{const s=document.createElement('span');s.className='ic';s.innerHTML=svg(n);if(st)s.style.cssText=st;return s};
const paintIcons=(root=document)=>root.querySelectorAll('[data-i]').forEach(e=>{e.innerHTML=svg(e.dataset.i);e.removeAttribute('data-i')});
paintIcons();

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function h(tag,props,...kids){const e=document.createElement(tag);if(props)for(const k in props){const v=props[k];if(v==null||v===false)continue;if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k.startsWith('on')&&typeof v==='function')e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v)}for(const c of kids.flat(9)){if(c==null||c===false)continue;e.append(c.nodeType?c:document.createTextNode(String(c)))}return e}
function rich(el,text){String(text).split('**').forEach((p,i)=>{if(!p)return;el.append(i%2?h('strong',null,p):document.createTextNode(p))});return el}
const norm=s=>(s||'').toLowerCase().replace(/[ً-ْـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه');
const store={get(k,d){try{const v=localStorage.getItem('coop:'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('coop:'+k,JSON.stringify(v))}catch(e){}}};
const nf=new Intl.NumberFormat('en-US');
let tT;function toast(m){$('#toastT').textContent=m;$('#toast').classList.add('on');clearTimeout(tT);tT=setTimeout(()=>$('#toast').classList.remove('on'),2200)}
function copy(text,btn,msg){
 const ok=()=>{toast(msg||'تم النسخ');if(btn){btn.classList.add('done');const o=btn.innerHTML;btn.innerHTML=svg('check');setTimeout(()=>{btn.classList.remove('done');btn.innerHTML=o},1400)}};
 const fb=()=>{try{const t=h('textarea',{style:'position:fixed;opacity:0'});t.value=text;document.body.append(t);t.select();const r=document.execCommand('copy');t.remove();r?ok():toast('حدّد النص وانسخه يدوياً')}catch(e){toast('حدّد النص وانسخه يدوياً')}};
 try{navigator.clipboard?navigator.clipboard.writeText(text).then(ok,fb):fb()}catch(e){fb()}
}
const safeUrl=u=>{if(!u)return '';u=u.trim();if(!/^https?:\/\//i.test(u))u='https://'+u;try{const x=new URL(u);return /^https?:$/.test(x.protocol)?x.href:''}catch(e){return ''}};

/* ---------- theme ---------- */
const root=document.documentElement;
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
const tb=$('#theme');
const tlbl=()=>{tb.innerHTML=svg(isDark()?'sun':'moon');tb.setAttribute('aria-label',isDark()?'الوضع الفاتح':'الوضع الداكن');tb.title=tb.getAttribute('aria-label')};
const flip=()=>{root.dataset.theme=isDark()?'light':'dark';store.set('theme',root.dataset.theme);tlbl()};
tb.onclick=e=>{if(!document.startViewTransition||matchMedia('(prefers-reduced-motion: reduce)').matches)return flip();const x=e.clientX,y=e.clientY,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));const vt=document.startViewTransition(flip);vt.ready.then(()=>root.animate({clipPath:['circle(0 at '+x+'px '+y+'px)','circle('+r+'px at '+x+'px '+y+'px)']},{duration:550,easing:'cubic-bezier(.22,1,.36,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{})};tlbl();
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',tlbl)}catch(e){}

/* ---------- data prep ---------- */
const GN=['مكاتب المحاسبة والمراجعة','البنوك والمالية','الهيئات والوزارات','الشركات'];
const GI=['calc','bank','gov','building'];
D.forEach((d,i)=>{d.e=d.e||[];d.id=d.n;d._k=norm([d.n,d.s,d.c,d.e.join(' '),GN[d.g],d.x||''].join(' '));d._r=(d.e.length?2:0)+(d.l?2:0)+(d.i?1:0)});
const hasC=d=>d.e.length||d.l||d.i;
const byId=new Map(D.map(d=>[d.id,d]));
const initial=n=>{const m=(n||'').replace(/[^\p{L}\p{N}]/gu,'');return (m[0]||'•').toUpperCase()};

/* ---------- tracker state ---------- */
const ST=[['saved','محفوظة','var(--faint)'],['applied','قدّمت','var(--g1)'],['followed','أرسلت تذكير','var(--g3)'],['interview','مقابلة','var(--gold)'],['accepted','مقبول 🎉','var(--ok)'],['rejected','اعتذار','var(--bad)']];
const STN=Object.fromEntries(ST.map(s=>[s[0],s[1]]));
let TR=store.get('tracker',{});
Object.keys(TR).forEach(k=>{if(!byId.has(k))delete TR[k]});
const saveTR=()=>{store.set('tracker',TR);drawTracker()};
const isFav=d=>!!TR[d.id];
function toggleFav(d){if(TR[d.id]){delete TR[d.id];toast('أُزيلت من قائمة المتابعة')}else{TR[d.id]={s:'saved',t:Date.now()};toast('أُضيفت إلى متابعة تقديماتي')}saveTR()}
function setStatus(d,s){const r=TR[d.id]||(TR[d.id]={t:Date.now()});r.s=s;if(s==='applied'&&!r.a)r.a=Date.now();if(s==='followed')r.f=Date.now();saveTR();toast('الحالة: '+STN[s])}
const days=t=>Math.floor((Date.now()-t)/864e5);
const fmtD=t=>new Date(t).toLocaleDateString('ar-SA-u-ca-gregory-nu-latn',{day:'numeric',month:'short'});

/* ---------- email generator settings ---------- */
const POS=['Co-op Training Program – Accounting','Accounting Fresh Graduates Position (External Auditor)','Accounting Internship','Finance Co-op Training'];
let G=Object.assign({name:'',phone:'',pos:POS[0],to:''},store.get('gen',{}));
const subj=()=>'Application for '+(G.pos||POS[0]);
const fileName=()=>((G.name||'Your Name').trim()+' CV.pdf');
const mailBody=()=>{const n=(G.name||'[Your Name]').trim();return `Dear Hiring Team,

I hope this email finds you well. My name is ${n}, an Accounting student at Imam Mohammad Ibn Saud Islamic University, and I am writing to express my interest in the ${G.pos||POS[0]} at your organization.

[Paste your Cover Letter here]

Please find attached my CV and Cover Letter (${fileName()}). I would welcome the opportunity to contribute to your team and learn from your professionals.

Thank you for your time and consideration.

Best regards,
${n}${G.phone?'\n'+G.phone:''}`};
const mailto=(to,full)=>'mailto:'+encodeURIComponent(to).replace(/%40/g,'@')+'?subject='+encodeURIComponent(subj())+(full?'&body='+encodeURIComponent(mailBody()):'');

/* ---------- stats ---------- */
const S={tot:D.length,m:D.filter(d=>d.e.length).length,l:D.filter(d=>d.l).length,q:Q.length};
$('#stats').append(...[[S.tot,'جهة تدريب'],[S.m,'جهة لها إيميل'],[S.l,'رابط تقديم'],[S.q,'سؤال بإجابته']].map(([n,t])=>h('div',{class:'stat'},h('b',{'data-n':n},'0'),h('span',null,t))));
function countUp(){$$('[data-n]').forEach(b=>{const n=+b.dataset.n;if(matchMedia('(prefers-reduced-motion: reduce)').matches){b.textContent=nf.format(n);return}const t0=performance.now(),dur=1200;const f=t=>{const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);b.textContent=nf.format(Math.round(n*e));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)})}
countUp();

/* ---------- directory ---------- */
const F={g:-1,s:'',q:'',m:0,l:0,i:0,w:0,fav:0,sort:'d',n:24};
function match(d,skip){
 if(skip!=='g'&&F.g>=0&&d.g!==F.g)return false;
 if(skip!=='s'&&F.s&&d.s!==F.s)return false;
 if(F.m&&!d.e.length)return false;if(F.l&&!d.l)return false;if(F.i&&!d.i)return false;if(F.w&&!d.u)return false;if(F.fav&&!isFav(d))return false;
 if(F.q){const t=norm(F.q).split(/\s+/).filter(Boolean);if(!t.every(w=>d._k.includes(w)))return false}
 return true;
}
function drawGroups(){
 const g=$('#gtabs');g.textContent='';
 const base=D.filter(d=>match(d,'g'));
 [[-1,'كل الجهات','grid'],...GN.map((n,i)=>[i,n,GI[i]])].forEach(([i,n,icn])=>{
  const c=i<0?base.length:base.filter(d=>d.g===i).length;
  g.append(h('button',{type:'button','aria-pressed':String(F.g===i),onclick:()=>{F.g=i;F.s='';F.n=24;drawDir()}},ic(icn,'width:16px;height:16px'),n,h('i',null,nf.format(c))));
 });
}
function drawSectors(){
 const s=$('#ssel');const m={};D.filter(d=>match(d,'s')).forEach(d=>m[d.s]=(m[d.s]||0)+1);
 const k=Object.keys(m).sort((a,b)=>m[b]-m[a]);
 if(F.s&&!m[F.s])F.s='';
 s.textContent='';s.append(h('option',{value:''},'كل القطاعات'),...k.map(x=>h('option',{value:x},x+' ('+m[x]+')')));s.value=F.s;
}
function card(d){
 const fav=isFav(d);
 const a=h('article',{class:'card emp g'+d.g});
 const star=h('button',{class:'star',type:'button','aria-pressed':String(fav),'aria-label':(fav?'إزالة ':'حفظ ')+d.n,title:fav?'محفوظة في متابعتي':'احفظ في متابعتي',onclick:()=>{toggleFav(d);drawDir(true)}});star.innerHTML=svg('star');
 const meta=h('div',{class:'meta'},h('span',null,d.s));if(d.c)meta.append(h('span',{class:'dot'}),h('span',null,d.c));
 a.append(h('div',{class:'hd'},h('div',{class:'av','aria-hidden':'true'},initial(d.n)),h('div',{style:'min-width:0'},h('h3',null,d.n),meta),star));
 const b=h('div',{class:'bdgs'},h('span',{class:'bdg g'+d.g},GN[d.g]));
 if(d.u)b.append(h('span',{class:'bdg w'},ic('spark','width:12px;height:12px'),'قائمة وليد'));
 if(d.nw)b.append(h('span',{class:'bdg n'},'جديد'));
 a.append(b);
 if(d.x)a.append(h('p',{class:'nt'},d.x));
 if(d.e.length){const ms=h('div',{class:'mails'});d.e.forEach(e=>{
  const cp=h('button',{class:'mini',type:'button','aria-label':'نسخ '+e,title:'نسخ الإيميل'});cp.innerHTML=svg('copy');cp.onclick=()=>copy(e,cp,'تم نسخ الإيميل');
  const mt=h('a',{class:'mini',href:mailto(e,true),'aria-label':'مراسلة '+e,title:'افتح رسالة تقديم جاهزة'});mt.innerHTML=svg('send');
  ms.append(h('div',{class:'mail'},ic('mail'),h('span',{class:'ad',title:e},e),cp,mt))});a.append(ms)}
 const ft=h('div',{class:'ft'});
 const l=safeUrl(d.l),li=safeUrl(d.i);
 if(l)ft.append(h('a',{class:'btn pri',href:l,target:'_blank',rel:'noopener noreferrer'},ic('ext'),'رابط التقديم'));
 if(li)ft.append(h('a',{class:'btn',href:li,target:'_blank',rel:'noopener noreferrer','aria-label':'لينكدإن '+d.n},ic('in'),'لينكدإن'));
 if(!l&&!li&&!d.e.length)ft.append(h('span',{class:'note'},'لا توجد بيانات تواصل — ابحث عن الجهة في لينكدإن.'));
 if(fav){const sel=h('select',{class:'stsel','aria-label':'حالة التقديم'},ST.map(([v,t])=>h('option',{value:v},t)));sel.value=TR[d.id].s;sel.onchange=()=>setStatus(d,sel.value);ft.append(sel)}
 a.append(ft);return a;
}
let lastList=[];
function drawDir(keepN){
 drawGroups();drawSectors();
 let r=D.filter(d=>match(d));
 if(F.sort==='a')r.sort((a,b)=>a.n.localeCompare(b.n,'ar'));
 else if(F.sort==='r')r.sort((a,b)=>b._r-a._r||a.n.localeCompare(b.n,'ar'));
 else r.sort((a,b)=>a.g-b.g||(b.u||0)-(a.u||0)||(!!hasC(b)-!!hasC(a))||b._r-a._r||a.n.localeCompare(b.n,'ar'));
 lastList=r;
 $('#cnt').innerHTML='';$('#cnt').append(h('b',null,nf.format(r.length)),' جهة'+(r.length!==D.length?' من '+nf.format(D.length):''));
 const active=F.g>=0||F.s||F.q||F.m||F.l||F.i||F.w||F.fav;$('#reset').hidden=!active;
 const L=$('#dl');L.textContent='';
 if(!r.length){L.append(h('div',{class:'empty'},ic('search'),h('b',null,F.fav?'ما حفظت أي جهة بعد':'ما لقينا جهة مطابقة'),F.fav?'اضغط ★ على أي جهة في الدليل لحفظها.':'جرّب كلمة أبسط أو امسح بعض الفلاتر.'));$('#more').hidden=true;return}
 const f=document.createDocumentFragment();const st=keepN==='more'?F.n-24:0;r.slice(0,F.n).forEach((d,i)=>{const c=card(d);if(keepN===true||i<st)c.style.animation='none';else c.style.animationDelay=Math.min(i-st,12)*35+'ms';f.append(c)});L.append(f);
 const left=r.length-F.n;$('#more').hidden=left<=0;$('#more').textContent='عرض المزيد ('+nf.format(Math.max(left,0))+' متبقية)';
}
let qT;$('#dq').addEventListener('input',e=>{clearTimeout(qT);qT=setTimeout(()=>{F.q=e.target.value.trim();F.n=24;drawDir()},120)});
$('#ssel').onchange=e=>{F.s=e.target.value;F.n=24;drawDir()};
$('#sort').onchange=e=>{F.sort=e.target.value;drawDir()};
$$('#togs .tg').forEach(b=>b.onclick=()=>{const k=b.dataset.f;F[k]=F[k]?0:1;b.setAttribute('aria-pressed',String(!!F[k]));F.n=24;drawDir()});
$('#more').onclick=()=>{F.n+=24;drawDir('more')};
$('#reset').onclick=()=>{Object.assign(F,{g:-1,s:'',q:'',m:0,l:0,i:0,w:0,fav:0,n:24});$('#dq').value='';$$('#togs .tg').forEach(b=>b.setAttribute('aria-pressed','false'));drawDir()};
try{new IntersectionObserver(es=>{if(es[0].isIntersecting&&!$('#more').hidden&&F.n<lastList.length&&F.n<96){F.n+=24;drawDir('more')}},{rootMargin:'300px'}).observe($('#more'))}catch(e){}
drawDir();

/* hero search */
const hq=$('#hq'),hr=$('#hres');let hsel=-1;
function goDir(v){$('#dq').value=v;F.q=v;F.g=-1;F.s='';F.n=24;drawDir();hr.hidden=true;$('#employers').scrollIntoView({behavior:'smooth'})}
function focusEmp(d){$('#dq').value=d.n;F.q=d.n;F.g=-1;F.s='';Object.assign(F,{m:0,l:0,i:0,w:0,fav:0});$$('#togs .tg').forEach(b=>b.setAttribute('aria-pressed','false'));F.n=24;drawDir();hr.hidden=true;$('#employers').scrollIntoView({behavior:'smooth'})}
hq.addEventListener('input',()=>{
 const v=hq.value.trim();hr.textContent='';hsel=-1;if(!v){hr.hidden=true;return}
 const t=norm(v).split(/\s+/).filter(Boolean),m=D.filter(d=>t.every(w=>d._k.includes(w)));
 m.slice(0,6).forEach(d=>hr.append(h('button',{type:'button',onclick:()=>focusEmp(d)},h('span',{class:'av',style:'width:30px;height:30px;font-size:13px;border-radius:8px'},initial(d.n)),h('span',null,d.n),h('span',{class:'m'},GN[d.g]))));
 hr.append(h('button',{type:'button',class:'all',onclick:()=>goDir(v)},m.length?'عرض كل النتائج ('+m.length+') في الدليل':'لا توجد جهة بهذا الاسم — ابحث في الدليل'));
 hr.hidden=false;
});
hq.addEventListener('keydown',e=>{const bs=[...hr.querySelectorAll('button')];if(!bs.length)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();hsel=(hsel+(e.key==='ArrowDown'?1:-1)+bs.length)%bs.length;bs.forEach((b,i)=>b.classList.toggle('on',i===hsel))}else if(e.key==='Enter'&&hsel>=0){e.preventDefault();bs[hsel].click()}else if(e.key==='Escape')hr.hidden=true});
$('#hform').onsubmit=e=>{e.preventDefault();goDir(hq.value.trim())};
document.addEventListener('click',e=>{if(!e.target.closest('.hs'))hr.hidden=true});
$$('.qs button').forEach(b=>b.onclick=()=>{hq.value=b.dataset.q;goDir(b.dataset.q)});

/* ---------- tracker ---------- */
let tf='';
function drawTracker(){
 const ids=Object.keys(TR);const pipe=$('#pipe');pipe.textContent='';
 ST.forEach(([k,t,c])=>{const n=ids.filter(i=>TR[i].s===k).length;pipe.append(h('button',{class:'pst',type:'button',style:'--c:'+c,'aria-pressed':String(tf===k),onclick:()=>{tf=tf===k?'':k;drawTracker()}},h('b',null,n),h('span',null,t)))});
 const L=$('#trows');L.textContent='';const tb=$('#tbar');tb.textContent='';
 if(!ids.length){L.append(h('div',{class:'card empty'},ic('star'),h('b',null,'قائمتك فاضية'),'احفظ الجهات اللي تبي تقدّم عليها من الدليل بالضغط على ★، وتابع حالتها من هنا.',h('div',{style:'margin-top:14px'},h('a',{class:'btn pri',href:'#employers'},'تصفّح الدليل'))));return}
 const order=Object.fromEntries(ST.map((s,i)=>[s[0],i]));
 let rows=ids.map(i=>[byId.get(i),TR[i]]).filter(([d,r])=>!tf||r.s===tf).sort((a,b)=>{const da=a[1].s==='applied'&&a[1].a&&days(a[1].a)>=7,db=b[1].s==='applied'&&b[1].a&&days(b[1].a)>=7;return db-da||order[a[1].s]-order[b[1].s]||b[1].t-a[1].t});
 if(!rows.length)L.append(h('div',{class:'card empty'},'لا توجد جهات بهذه الحالة.'));
 rows.forEach(([d,r])=>{
  const due=r.s==='applied'&&r.a&&days(r.a)>=7;
  const nm=h('div',{class:'nm'},d.n,h('small',null,GN[d.g]+' · '+d.s));if(due)nm.append(h('span',{class:'due'},ic('bell','width:13px;height:13px'),'مرّ '+days(r.a)+' أيام — أرسل التذكير'));
  const dt=h('div',{class:'dt'},r.a?'قدّمت: '+fmtD(r.a):'أُضيفت: '+fmtD(r.t),r.f?' · تذكير: '+fmtD(r.f):'');
  const sel=h('select',{class:'stsel','aria-label':'حالة التقديم على '+d.n,style:'margin:0'},ST.map(([v,t])=>h('option',{value:v},t)));sel.value=r.s;sel.onchange=()=>{setStatus(d,sel.value);drawDir(true)};
  const acts=h('div',{class:'btns'});
  if(d.e[0]){const m=h('a',{class:'mini',href:mailto(d.e[0],true),title:'مراسلة','aria-label':'مراسلة '+d.n});m.innerHTML=svg('send');acts.append(m)}
  const l=safeUrl(d.l);if(l){const a=h('a',{class:'mini',href:l,target:'_blank',rel:'noopener noreferrer',title:'رابط التقديم','aria-label':'رابط التقديم'});a.innerHTML=svg('ext');acts.append(a)}
  const rm=h('button',{class:'mini',type:'button',title:'إزالة','aria-label':'إزالة '+d.n,onclick:()=>{delete TR[d.id];saveTR();drawDir(true);toast('أُزيلت من القائمة')}});rm.innerHTML=svg('trash');acts.append(rm);
  L.append(h('div',{class:'card trow'},nm,dt,sel,acts));
 });
 tb.append(h('span',{class:'cnt'},h('b',null,ids.length),' جهة في قائمتك'),h('div',{class:'btns'},
  h('button',{class:'btn sm',type:'button',onclick:exportCSV},ic('download','width:16px;height:16px'),'تصدير Excel (CSV)'),
  h('button',{class:'btn sm ghost',type:'button',onclick:()=>{if(confirm('متأكد تبي تمسح كل قائمة المتابعة؟')){TR={};saveTR();drawDir(true)}}},ic('trash','width:16px;height:16px'),'مسح القائمة')));
}
function exportCSV(){
 const esc=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
 const rows=[['الجهة','النوع','القطاع','المدينة','الإيميل','رابط التقديم','لينكدإن','الحالة','تاريخ التقديم','تاريخ التذكير']];
 Object.keys(TR).forEach(i=>{const d=byId.get(i),r=TR[i];rows.push([d.n,GN[d.g],d.s,d.c,d.e.join(' ; '),d.l,d.i,STN[r.s],r.a?new Date(r.a).toISOString().slice(0,10):'',r.f?new Date(r.f).toISOString().slice(0,10):''])});
 const blob=new Blob(['﻿'+rows.map(r=>r.map(esc).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'});
 const a=h('a',{href:URL.createObjectURL(blob),download:'co-op-applications.csv'});document.body.append(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);toast('تم تنزيل الملف');
}
drawTracker();

/* ---------- apply guide ---------- */
const PROMPTS=['اجعلها تتناسب للتقديم على شاغر وظيفي في إحدى الشركات أو المكاتب','اكتب لي Cover Letter يتناسب مع سيرتي الذاتية','اكتب لي إيميل تذكيري فيما يخص تقديمي على شاغر وظيفي','اكتب لي رسالة موجزة تتناسب للتواصل عن طريق منصة لينكدإن، ويكون محتواها أنني مهتم بالانضمام لفريق العمل في الشركة، وأنني أرفقت لهم سيرتي الذاتية'];
const step=(n,title,...body)=>h('div',{class:'step'},h('div',{class:'num'},n),h('div',{class:'card bd'},title?h('h4',null,title):null,...body));
const promptBox=t=>{const b=h('button',{class:'btn sm pri',type:'button'},ic('copy','width:15px;height:15px'),'نسخ');b.onclick=()=>copy(t,null,'تم نسخ الطلب — الصقه في ChatGPT');return h('div',{class:'prompt'},h('span',null,'«'+t+'»'),b)};
const tip=(title,text,icn)=>h('div',{class:'tip'},h('span',{class:'ti'},ic(icn||'bulb')),rich(h('div',null,h('b',null,title+': ')),text));
const rp=t=>rich(h('p'),t);
function generator(){
 const box=h('div',{class:'card gen'});
 const inp=(lbl,k,ph,l)=>{const i=h('input',{type:'text',value:G[k]||'',placeholder:ph,class:l?'l':null,autocomplete:'off'});i.oninput=()=>{G[k]=i.value;store.set('gen',G);upd()};return h('label',{class:'fl'},lbl,i)};
 const ps=h('select',null,POS.map(p=>h('option',{value:p},p)));ps.value=POS.includes(G.pos)?G.pos:POS[0];ps.onchange=()=>{G.pos=ps.value;store.set('gen',G);upd();drawDir(true)};
 const sO=h('pre'),bO=h('pre'),fO=h('pre');
 const cpb=(get,msg)=>{const b=h('button',{class:'btn sm',type:'button'},ic('copy','width:15px;height:15px'),'نسخ');b.onclick=()=>copy(get(),null,msg);return b};
 const open=h('a',{class:'btn pri'},ic('send','width:16px;height:16px'),'افتح في البريد');
 function upd(){sO.textContent=subj();bO.textContent=mailBody();fO.textContent=fileName();open.href=mailto(G.to||'',true)}
 box.append(h('h4',null,ic('wand'),'مولّد إيميل التقديم'),h('p',{class:'note'},'عبّي بياناتك مرة وحدة، ويصير زر ✈ في الدليل يفتح لك رسالة جاهزة لأي جهة. البيانات تبقى في متصفحك.'),
  h('div',{class:'fgrid'},inp('اسمك بالإنجليزي','name','Ahmed Alqahtani',1),inp('رقم جوالك (اختياري)','phone','+966 5X XXX XXXX',1),h('label',{class:'fl'},'الفرصة',ps),inp('إيميل الجهة (اختياري)','to','hr@company.com',1)),
  h('div',{class:'out'},h('div',{class:'oh'},'عنوان الإيميل (Subject)',cpb(subj,'تم نسخ العنوان')),sO),
  h('div',{class:'out'},h('div',{class:'oh'},'نص الإيميل',cpb(mailBody,'تم نسخ النص')),bO),
  h('div',{class:'out'},h('div',{class:'oh'},'اسم ملف الـ PDF',cpb(fileName,'تم نسخ اسم الملف')),fO),
  h('div',{class:'btns'},open,h('span',{class:'note',style:'align-self:center'},'تذكّر ترفق ملف الـ PDF يدوياً قبل الإرسال.')));
 upd();return box;
}
const AP=[
 ['جهّز ملفاتك',()=>h('div',{class:'panel'},
  h('p',{class:'lead'},'قبل ما تقدّم، جهّز هذي الملفات بمساعدة ChatGPT.'),
  h('div',{class:'steps'},
   step('1','تعديل السيرة الذاتية',h('p',null,'ضع سيرتك الذاتية في ChatGPT، واكتب له:'),promptBox(PROMPTS[0])),
   step('2','كتابة الـ Cover Letter',h('p',null,'ضع سيرتك الذاتية في ChatGPT، واطلب منه:'),promptBox(PROMPTS[1])),
   step('3','كتابة إيميل تذكيري',h('p',null,'اطلبه من ChatGPT، واكتب له:'),promptBox(PROMPTS[2])),
   step('4','رسالة لينكدإن موجزة',h('p',null,'اطلبها من ChatGPT، واكتب له:'),promptBox(PROMPTS[3])),
   step('5','اجمعها في ملف PDF واحد',rp('اجمع الـ **CV** والـ **Cover Letter** في ملف PDF واحد، وسمّه **باسمك بالإنجليزي مع كلمة CV**.'),
    h('div',{class:'flow'},h('div',{class:'doc'},'CV'),h('span',null,'+'),h('div',{class:'doc'},'Cover Letter'),h('span',null,'←'),h('div',{class:'pdf'},h('div',null,h('b',null,fileName()),h('small',null,'CV + Cover Letter')))))),
  tip('نصيحة','راجع اللي يكتبه ChatGPT قبل ما تستخدمه: تأكد إن المعلومات صحيحة وتخصك، وعدّل أي شيء ما يمثلك.'),
  tip('جاهز للتقديم؟','الحين عندك: سيرة معدّلة، Cover Letter، إيميل تذكيري، رسالة لينكدإن، وملف PDF واحد. قدّم عن طريق **الإيميل** أو **لينكدإن** أو **مواقع الجهات**.','check'))],
 ['التقديم بالإيميل',()=>{
  const m=h('div',{class:'card mailmock'},h('div',{class:'mh'},h('i'),h('i'),h('i'),h('span',null,'New Message')),
   h('div',{class:'ml'},h('i',null,'To'),h('span',null,'hr@company.com')),h('div',{class:'ml'},h('i',null,'Subject'),h('span',null,'Application for Accounting Fresh Graduates Position (External Auditor)')),
   h('div',{class:'body'},h('p',{style:'margin:0 0 8px'},'Dear Hiring Team,'),h('span',{class:'ph'},'الصق الـ Cover Letter هنا'),h('br'),h('span',{class:'att'},'Ahmed Alqahtani CV.pdf')));
  const S1=['ضع **إيميل الشركة** في خانة **To (إلى)**.','اكتب **عنوان الإيميل** كالتالي: Application for Accounting Fresh Graduates Position (External Auditor)','**محتوى الإيميل:** انسخ الـ Cover Letter والصقه في نص الإيميل.','أرفق **ملف سيرتك الذاتية** (الملف اللي جمعت فيه الـ CV والـ Cover Letter).','أرسل الإيميل.','**بعد أسبوع:** أرسل الإيميل التذكيري **كرد (Reply)** على إيميلك السابق، وأرفق معه سيرتك الذاتية.'];
  return h('div',{class:'panel'},m,h('div',{class:'steps'},S1.map((x,i)=>step(String(i+1),'',rp(x)))),generator());
 }],
 ['التقديم عبر لينكدإن',()=>h('div',{class:'panel'},
  h('div',{class:'steps'},
   step('1','أضف الأشخاص المناسبين',rp('أضف **موظفي الموارد البشرية** و**موظفي القسم** اللي تستهدفه في الشركة.')),
   step('2','أرسل لهم رسالة في الخاص',rp('ادخل للخاص وأرسل لهم **رسالة لينكدإن** اللي جهزتها في خطوة التجهيز رقم 4، ولا تنس ترفق الـ **CV** معها.')),
   step('3','تابع بعد أسبوع',rp('ارجع بعد أسبوع وأرسل لهم **رسالة تذكيرية**.'))),
  h('div',{class:'tl3'},[['اليوم','إضافة الموظفين'],['اليوم','رسالة + CV'],['بعد أسبوع','رسالة تذكيرية']].map(([a,b])=>h('div',{class:'card'},h('b',null,a),b))),
  tip('لا تنس المتابعة','في الطريقتين، المتابعة بعد أسبوع تفرق: إيميل تذكيري كرد على إيميلك، ورسالة تذكيرية في لينكدإن. قسم **متابعة تقديماتي** ينبهك تلقائياً.','bell'))],
 ['مواقع الجهات',()=>h('div',{class:'panel'},
  rp('بعض الجهات يكون التقديم فيها عن طريق **مواقعها الإلكترونية**، وتعلن عن الفرص في **حساباتها**، أو تنتشر في **قروبات الفرص**.'),
  h('div',{class:'three'},[['globe','مواقع الجهات','قسم الوظائف والتدريب في موقع الجهة'],['bell','حسابات الجهات','تعلن فيها الجهات عن فتح التقديم'],['users','قروبات الفرص','تنتشر فيها الفرص بين الطلاب']].map(([i,a,b])=>h('div',{class:'card'},h('b',null,ic(i),a),h('p',null,b)))),
  h('div',{class:'steps'},
   step('1','تابع الجهات اللي تهمك',rp('ادخل مواقعها وتابع حساباتها **كل فترة**، وشوف إذا نزلت فرص جديدة أو لا.')),
   step('2','قدّم من موقع الجهة',rp('إذا لقيت فرصة، قدّم عليها من موقع الجهة وارفع ملفك اللي جهزته (**CV + Cover Letter**).')),
   step('★','مثال: شركات الـ Big 4',h('div',{class:'pills'},['Deloitte','PwC','EY','KPMG'].map(x=>h('span',{class:'pill'},x))),h('p',null,'ادخلوا مواقعهم كل فترة، وشوفوا إذا نزلت فرص أو لا.'),h('div',null,h('button',{class:'btn sm',type:'button',onclick:()=>{F.g=0;F.s='';F.n=24;drawDir();$('#employers').scrollIntoView({behavior:'smooth'})}},'اعرض مكاتب المحاسبة في الدليل')))),
  tip('نصيحة','فعّل التنبيهات في حسابات الجهات اللي تهمك، عشان توصلك الفرص أول بأول.','bell'))]
];
let aCur=0;
function drawA(){
 const n=$('#gnav');n.textContent='';
 AP.forEach((x,i)=>n.append(h('button',{type:'button',role:'tab','aria-selected':String(i===aCur),onclick:()=>{aCur=i;drawA()}},h('span',{class:'n'},i+1),x[0])));
 const p=$('#gpanel');p.textContent='';p.append(AP[aCur][1]());
}
drawA();

/* ---------- interview ---------- */
[['1','مقابلة الموارد البشرية','أسئلة شخصية عنك وعن جاهزيتك'],['2','اختبار تحريري','سهل إذا كانت أساسياتك قوية'],['3','المقابلة الفنية','مع مشرف المحاسبة أو المراجعة']].forEach(([n,a,b])=>$('#path').append(h('div',{class:'card rv'},h('span',{class:'num'},n),h('div',null,h('b',null,a),h('small',null,b)))));
const chev=()=>{const c=ic('down');c.classList.add('chev');return c};
const BADGE={'أصل':'a','التزام':'l','حقوق ملكية':'e'};
function blockEl(b){
 if(b.t==='p')return rich(h('p'),b.x);
 if(b.t==='en')return h('div',{class:'en'},b.x);
 if(b.t==='eq')return h('div',{class:'eq'},b.ar,h('small',null,b.en));
 if(b.t==='note')return rich(h('p',{class:'note'}),b.x);
 if(b.t==='trap')return rich(h('div',{class:'trap'}),b.x);
 if(b.t==='cmp')return h('div',{class:'cmp'},b.i.map(x=>h('div',null,h('h5',null,x.h,x.s?h('small',null,'('+x.s+')'):null),rich(h('p',{style:'margin:0'}),x.x))));
 if(b.t==='table'||b.t==='entry'){
  const w=h('div');if(b.h&&b.t==='entry')w.append(h('div',{class:'eh'},b.h));
  const hd=(b.t==='entry'?['البيان','مدين','دائن']:b.h).map(x=>h('th',null,x));
  const rows=(b.t==='entry'?b.rows:b.r).map(r=>h('tr',null,r.map((c,i)=>{const td=h('td');
   if(b.t==='entry'){if(i>0)td.className='nm2';if(i===0&&c.startsWith('إلى'))td.className='ind'}
   if(BADGE[c])td.append(h('span',{class:'bd2 '+BADGE[c]},c));else td.textContent=c;
   if(b.t==='table'&&/English|Statement|Notes to/.test(c)&&i===2){td.style.direction='ltr';td.style.textAlign='left'}
   return td})));
  w.append(h('div',{class:'tw'},h('table',null,h('thead',null,h('tr',null,hd)),h('tbody',null,rows))));
  if(b.n)w.append(rich(h('p',{class:'note',style:'margin-top:6px'}),b.n));
  return w}
 return h('div');
}
Q.forEach((q,i)=>{q.no=i+1;q.id=q.q;q._k=norm(q.q+' '+q.c+' '+JSON.stringify(q.b))});
let MS=new Set(store.get('mastered',[]).filter(x=>Q.some(q=>q.id===x)));
const saveMS=()=>{store.set('mastered',[...MS]);qprog()};
function qprog(){const n=MS.size;$('#qbar').style.width=(n/Q.length*100)+'%';$('#qprog').innerHTML='';$('#qprog').append('أتقنت ',h('b',null,n),' من ',h('b',null,Q.length))}
const CATS=['الكل',...new Set(Q.map(x=>x.c))];let qc='الكل',qun=0,mode='list';
function qchips(){const c=$('#qchips');c.textContent='';CATS.forEach(x=>{const n=x==='الكل'?Q.length:Q.filter(q=>q.c===x).length;c.append(h('button',{type:'button','aria-pressed':String(x===qc),onclick:()=>{qc=x;qchips();qdraw()}},x,h('i',null,n)))})}
function qfilter(){const t=norm($('#qq').value.trim()).split(/\s+/).filter(Boolean);return Q.filter(q=>(qc==='الكل'||q.c===qc)&&(!qun||!MS.has(q.id))&&t.every(w=>q._k.includes(w)))}
function mBtn(q,onch){const on=MS.has(q.id);const b=h('button',{class:'btn sm'+(on?' ok':''),type:'button'},ic('check','width:15px;height:15px'),on?'أتقنته':'علّمه كمُتقن');b.onclick=()=>{MS.has(q.id)?MS.delete(q.id):MS.add(q.id);saveMS();onch()};return b}
function qdraw(){
 qprog();const r=qfilter();$('#qcnt').innerHTML='';$('#qcnt').append(h('b',null,r.length),' سؤال');
 $('#lctl').hidden=mode!=='list';$('#ql').hidden=mode!=='list';$('#prac').hidden=mode!=='prac';
 if(mode==='prac'){pIdx=Math.min(pIdx,Math.max(r.length-1,0));drawPrac(r);return}
 const L=$('#ql');const open=new Set($$('#ql details[open]').map(d=>d.dataset.id));L.textContent='';
 if(!r.length){L.append(h('div',{class:'card empty'},ic('search'),h('b',null,'لا توجد أسئلة مطابقة'),'جرّب كلمة ثانية أو اختر «الكل».'));return}
 r.forEach(q=>{
  const d=h('details',{class:'card q'+(MS.has(q.id)?' m':''),'data-id':q.id});if(open.has(q.id))d.open=true;
  d.append(h('summary',null,h('span',{class:'qn'},MS.has(q.id)?ic('check','width:15px;height:15px'):q.no),h('span',{class:'qt'},q.q),h('span',{class:'qc'},q.c),chev()));
  const b=h('div',{class:'qb'},q.b.map(blockEl));b.append(h('div',{class:'qf'},mBtn(q,qdraw)));d.append(b);L.append(d);
 });
}
let pIdx=0,pShow=false,pOrder=null;
function drawPrac(r){
 const box=$('#prac');box.textContent='';
 if(pOrder){const ids=new Set(r.map(q=>q.id));pOrder=pOrder.filter(id=>ids.has(id));r=pOrder.map(id=>Q.find(q=>q.id===id))}
 if(!r.length){box.append(h('div',{class:'empty'},ic('check'),h('b',null,qun?'أتقنت كل الأسئلة هنا 👏':'لا توجد أسئلة'),qun?'ألغِ فلتر «غير المتقنة فقط» لمراجعة الكل.':'غيّر التصنيف أو البحث.'));return}
 const q=r[pIdx];
 const nav=(d)=>{pIdx=(pIdx+d+r.length)%r.length;pShow=false;drawPrac(r)};
 const shuf=h('button',{class:'btn sm ghost',type:'button',onclick:()=>{pOrder=r.map(q=>q.id).sort(()=>Math.random()-.5);pIdx=0;pShow=false;drawPrac(qfilter());toast('تم خلط الأسئلة')}},ic('shuffle','width:15px;height:15px'),'خلط');
 box.append(h('div',{class:'ph2'},h('span',{class:'cnt2'},'السؤال ',h('b',null,pIdx+1),' من ',r.length),h('div',{class:'btns'},shuf)));
 box.append(h('div',{class:'qbig'},h('span',{class:'qc'},q.c),h('h3',null,q.q)));
 const ans=h('div',{class:'ans'});if(pShow)ans.append(...q.b.map(blockEl));box.append(ans);
 const reveal=h('button',{class:'btn pri',type:'button',onclick:()=>{pShow=!pShow;drawPrac(r)}},ic('eye','width:16px;height:16px'),pShow?'إخفاء الإجابة':'اظهر الإجابة');
 box.append(h('div',{class:'pf'},
  h('button',{class:'btn',type:'button','aria-label':'السابق',onclick:()=>nav(-1)},ic('prev','width:16px;height:16px'),'السابق'),
  reveal,
  mBtn(q,()=>{drawPrac(qun?qfilter():r)}),
  h('button',{class:'btn',type:'button','aria-label':'التالي',onclick:()=>nav(1)},'التالي',ic('next','width:16px;height:16px'))));
 box.append(h('div',{class:'kb'},'اختصارات: ',h('kbd',null,'مسافة'),' لإظهار الإجابة · ',h('kbd',null,'←'),' ',h('kbd',null,'→'),' للتنقل · ',h('kbd',null,'M'),' متقن'));
 box._nav=nav;box._rev=()=>{pShow=!pShow;drawPrac(r)};box._m=()=>{MS.has(q.id)?MS.delete(q.id):MS.add(q.id);saveMS();drawPrac(qun?qfilter():r)};
}
document.addEventListener('keydown',e=>{
 if(mode!=='prac'||$('#prac').hidden||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||$('.ov'))return;
 const r=$('#interview').getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const b=$('#prac');
 if(e.key===' '){e.preventDefault();b._rev&&b._rev()}else if(e.key==='ArrowLeft'){b._nav&&b._nav(1)}else if(e.key==='ArrowRight'){b._nav&&b._nav(-1)}else if(e.key==='m'||e.key==='M'||e.key==='ة'){b._m&&b._m()}
});
$('#qq').addEventListener('input',()=>{pIdx=0;pShow=false;qdraw()});
$('#qunm').onclick=()=>{qun=qun?0:1;$('#qunm').setAttribute('aria-pressed',String(!!qun));pIdx=0;pShow=false;qdraw()};
$('#qopen').onclick=()=>$$('#ql details').forEach(d=>d.open=true);
$('#qclose').onclick=()=>$$('#ql details').forEach(d=>d.open=false);
$$('#qmode button').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('#qmode button').forEach(x=>x.setAttribute('aria-selected',String(x===b)));pShow=false;qdraw()});
qchips();qdraw();

/* ---------- tips + checklist ---------- */
['ركّز على **القوائم المالية** و**قائمة التدفقات النقدية** بالذات، وتصنيف البنود تحتها، لأنها انسألت كثير.','انتبه لفخ **المخصص والاحتياطي**، واسمع السؤال للآخر قبل ما تجاوب.','جهّز **تعريف نفسك بالإنجليزي** وتدرّب عليه بصوت عالي.','اقرأ عن **الجهة والمسمى** قبل المقابلة، واعرف كل شيء مكتوب في **سيرتك**.','تدرّب على **القيود الأساسية** (شراء، إهلاك، بيع أصل، مبيعات مع ضريبة) بالورقة والقلم، لأن بعض المقابلين يطلبونها كتابة.','المقابلات تختلف: **بعضها صعب وبعضها خفيف** حسب اللي يقابلك، فخلك هادي وواثق من أساسياتك.']
 .forEach((x,i)=>$('#tl').append(h('div',{class:'card tipc rv'},h('span',{class:'ti'},String(i+1).padStart(2,'0')),rich(h('p'),x))));
const CK=['جهّزت CV + Cover Letter في ملف PDF واحد باسمك','قرأت عن الجهة ونشاطها والمسمى اللي بتتدرب فيه','تدرّبت على «تكلّم عن نفسك» بالإنجليزي بصوت عالي','راجعت القوائم المالية وأسماءها بالإنجليزي','راجعت تصنيف بنود قائمة التدفقات النقدية','كتبت القيود الأساسية بالورقة والقلم','حفظت نسب الزكاة والضرائب في المملكة','جهّزت سؤالين تسألهم في نهاية المقابلة','جهّزت لبسك وتأكدت من الموقع أو رابط المقابلة'];
let CKS=new Set(store.get('check',[]));
function drawChk(){const c=$('#chk');c.textContent='';const n=CK.filter((_,i)=>CKS.has(i)).length;
 c.append(h('h4',null,ic('check'),'قائمة تجهيز المقابلة'),h('div',{class:'prg',style:'max-width:none'},h('div',{class:'tr'},h('i',{style:'width:'+(n/CK.length*100)+'%'})),h('span',null,h('b',null,n),' / '+CK.length)));
 CK.forEach((t,i)=>{const cb=h('input',{type:'checkbox'});cb.checked=CKS.has(i);cb.onchange=()=>{cb.checked?CKS.add(i):CKS.delete(i);store.set('check',[...CKS]);drawChk();if(CKS.size===CK.length)toast('جاهز للمقابلة! بالتوفيق 🤍')};c.append(h('label',null,cb,h('span',null,t)))});
}
drawChk();

/* ---------- command palette ---------- */
const SECS=[['employers','دليل الجهات','building'],['tracker','متابعة تقديماتي','kanban'],['apply','خطوات التقديم','send'],['interview','أسئلة المقابلات','cards'],['tips','نصائح وقائمة التجهيز','bulb']];
let pal=null;
function openPal(){
 if(pal)return;let sel=0,items=[];
 const inp=h('input',{type:'search',placeholder:'ابحث عن جهة أو سؤال أو قسم…','aria-label':'بحث سريع',autocomplete:'off'});
 const res=h('div',{class:'pr',role:'listbox'});
 const close=()=>{pal.remove();pal=null;document.body.style.overflow=''};
 pal=h('div',{class:'ov',onclick:e=>{if(e.target===pal)close()}},h('div',{class:'pal',role:'dialog','aria-modal':'true','aria-label':'بحث سريع'},h('div',{class:'pi'},ic('search'),inp,h('kbd',null,'Esc')),res));
 const go=it=>{close();it.run()};
 function render(){
  const v=inp.value.trim(),t=norm(v).split(/\s+/).filter(Boolean);res.textContent='';items=[];
  const add=(grp,list)=>{if(!list.length)return;res.append(h('div',{class:'grp'},grp));list.forEach(it=>{const i=items.length;const b=h('button',{class:'it',type:'button',role:'option',onmouseenter:()=>{sel=i;mark()},onclick:()=>go(it)},ic(it.i),h('span',{style:'min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap'},it.t),it.m?h('span',{class:'m'},it.m):null);items.push(Object.assign(it,{el:b}));res.append(b)})};
  add('الأقسام',SECS.filter(s=>!t.length||t.every(w=>norm(s[1]).includes(w))).map(s=>({t:s[1],i:s[2],run:()=>$('#'+s[0]).scrollIntoView({behavior:'smooth'})})));
  if(t.length){
   add('الجهات',D.filter(d=>t.every(w=>d._k.includes(w))).slice(0,7).map(d=>({t:d.n,i:GI[d.g],m:d.s,run:()=>focusEmp(d)})));
   add('أسئلة المقابلات',Q.filter(q=>t.every(w=>q._k.includes(w))).slice(0,6).map(q=>({t:q.q,i:'cards',m:q.c,run:()=>openQ(q)})));
  }
  if(!items.length)res.append(h('div',{class:'pe'},'لا توجد نتائج'));
  sel=Math.min(sel,items.length-1);if(sel<0)sel=0;mark();
 }
 function mark(){items.forEach((it,i)=>it.el.classList.toggle('on',i===sel));items[sel]&&items[sel].el.scrollIntoView({block:'nearest'})}
 inp.addEventListener('input',()=>{sel=0;render()});
 inp.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%Math.max(items.length,1);mark()}else if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+items.length)%Math.max(items.length,1);mark()}else if(e.key==='Enter'){e.preventDefault();items[sel]&&go(items[sel])}else if(e.key==='Escape')close()});
 document.body.append(pal);document.body.style.overflow='hidden';render();inp.focus();
}
function openQ(q){
 mode='list';$$('#qmode button').forEach(x=>x.setAttribute('aria-selected',String(x.dataset.m==='list')));qc='الكل';qun=0;$('#qunm').setAttribute('aria-pressed','false');$('#qq').value='';qchips();qdraw();
 const d=$$('#ql details').find(x=>x.dataset.id===q.id);if(d){d.open=true;d.scrollIntoView({behavior:'smooth',block:'center'})}
}
$('#openPal').onclick=openPal;
document.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&(e.key==='k'||e.key==='K'||e.key==='ن')){e.preventDefault();openPal()}
 else if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();openPal()}
});

/* ---------- scroll ui ---------- */
const prog=$('#prog'),top=$('#top');
let ticking=false;
addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const s=scrollY,m=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(m>0?s/m:0)+')';top.classList.toggle('on',s>900);ticking=false})},{passive:true});
top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const links=$$('nav.main a');
try{
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -60% 0px'});
 ['employers','tracker','apply','interview','tips'].forEach(id=>io.observe($('#'+id)));
 const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
 $$('.rv').forEach(el=>rv.observe(el));
}catch(e){$$('.rv').forEach(el=>el.classList.add('in'))}
})();
