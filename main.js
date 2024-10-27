import countTrue, { countTrueAlternative } from "./1.how-much-is-true.js";
import jazzify from "./2.instant-jazz.js";
import sortDescending from "./3.sort-numbers-in-desc-order.js";
import sortByLength from "./4.sort-array-by-string-length.js";
import {
  minMax,
  minMaxAlternative,
} from "./5.find-smallest-and-biggest-numbers.js";
import findLargestNums from "./6.find-largest-numbers-in-group-of-array.js";
import Calculator from "./7.simple-oop-calculator.js";
import keysAndValues from "./8.objects-keys-and-values.js";
import ascDesNone from "./9.lets-sort-tihs-array.js";
import sortIt from "./10.sort-unsortable.js";
import hasHiddenFee from "./11.no-hidden-fees.js";
import trace from "./12.trace-that-matrix.js";
import removeSpecialCharacters from "./13.remove-special-characters.js";
import mathExpr from "./14.check-if-string-is-math-expression.js";
import pentagonal from "./15.pentagonal-number.js";
import tempConversion from "./16.temparature-conversion.js";
import missingLetter from "./17.whats-missing-letter.js";

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

// 7. Simple OOP Calculator
console.log("7. Simple OOP Calculator");
const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

// 8. Return the Objects Keys and Values
console.log("8. Return the Objects Keys and Values");
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// 9. Let's Sort This Array!
console.log("9. Let's Sort This Array!");
console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([1, 2, 3, 4], "None"));

// 10. Sort the Unsortable
console.log("10. Sort the Unsortable");
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));

// 11. No Hidden Fees
console.log("11. No Hidden Fees");
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));
console.log(hasHiddenFee(["$1"], "$4"));

// 12. Trace That Matrix
console.log("12. Trace That Matrix");
console.log(
  trace([
    [1, 4],
    [4, 1],
  ])
);
console.log(
  trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
  ])
);

// 13. Remove the Special Characters from a String (use RegExp)
console.log("13. Remove the Special Characters from a String (use RegExp)");
console.log(removeSpecialCharacters("The quick brown fox!"));
console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO."));
console.log(removeSpecialCharacters("D0n$c sed 0di0 du1"));

// 14. Check if a String is a Mathematical Expression (use RegExp)
console.log("14. Check if a String is a Mathematical Expression (use RegExp");
console.log(mathExpr("4 + 5"));
console.log(mathExpr("4*6"));
console.log(mathExpr("4*no"));

// 15. Pentagonal Number
console.log("15. Pentagonal Number");
console.log(pentagonal(1));
console.log(pentagonal(2));
console.log(pentagonal(3));
console.log(pentagonal(8));

// 16. Temperature Conversion
console.log("16. Temperature Conversion");
console.log(tempConversion(0));
console.log(tempConversion(100));
console.log(tempConversion(-10));
console.log(tempConversion(300.4));

// 17. What's the Missing Letter?
console.log("17. What's the Missing Letter?");
console.log(missingLetter("abdefg"));
console.log(missingLetter("mnopqs"));
console.log(missingLetter("tuvxyz"));
console.log(missingLetter("ghijklmno"));
