// Create a function that takes any nonnegative number as an argument and returns it with it's digits in descending order. Descending order is when you sort from highest to lowest.

const sortDescending = (num = 0) => {
  const splittedNumArr = Array.from(num.toString(10));
  const sortedStringArr = splittedNumArr.sort((a, b) => b - a);
  return Number(sortedStringArr.join(""));
};

export default sortDescending;
