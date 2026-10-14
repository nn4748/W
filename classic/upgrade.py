"""Takes the original coop-accounting page and adds speed + motion without changing its look."""
import re,sys
src,out=sys.argv[1],sys.argv[2]
h=open(src,encoding='utf8').read()

# 1) strip netlify wrapper head + hud script, keep main style and body
main_css=re.search(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]+>\s*<style>(.*?)</style>',h,re.S)
body_start=h.index('<header class="top">')
body=h[body_start:]
body=re.sub(r'</body></html><script async src="/\.netlify/scripts/hud[^<]*</script>\s*$','',body.strip())
body=re.sub(r'</body></html>\s*$','',body)
fonts=re.search(r'<link rel="stylesheet" href="(https://fonts.googleapis.com[^"]+)">',h).group(1)

EXTRA_CSS=r'''
/* ===== enhancements: motion & speed (look unchanged) ===== */
:root{--ease:cubic-bezier(.22,1,.36,1)}
#prog{position:fixed;top:0;inset-inline:0;height:3px;z-index:60;background:linear-gradient(90deg,#c8963a,#e8c27b);transform-origin:right;transform:scaleX(0);pointer-events:none}
body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.chip,.more,a.lk,.em button,.prompt button,#theme,nav.sec a,.hres button,details.q summary,.tog label{transition:background-color .25s var(--ease),color .25s var(--ease),border-color .25s var(--ease),transform .3s var(--ease),box-shadow .3s var(--ease)}
.chip:active,.more:active,a.lk:active,.em button:active,.prompt button:active,#theme:active{transform:scale(.95)}
.chip:not(.on):hover{border-color:var(--accent)}
.more:hover{background:var(--accent);color:var(--accent-fg)}
.row,.step,.tip,details.q,.mail,.tl div,.doc{transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s var(--ease)}
@media (hover:hover){.row:hover,.step:hover,details.q:hover{transform:translateY(-2px);box-shadow:0 10px 26px -14px #0b1f4655;border-color:color-mix(in srgb,var(--accent) 35%,var(--line))}}
.row.in{animation:rowIn .5s var(--ease) both}
@keyframes rowIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
details.q[open] .qb{animation:qOpen .4s var(--ease) both}
@keyframes qOpen{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
details.q summary .qi{transition:transform .35s var(--ease)}
details.q[open] summary .qi{transform:rotate(-8deg) scale(1.08)}
#apanels>*{animation:panelIn .45s var(--ease) both}
@keyframes panelIn{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:none}}
.hres:not([hidden]){animation:drop .25s var(--ease) both}
@keyframes drop{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.hero .in>div>*{animation:heroIn .8s var(--ease) both}
.hero .in>div>*:nth-child(2){animation-delay:.06s}.hero .in>div>*:nth-child(3){animation-delay:.12s}.hero .in>div>*:nth-child(4){animation-delay:.18s}.hero .in>div>*:nth-child(5){animation-delay:.24s}.hero .in>div>*:nth-child(6){animation-delay:.3s}.hero .in>div>*:nth-child(7){animation-delay:.36s}.hero .in>div>*:nth-child(8){animation-delay:.42s}
.hero .mascot{animation:heroIn 1s .2s var(--ease) both,float 6s 1.2s ease-in-out infinite}
@keyframes heroIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.js .rv{opacity:0;transform:translateY(18px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
.js .rv.vis{opacity:1;transform:none}
.st::after{transform-origin:left;transition:transform 1.1s .15s var(--ease)}
.js .st.rv:not(.vis)::after{transform:scaleX(0)}
#totop{position:fixed;bottom:18px;left:18px;z-index:30;width:44px;height:44px;border-radius:50%;border:1px solid #ffffff33;background:var(--navy);color:#e8c27b;font-size:20px;font-weight:800;display:grid;place-items:center;box-shadow:0 8px 22px #0006;opacity:0;transform:translateY(12px) scale(.9);pointer-events:none;transition:opacity .3s var(--ease),transform .4s var(--ease)}
#totop.on{opacity:1;transform:none;pointer-events:auto}
::view-transition-old(root),::view-transition-new(root){animation:none;mix-blend-mode:normal}
#employers,#apply,#interview,#tips,footer{content-visibility:auto;contain-intrinsic-size:auto 900px}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.js .rv{opacity:1;transform:none}}
'''

