import { colors } from "../terminal_colors.js";

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

  const color = colors();

  console.log(`${color.green}${resultWord}${color.reset}`);
  console.log(" ");

  return resultWord;
};

decoder(
  "100011110001001101000111111011001010011000010110011010111110",
  {
    " ": "1011",
    ".": "1110",
    D: "1000",
    c: "000",
    d: "001",
    e: "1001",
    i: "010",
    m: "1100",
    n: "1010",
    o: "1111",
    s: "011",
    u: "1101",
  }
);
