// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

const keysAndValues = (obj = {}) => {
  const objSortedKeys = Object.keys(obj).sort();
  return [objSortedKeys, Object.values(obj)];
};

export default keysAndValues;
