function cookie(x){
  // ....
  const firstSen = "Who ate the last cookie? It was "
  const sentence = "ate the cookie"
  
//   if (typeof(x) === String) {
//     return firstSen+"Zach!"
//   } else if (typeof(x) === Number) {
//     return firstSen+" Monica!"+sentence
//   } else {
//     return firstSen+"the dog!"
//   }
  
  return typeof(x) === "string" ? firstSen+"Zach!" : typeof(x) === "number" ? firstSen+"Monica!" : firstSen+"the dog!";
}