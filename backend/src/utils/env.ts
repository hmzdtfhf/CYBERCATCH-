import 'dotenv/config'; import {z} from 'zod';
const schema=z.object({PORT:z.coerce.number().default(4000),NODE_ENV:z.enum(['development','test','production']).default('development'),CORS_ORIGIN:z.string().default('http://localhost:5173'),AWS_REGION:z.string().default('ap-south-1'),AWS_DEMO_MODE:z.string().default('true').transform(v=>v==='true'),LAB_INSTANCE_IDS:z.string().default('lab-instance'),ADMIN_API_TOKEN:z.string().default('local-demo')});
export const env=schema.parse(process.env); export const allowedIds=env.LAB_INSTANCE_IDS.split(',').map(x=>x.trim());
