import {Router} from 'express';import {z} from 'zod';import {change,instances} from '../services/aws.js';import {audit} from '../services/audit.js';
export const awsRouter=Router();const id=z.string().regex(/^(i-[a-f0-9]{8,17}|lab-instance)$/);
awsRouter.get('/health',async(_q,r,n)=>{try{r.json({ok:true,...await instances()})}catch(e){n(e)}});
awsRouter.get('/instances',async(_q,r,n)=>{try{r.json(await instances())}catch(e){n(e)}});
awsRouter.get('/instances/:instanceId',async(q,r,n)=>{try{const instanceId=id.parse(q.params.instanceId);const all=await instances();r.json({instance:all.instances.find(x=>x.id===instanceId)||null,mode:all.mode})}catch(e){n(e)}});
for(const action of ['start','stop'] as const)awsRouter.post(`/instances/:instanceId/${action}`,async(q,r,n)=>{try{const instanceId=id.parse(q.params.instanceId);const result=await change(instanceId,action);audit(`ec2.${action}`,{instanceId,mode:result.mode});r.json(result)}catch(e){n(e)}});
