function capital(capitals){
  //...
  return capitals.map(entry => {
    const location = entry.state || entry.country;
    return `The capital of ${location} is ${entry.capital}`;
  });
}