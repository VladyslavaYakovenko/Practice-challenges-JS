import countTrue from "./1.how-much-is-true.js";
import jazzify from "./2.instant-jazz.js";
import sortDescending from "./3.sort-numbers-in-desc-order.js";
import sortByLength from "./4.sort-array-by-string-length.js";
import { minMax } from "./5.find-smallest-and-biggest-numbers.js";
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

function printResult(config) {
  const wrapper = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = config.title;

  const description = document.createElement("p");
  description.textContent = config.description;

  const ul = document.createElement("ul");

  config.params.forEach((param) => {
    const elem = document.createElement("li");

    elem.textContent = config.method(param) ?? "Empty Result";

    ul.appendChild(elem);
  });

  wrapper.appendChild(title);
  wrapper.appendChild(description);
  wrapper.appendChild(ul);
  document.body.appendChild(wrapper);
}

window.onload = () => {
  const calculator = new Calculator();

  const allResults = [
    {
      title: "How much is true?",
      description:
        "Create a function which returns the number of true values there are in an array.",
      method: (p) => countTrue(p),
      params: [
        [true, false, false, true, false],
        [false, false, false, false],
        [],
      ],
    },
    {
      title: "Instant JAZZ",
      description:
        "Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.",
      method: (p) => jazzify(p),
      params: [
        ["G", "F", "C"],
        ["Dm", "G", "E", "A"],
        ["F7", "E7", "A7", "Ab7", "Gm7", "C7"],
        [],
      ],
    },
    {
      title: "Sort Numbers in Descending Order",
      description:
        "Create a function that takes any nonnegative number as an argument and returns it with it's digits in descending order. Descending order is when you sort from highest to lowest.",
      method: (p) => sortDescending(p),
      params: [123, 1254859723, 73065],
    },
    {
      title: "Sort an Array by String Length",
      description:
        "Create a function that takes an array of strings and return an array, sorted from shortest to longest.",
      method: (p) => sortByLength(p),
      params: [
        ["Google", "Apple", "Microsoft"],
        ["Leonardo", "Michelangelo", "Raphael", "Donatello"],
        ["Turing", "Einstein", "Jung"],
      ],
    },
    {
      title: "Find the Smallest and Biggest Numbers",
      description:
        "Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.",
      method: (p) => minMax(p),
      params: [[1, 2, 3, 4, 5], [2334454, 5], [1]],
    },
    {
      title: "Find the Largest Numbers in a Group of Arrays",
      description:
        "Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.",
      method: (p) => findLargestNums(p),
      params: [
        [
          [4, 2, 7, 1],
          [20, 70, 40, 90],
          [1, 2, 0],
        ],
        [
          [-34, -54, -74],
          [-32, -2, -65],
          [-54, 7, -43],
        ],
        [
          [0.4321, 0.7634, 0.652],
          [1.324, 9.32, 2.5423, 6.4314],
          [9, 3, 6, 3],
        ],
      ],
    },
    {
      title: "Return the Objects Keys and Values",
      description:
        "Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.",
      method: (p) => keysAndValues(p),
      params: [
        { a: 1, b: 2, c: 3 },
        { a: "Apple", b: "Microsoft", c: "Google" },
        { key1: true, key2: false, key3: undefined },
      ],
    },
    {
      title: "Let's Sort This Array!",
      description:
        "Create a function that takes an array of numbers arr, a string str and return an array of numbers",
      method: (p) => ascDesNone(...p),
      params: [
        [[4, 3, 2, 1], "Asc"],
        [[7, 8, 11, 66], "Des"],
        [[1, 2, 3, 4], "None"],
      ],
    },
    {
      title: "Sort the Unsortable",
      description: "Tries to sort arrays of arrays by first element",
      method: (p) => sortIt(p),
      params: [
        [4, 1, 3],
        [[4], [1], [3]],
        [4, [1], 3],
        [[4], 1, [3]],
        [[4], 1, [3]],
        [[3], 4, [2], [5], 1, 6],
      ],
    },
    {
      title: "No Hidden Fees",
      description:
        "Given an array of prices and a supposed total, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.",
      method: (p) => hasHiddenFee(...p),
      params: [
        [["$2", "$4", "$1", "$8"], "$15"],
        [["$1", "$2", "$3"], "$6"],
        [["$1"], "$4"],
      ],
    },
    {
      title: "Trace That Matrix",
      description:
        "Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).",
      method: (p) => trace(p),
      params: [
        [
          [1, 4],
          [4, 1],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [1, 0, 1, 0],
          [0, 2, 0, 2],
          [3, 0, 3, 0],
          [0, 4, 0, 4],
        ],
      ],
    },
    {
      title: "Remove the Special Characters from a String (use RegExp)",
      description: `Create a function that takes a string, removes all "special" characters
       e.g. ., !, @, #, $, %, ^, &, \, *, (, )
       and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.`,
      method: (p) => removeSpecialCharacters(p),
      params: [
        "The quick brown fox!",
        "%fd76$fd(-)6GvKlO.",
        "D0n$c sed 0di0 du1",
      ],
    },
    {
      title: "Check if a String is a Mathematical Expression (use RegExp)",
      description: `Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.`,
      method: (p) => mathExpr(p),
      params: ["4 + 5", "4*6", "4*no"],
    },
    {
      title: "Pentagonal Number",
      description: "Check if number is pentagonal",
      method: (p) => pentagonal(p),
      params: [1, 2, 3, 8],
    },
    {
      title: "Temperature Conversion",
      description:
        "Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.",
      method: (p) => tempConversion(p),
      params: [0, 100, -10, 300.4],
    },
    {
      title: "What's the Missing Letter?",
      description:
        "Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).",
      method: (p) => missingLetter(p),
      params: ["abdefg", "mnopqs", "tuvxyz", "ghijklmno"],
    },
  ];

  allResults.forEach((config) => {
    printResult(config);
  });
};
