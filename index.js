import fib from "./modules/fib_loop.js";
// import { fib as fib_recursive} from "./modules/fib_recursive.js";
import { benchmark } from "./benchmark.js";

const testNum = 12;
const resultBench = benchmark(fib(testNum));
const resultFunc = fib(testNum);

console.log(`Получилось число: ${resultFunc}; Время нахождения этого числа = ${resultBench};`);
