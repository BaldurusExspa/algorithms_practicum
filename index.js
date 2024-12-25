import inquirer from "inquirer";
import startApp from "./lib/startApp.js";
import { colors } from "./terminal_colors.js";

// List of function modules
const actionList = [
  {
    name: "Simple Encoder",
    value: "sim_encoder",
    module: "./module/encoder.js",
  },
  {
    name: "Optimized Encoder",
    value: "opt_encoder",
    module: "./module/optimizedEncoder.js",
  }
];

// Function for find module on answer value
const findActionByValue = (actVal) => {
  return actionList.find((item) => item.value == actVal);
};

// Library inquirer for create terminal interfaces
inquirer
  .prompt([
    {
      type: "rawlist",
      name: "actionChoice",
      message: "What action you need?",
      choices: [...actionList],
    },
    {
      type: "input",
      name: "user_input",
      message: "Write the word to be encoded:",
      default: "abracadabra",
    },
  ])
  .then((answers) => {
    // Find action for terminal answer
    const action = findActionByValue(answers.actionChoice);
    const color = colors();

    // Imported needed module
    import(action.module).then(module => {
      // Interaction with selected module
      const start = startApp(module.default, answers.user_input)

      // Result output
      console.log(
        `${color.white}As a result of your choice, this text came out: ${
          color.green
        }${start.output}${color.reset}`)
        console.log(" ");
    })
  });
