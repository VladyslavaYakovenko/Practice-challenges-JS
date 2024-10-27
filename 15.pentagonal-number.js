const pentagonal = (num) => {
  if (num >= 1) {
    return (5 * num ** 2 - 5 * num + 2) / 2;
  } else {
    return "Number must be n >= 1";
  }
};

export default pentagonal;
