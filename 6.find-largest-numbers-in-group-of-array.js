// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

const findLargestNums = (arr = []) => {
  const maxArr = [];
  for (const subArr of arr) {
    maxArr.push(Math.max(...subArr));
  }

  return maxArr;
};

export default findLargestNums;
