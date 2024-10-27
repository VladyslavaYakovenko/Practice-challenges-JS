import countTrue, { countTrueAlternative } from "./1.how-much-is-true.js";
// 1. How Much is True
console.log("1. How much is true");
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
console.log("Alternative:");
console.log(countTrueAlternative([true, false, false, true, false]));
console.log(countTrueAlternative([false, false, false, false]));
console.log(countTrueAlternative([]));

