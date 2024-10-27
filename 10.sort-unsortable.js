const sortIt = (arr = []) => {
  return arr.sort((num1, num2) => {
    if (num1 instanceof Array && num2 instanceof Array) {
      return num1[0] - num2[0];
    } else if (num1 instanceof Array) {
      return num1[0] - num2;
    } else if (num2 instanceof Array) {
      return num1 - num2[0];
    } else {
      return num1 - num2;
    }
  });
};

export default sortIt;
