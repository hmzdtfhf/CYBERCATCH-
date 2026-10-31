import {describe,it,expect} from 'vitest';import {app} from './server.js';describe('health',()=>it('is registered',()=>expect(app).toBeDefined()));
