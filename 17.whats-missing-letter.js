// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

// If there are no missing letters in the string, return "No Missing Letter".

const missingLetter = (string = "") => {
  const stringArr = Array.from(string);
  const engAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const letterBegin = string[0];
  const letterEnd = string[string.length - 1];

  const indexOfLetterBegin = engAlphabet.indexOf(letterBegin);
  const indexOfLetterEnd = engAlphabet.indexOf(letterEnd);

  for (let i = indexOfLetterBegin, j = 0; i <= indexOfLetterEnd; i++, j++) {
    if (stringArr[j] !== engAlphabet[i]) return engAlphabet[i];
  }

  return "No Missing Letter";
};

export default missingLetter;
