const encoderHuffmanOptimized = (wordForCoding) => {
  // Sort result object of symbols
  const sortObject = (obj) =>
    Object.entries(obj)
      .sort(([, a], [, b]) => a - b)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  // Merge all keys and values on one knot
  const createGeneralKnot = (object) => {
    if (Object.keys(object).length === 1) {
      return Object.keys(object)[0];
    }
    const firstKnotName = Object.keys(object)[0];
    const secondKnotName = Object.keys(object)[1];
    // Create new key
    object[firstKnotName + secondKnotName] =
      object[firstKnotName] + object[secondKnotName];
    // Delete old keys
    delete object[firstKnotName];
    delete object[secondKnotName];
    // Sorted result object
    const sorted = sortObject(object);
    // Return recursive function
    return createGeneralKnot(sorted);
  };

  // Coding init word with binary alphabet
  const codingAlphabet = (arr, alp) => {
    return arr.reduce((acc, element) => {
      acc += alp[element];
      return acc;
    }, "");
  };

  // Create alphabet for coding
  const codingSymbolsBinary = (str) => {
    // Result tree (object)
    const codedBinaryObj = {};
    const sliceWord = str.slice(1);
    // First knot
    codedBinaryObj[str[0]] = "0";

    // Create tree for knot
    const encoding = (word, branch) => {
      if (word.length === 1) {
        codedBinaryObj[word] = branch;
      } else {
        const lowerHalfWord = Math.floor(word.length / 2);
        const firstPartWord = word.slice(0, lowerHalfWord);
        const secondPartWord = word.slice(lowerHalfWord);
  
        encoding(firstPartWord, branch + "0");
        encoding(secondPartWord, branch + "1");
      }
    };
    encoding(sliceWord, "1");

    return codedBinaryObj;
  };

  // Genetal function, who take all wtidet
  const sliceWordOnSymbols = (str) => {
    // Split string to array
    const splitString = str.split("");
    // Count times every symbol met in array
    const codedSymbols = splitString.reduce((acc, element) => {
      const count = acc[element] || 0;
      return {
        ...acc,
        [element]: count + 1,
      };
    }, {});
    const sortedObj = sortObject(codedSymbols);

    const knot = createGeneralKnot(sortedObj);

    const alphabet = codingSymbolsBinary(knot);

    const binaryCode = codingAlphabet(splitString, alphabet);

    console.log(" ");
    console.log(alphabet);

    return binaryCode;
  };

  return sliceWordOnSymbols(wordForCoding);
};

export default encoderHuffmanOptimized;