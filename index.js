import inquirer from "inquirer";
import encoderHuffman from "./module/encoder.js";
import { colors } from "./terminal_colors.js";

const actionList = [
  {
    name: "Encoder",
    value: "encoder",
  },
];

const findActionByValue = (actVal) => {
  return actionList.find((item) => item.value == actVal);
};

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
    let action = findActionByValue(answers.actionChoice);
    let color = colors();

    if (action.value === "encoder") {
      console.log(" ");
      console.log(
        `${color.white}As a result of your choice, this text came out: ${
          color.green
        }${encoderHuffman(answers.user_input)}${color.reset}`
      );
    }
  });
