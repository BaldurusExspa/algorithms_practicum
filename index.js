import inquirer from "inquirer";
import { benchmark } from "./benchmark.js";

const testNum = 12;
// const resultBench = benchmark(fib(testNum));
// const resultFunc = fib(testNum);

const answers_list = [
    {
        name: 'Naive recursive algorithm',
        value: 'fib_recursive',
        module: './modules/fib_recursive.js'
    },
    {
        name: 'Classic iteractive  algorithm',
        value: 'fib_loop',
        module: './modules/fib_loop.js'
    }
]

inquirer
  .prompt([
    {
      type: "rawlist",
      name: "algorithm",
      message: "What algorithm you need?",
      choices: [
        ...answers_list
      ]
    },
    {
      type: 'number',
      name: 'Number',
      message: 'Your number:'
    }
  ])
  .then((answers) => {
    console.info("Answer:", answers);
  });
