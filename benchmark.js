export const benchmark = (func) => {
  var start = performance.now();
  func;
  var end = performance.now();
  var time = end - start;
  return time;
};

// export default benchmark;
