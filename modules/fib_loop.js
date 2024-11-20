const fib = (n) => {
  let prev = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next += prev;
    prev = temp;
  }
  return prev;
};

export default fib;