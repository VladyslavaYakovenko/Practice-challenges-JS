// Given an array of prices and a "supposed" total, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

const hasHiddenFee = (priceArr, total) => {
  const priceArrWithNoDollarSign = priceArr.map((elem) =>
    parseFloat(elem.slice(1))
  );

  const totalWithNoDollarSign = parseFloat(total.slice(1));

  //   cheque - sum of prices
  const cheque = priceArrWithNoDollarSign.reduce((prev, curr) => prev + curr);

  return totalWithNoDollarSign > cheque ? true : false;
};

export default hasHiddenFee;
