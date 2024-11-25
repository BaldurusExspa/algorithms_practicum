import inquirer from "inquirer";
import { colors } from "./terminal_colors.js";
import { benchmark } from "./benchmark.js";

// Array of algorithms objects
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
  return algorithms_list.find((item) => item.value === algVal);
};

// Library inquirer for create terminal interfaces
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
    // Find algorithm for terminal answer
    let alg = findAlgByVal(answers.algorithm);

    // Imopting needed module
    import(alg.module).then(module => {
      let result = benchmark(module.default(answers.Number));
      let color = colors();
      console.log(`The resul number is ${color.red}${result.output}${color.reset}, found in ${color.red}${result.bench}${color.reset} seconds.`);
    });
  });
