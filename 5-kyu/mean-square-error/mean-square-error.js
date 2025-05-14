const solution = function(firstArray, secondArray) {
  let total = 0;
  const newArr = [];
​
  for (let i = 0; i < firstArray.length; i++ ) {
    const diff = Math.abs(firstArray[i] - secondArray[i]);
​
    total += diff * diff;
  }
​
  return total / firstArray.length; 
}