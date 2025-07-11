function scoreboard(string) {
  // code here!
  const getWord = string.split(" ");
  const complement = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "nil": 0
  }
  const getNum = getWord.map(e => complement[e]).filter(word => word !== undefined)
  return getNum;
}