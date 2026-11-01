const base=import.meta.env.VITE_API_URL||'/api';
export async function api(path:string, init:RequestInit={}){const r=await fetch(base+path,{...init,headers:{'Content-Type':'application/json','x-demo-token':'local-demo',...(init.headers||{})}});if(!r.ok)throw new Error((await r.json().catch(()=>({message:r.statusText}))).message);return r.json()}
