import inquirer from "inquirer";
import { benchmark } from "./benchmark.js";

const algorithms_list = [
  {
    name: "Naive recursive algorithm",
    value: "fib_recursive",
    module: "./modules/fib_recursive.js",
  },
  {
    name: "Classic iteractive  algorithm",
    value: "fib_loop",
    module: "./modules/fib_loop.js",
  },
];

function findAlgByVal(algVal) {
  return algorithms_list.find((x) => x.value === algVal);
};

inquirer
  .prompt([
    {
      type: "rawlist",
      name: "algorithm",
      message: "What algorithm you need?",
      choices: [...algorithms_list],
    },
    {
      type: "number",
      name: "Number",
      message: "Your number:",
      default: "10",
    },
  ])
  .then((answers) => {
    let alg = findAlgByVal(answers.algorithm);

    import(alg.module).then(module => {
      let result = benchmark(module.default(answers.Number));
      console.log(`The resul number is ${result.output}, found in ${result.hrtime} seconds.`);
    });
  });
