function arrayDiff(a, b) {
  return a.filter(c => !b.includes(c)); 
}