import countTrue, { countTrueAlternative } from "./1.how-much-is-true.js";
import jazzify from "./2.instant-jazz.js";
// 1. How Much is True
console.log("1. How much is true");
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
console.log("Alternative:");
console.log(countTrueAlternative([true, false, false, true, false]));
console.log(countTrueAlternative([false, false, false, false]));
console.log(countTrueAlternative([]));

// 2.Instant JAZZ
console.log("2. Instant JAZZ");
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));

