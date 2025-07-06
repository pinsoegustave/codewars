function range(...args) {
  let start, step, stop;
​
  if (args.length === 1) {
    [stop] = args;
    start = 1;
    step = 1;
  } else if (args.length === 2) {
    [start, stop] = args;
    step = 1;
  } else if (args.length === 3) {
    [start, step, stop] = args;
  } else {
    throw new Error("function accepts 1 to 3 arguments");
  }
​
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current > stop) {
            return { done: true };
          }
          const value = current;
          current += step;
          return { value, done: false };
        }
      };
    }
  };
}
​