export function audit(action:string, detail:Record<string,unknown>={}){console.info(JSON.stringify({event:'admin_operation',action,detail,time:new Date().toISOString()}));}
