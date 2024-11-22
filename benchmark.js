export const benchmark = (func) => {
  const b = {};
  const start = performance.now();
  func;
  const end = performance.now();
  b.output = func;
  b.hrtime = end - start;
  return b;
};
