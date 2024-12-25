const decoderHuffman = (alfabet, word) => {
  let resultWord = "";

  const decoder = word.reduce((acc, element) => {
    acc += element;
    for (value of alfabet) {
      if (element === value) {
        resultWord += value;
      }
    }
  }, "");

  return resultWord;
};

decoderHuffman({
  ' ': '0',
  u: '1000',
  m: '1001',
  E: '1010',
  h: '10110',
  n: '10111',
  s: '1100',
  t: '11010',
  '.': '11011',
  r: '1110',
  a: '11110',
  e: '11111'
}, "101011101110111101110111110101101000100111110101111000100101111111001101011011")
