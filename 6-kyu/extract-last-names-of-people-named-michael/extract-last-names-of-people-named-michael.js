function getMichaelLastName(inputText) {
  const words = inputText.split(/\s+/);
  const result = [];
  
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === "Michael") {
      const next = words[i + 1].replace(/[^A-Za-z]/g, '')
      
      if (/^[A-Z][a-z]+$/.test(next)) {
        result.push(next);
      }
    }
  }
  return result;
}