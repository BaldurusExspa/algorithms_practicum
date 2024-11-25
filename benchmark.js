import Benchmark from "benchmark";

export const benchmark = (func, ...args) => {
  // Output parameters
  const b = {};

  // The imperative method of benchmark
  const start = performance.now();
  const output = func(...args);
  const end = performance.now();

  // The declarative method of benchmark
  let bench = new Benchmark(func(...args));

  // Parameter for call atribute outside the function 
  b.output = output;
  // Parameter for call work time the atribute function
  b.hrtime = end - start;
  // Pararmetr for call work time the atribute function with library benchmark
  b.bench = bench;
  return b;
};
