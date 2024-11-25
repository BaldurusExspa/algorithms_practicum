import Benchmark from "benchmark";

export const benchmark = (func) => {
  // Output parameters
  const b = {};

  const start = performance.now();
  func;
  const end = performance.now();

  // Benchmark from library "Benchmark.js"
  let bench = new Benchmark(func);

  // Parameter for call atribute outside the function 
  b.output = func;
  // Parameter for call work time the atribute function
  b.hrtime = end - start;
  // Pararmetr for call work time the atribute function with library benchmark
  b.bench = bench;
  return b;
};
