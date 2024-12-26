// import inquirer from "inquirer";
// import { colors } from "../terminal_colors.js";

const decoder = (word, alphabet) => {
  let resultWord = "";
  const splitWord = word.split("");

  // Get keys by value
  const getsKeysByValue = (obj, val) => {
    return Object.keys(obj).find((key) => obj[key] === val);
  };

  splitWord.reduce((acc, element) => {
    acc += element;
    if (getsKeysByValue(alphabet, acc) !== undefined) {
      resultWord += getsKeysByValue(alphabet, acc);
      acc = "";
    }
    return acc;
  }, "");

  console.log(resultWord);
  console.log(" ");

  return resultWord;
};

decoder(
  "101011101110111101110111110101101000100111110101111000100101111111001101011011",
  {
    " ": "0",
    u: "1000",
    m: "1001",
    E: "1010",
    h: "10110",
    n: "10111",
    s: "1100",
    t: "11010",
    ".": "11011",
    r: "1110",
    a: "11110",
    e: "11111",
  }
);

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "word_input",
//       message: "What decoding word you need?",
//     },
//     {
//       type: "input",
//       name: "alphabet_input",
//       message: "What decoding alphabet you use?",
//     },
//   ])
//   .then((answers) => {
//     // Terminal colors
//     const color = colors();

//     // Result output
//     console.log(
//       `${color.white}As result of your data input, this phrase came out: ${
//         color.green
//       }${decoder(answers.word_input, answers.alphabet_input)}${color.reset}`
//     );
//     console.log("");
//   });
