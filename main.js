import countTrue, { countTrueAlternative } from "./1.how-much-is-true.js";
import jazzify from "./2.instant-jazz.js";
import sortDescending from "./3.sort-numbers-in-desc-order.js";
import sortByLength from "./4.sort-array-by-string-length.js";
import {
  minMax,
  minMaxAlternative,
} from "./5.find-smallest-and-biggest-numbers.js";
import findLargestNums from "./6.find-largest-numbers-in-group-of-array.js";
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

// 3. Sort Numbers in Descending Order
console.log("3. Sort Numbers in Descending Order");
console.log(sortDescending(123));
console.log(sortDescending(1254859723));
console.log(sortDescending(73065));

// 4. Sort an Array by String Length
console.log("4. Sort an Array by String Length");
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));

// 5. Find the Smallest and Biggest Numbers
console.log("5. Find the Smallest and Biggest Numbers");
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

// OR:
console.log(minMaxAlternative([1, 2, 3, 4, 5]));
console.log(minMaxAlternative([2334454, 5]));
console.log(minMaxAlternative([1]));

// 6. Find the Largest Numbers in a Group of Arrays
console.log("6. Find the Largest Numbers in a Group of Arrays");
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

console.log(
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
);

console.log(
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
);

