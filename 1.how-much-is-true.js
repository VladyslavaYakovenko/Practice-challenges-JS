// Create a function which returns the number of true values there are in an array.
const countTrue = (array = []) => {
  const convertedToBoolean = array.map((elem) => !!elem);
  console.log("Boolean array: ", convertedToBoolean);
  return convertedToBoolean.filter((elem) => elem === true).length;
};

// or using reduce
export const countTrueAlternative = (array = []) => {
  return array.reduce((prev, curr = 0) => {
    return !!curr ? prev + 1 : prev;
  }, 0);
};

export default countTrue;
