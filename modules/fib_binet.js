const fib = (n) => {
  const a = (1 + 5 ** 0.5) / 2;
  const b = (1 - 5 ** 0.5) / 2;
  return (a ** n - b ** n) / 5 ** 0.5;
};

export default fib;
