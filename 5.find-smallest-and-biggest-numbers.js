// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

export const minMax = (arr = []) => {
  return [Math.min(...arr), Math.max(...arr)];
};

// or

export const minMaxAlternative = (arr = []) => {
  let min = arr[0],
    max = arr[0];

  arr.forEach((elem) => {
    max = elem >= max ? elem : max;
    min = elem <= min ? elem : min;
  });

  return [min, max];
};
