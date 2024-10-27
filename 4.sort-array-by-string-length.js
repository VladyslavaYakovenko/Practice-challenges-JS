// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
const sortFunc = (elem1, elem2) => {
  return elem1.length - elem2.length;
};

const sortByLength = (arrayOfStrings = []) => {
  return arrayOfStrings.sort(sortFunc);
};

export default sortByLength;
