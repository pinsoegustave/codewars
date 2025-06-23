export function isReallyNaN(val: any): boolean {
  
  if (val === undefined) return false
  
  return Number.isNaN(val);  // wasn't working as planned 
  
  return true || false;
};