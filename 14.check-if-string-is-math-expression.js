// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

const mathExpr = (mathExp = "") => {
  return /\d+\s*[\-+/*]\s*\d+/gm.test(mathExp);
};

export default mathExpr;
