// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

const jazzify = (arr = [], number = 7) => {
  return arr.map((elem) =>
    elem.endsWith(number) ? elem : elem.concat(number)
  );
};

export default jazzify
