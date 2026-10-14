import base64,json,sys,os
B=os.path.dirname(os.path.abspath(__file__))
s=open(B+'/template.html',encoding='utf8').read()
def img(n): return 'data:image/png;base64,'+base64.b64encode(open(f'{B}/{n}.png','rb').read()).decode()
D=json.load(open(B+'/D.json')); Q=json.load(open(B+'/Q.json'))
js=lambda o: json.dumps(o,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
for k,v in {'__IMG_CLUB__':img('club'),'__IMG_UNI__':img('uni'),'__IMG_COOP__':img('coop'),'__IMG_BOT__':img('bot'),'__D__':js(D),'__Q__':js(Q)}.items():
    s=s.replace(k,v)
out=sys.argv[1]; os.makedirs(out,exist_ok=True)
open(out+'/index.html','w',encoding='utf8').write(s)
print(len(s.encode()))
