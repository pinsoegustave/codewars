export function friend(friends: string[]): string[] { 
  //your code here
  return friends.filter(name => name.length == 4);
}