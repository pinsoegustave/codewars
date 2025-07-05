export const summation = (num:number)=> { 
//   throw new Error('The method or operation is not implemented.')
  
  let sum = 0;
  
  for (let i=1; i <= num; i++) {
    sum += i
  }
  
  return sum
}