import {describe,it,expect} from 'vitest';
import {vulnerabilities} from './vulnerabilities';

describe('vulnerability documentation',()=>{
  it('contains the three required educational topics',()=>{
    expect(vulnerabilities.map(v=>v.slug)).toEqual(['sql-injection','cross-site-scripting','command-injection']);
  });
  it('includes a secure remediation for every topic',()=>{
    expect(vulnerabilities.every(v=>v.remediation.length>20 && v.code.length>10)).toBe(true);
  });
});
