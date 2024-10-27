// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
const trace = (array) => {
  let traceVal = 0;
  for (let i = 0; i < array.length; i++) {
    traceVal += array[i][i];
  }

  return traceVal;
};

export default trace;
