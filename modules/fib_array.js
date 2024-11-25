const fib_array = (n) => {
  let cache = [0, 1];
  const fib = (n) => {
    let result = cache[n];
    if (typeof result !== "number") {
      result = fib(n - 1) + fib(n - 2);
      cache[n] = result;
    }
    return result;
  };
  return fib(n);
};

export default fib_array;
