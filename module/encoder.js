const encoderHuffman = (wordForCoding) => {
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
    const codedBinaryObj = {};
    let temp = "1";
    let sliceWord = str.slice(1);

    codedBinaryObj[str[0]] = "0";

    const encoding = (word) => {
      if (word.length === 1) {
        codedBinaryObj[word] = temp;
      } else {
        codedBinaryObj[word[0]] = temp + "1";
        temp += "0";
        encoding(word.slice(1));
      }
    };

    encoding(sliceWord);

    return codedBinaryObj;
  };

  // Genetal function, who take all wtidet
  const sliceWordOnSymbols = (str) => {
    // Split string to array
    const splitString = str.split(""); // ['E', 'r', 'r', 'a', 'r', 'e' ' ', 'h', 'u', 'm', 'a', 'n', 'u', 'm', 'e', 's', 't', '.']
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

    return binaryCode;
  };

  return sliceWordOnSymbols(wordForCoding);
};

export default encoderHuffman;