EXTRA_JS=r'''
<script>
(()=>{
const $=id=>document.getElementById(id),root=document.documentElement;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* theme: remember choice + circular reveal */
const tb=$('theme');
const dark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
const lbl=()=>{tb.textContent=dark()?'☀️ فاتح':'🌙 داكن';const m=document.querySelector('meta[name=theme-color]');if(m)m.content=dark()?'#07132b':'#0b1f46'};
const flip=()=>{root.dataset.theme=dark()?'light':'dark';try{localStorage.setItem('coop-theme',root.dataset.theme)}catch(e){}lbl()};
tb.onclick=e=>{
 if(!document.startViewTransition||RM)return flip();
 const x=e.clientX||innerWidth/2,y=e.clientY||40,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
 document.startViewTransition(flip).ready.then(()=>root.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:600,easing:'cubic-bezier(.22,1,.36,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{});
};
lbl();
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',lbl)}catch(e){}

/* animate newly rendered directory rows only */
const dl=$('dl');let seen=0;
new MutationObserver(()=>{const rows=dl.querySelectorAll('.row');const start=rows.length>seen&&seen>0&&dl.dataset.more?seen:0;
 rows.forEach((r,i)=>{if(i>=start&&!RM){r.classList.add('in');r.style.animationDelay=Math.min(i-start,14)*28+'ms'}});seen=rows.length;dl.dataset.more=''}).observe(dl,{childList:true});
$('more').addEventListener('click',()=>{dl.dataset.more='1'},true);
$('dq').addEventListener('input',()=>{seen=0},true);

/* stats count-up */
if(!RM)document.querySelectorAll('#stats b').forEach(b=>{const n=+b.textContent;if(!n)return;const t0=performance.now();b.textContent='0';
 const f=t=>{const p=Math.min(1,(t-t0)/1100);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});

/* reveal on scroll */
root.classList.add('js');
const rv=document.querySelectorAll('section .st,section .lead,.path>.step,.tips>.tip,footer .wrap>*');
try{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px'});
 rv.forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(el.parentElement.matches('.path,.tips')?[...el.parentElement.children].indexOf(el)*70:0)+'ms';io.observe(el)})}catch(e){rv.forEach(el=>el.classList.add('vis'))}

/* progress bar + back to top */
const pg=$('prog'),tt=$('totop');let tk=0;
addEventListener('scroll',()=>{if(tk)return;tk=1;requestAnimationFrame(()=>{const m=document.documentElement.scrollHeight-innerHeight;pg.style.transform=`scaleX(${m>0?scrollY/m:0})`;tt.classList.toggle('on',scrollY>700);tk=0})},{passive:true});
tt.onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});

/* copy fallback for older browsers / non-https */
if(!navigator.clipboard){navigator.clipboard={writeText:t=>new Promise((ok,no)=>{const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.append(a);a.select();const r=document.execCommand('copy');a.remove();r?ok():no()})}}

/* keyboard: "/" focuses directory search */
addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();$('employers').scrollIntoView({behavior:RM?'auto':'smooth'});setTimeout(()=>$('dq').focus({preventScroll:true}),350)}});
})();
</script>'''

HEAD=f'''<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>منصة التدريب التعاوني للمحاسبين</title>
<meta name="description" content="دليل جهات التدريب التعاوني لطلاب المحاسبة بالإيميلات وروابط التقديم، خطوات التقديم، وبنك أسئلة المقابلات بإجاباتها.">
<meta name="theme-color" content="#0b1f46">
<meta property="og:title" content="منصة التدريب التعاوني للمحاسبين">
<meta property="og:description" content="كل ما يحتاجه طالب المحاسبة للتدريب التعاوني، في مكان واحد.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{fonts}">
<script>try{{var t=localStorage.getItem('coop-theme');if(t)document.documentElement.dataset.theme=t}}catch(e){{}}</script>
<style>{main_css.group(1)}{EXTRA_CSS}</style>
</head>
<body>
<div id="prog" aria-hidden="true"></div>
'''
body=body.replace('<img class="mascot"','<img class="mascot" fetchpriority="high"')
body=re.sub(r'<img (?!class="mascot")','<img decoding="async" ',body)
# theme handled by enhancement script; neutralize original handler line so it doesn't double toggle
old="tb.onclick=()=>{root.dataset.theme=isDark()?'light':'dark';lbl()};lbl();"
assert old in body; body=body.replace(old,"lbl();")
TAIL='\n<button id="totop" type="button" aria-label="العودة للأعلى">↑</button>'+EXTRA_JS+'\n</body>\n</html>\n'
open(out,'w',encoding='utf8').write(HEAD+body+TAIL)
print(len(HEAD+body+TAIL))
