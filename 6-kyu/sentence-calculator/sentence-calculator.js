function lettersToNumbers(s) {
  // your code......
  return s.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        }
        else if (char >= 'A' && char <= 'Z') {
            return 2 * (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
        }
        else if (char >= '0' && char <= '9') {
            return Number(char);
        }
        else {
            return 0;
        }
    }).reduce((sum, score) => sum + score, 0);
}
​