export function findNeedle(haystack: any[]):string {
  // Good luck!
  const target = "needle"
  const index = haystack.indexOf(target);
  
  return `found the needle at position ${index}`
}