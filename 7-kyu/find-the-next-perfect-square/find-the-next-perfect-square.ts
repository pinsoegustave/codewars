export function findNextSquare(sq:number):number {
  // Return the next square if sq is a perfect square, -1 otherwise
  const sqrt = Math.sqrt(sq);
  
  if(Number.isInteger(sqrt)) {
    const nextSquare = Math.pow(sqrt + 1, 2)
    return nextSquare
  }
  else {
    return -1;
  }
  
}