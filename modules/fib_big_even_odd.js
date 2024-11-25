const fib_eo = (n) => {
  let prev = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next += prev;
    prev = temp;
  }
  // String(prev.slise(-1))
  const lastNumber = String(prev).slice(-1);
  if (+lastNumber % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

export default fib_eo;
