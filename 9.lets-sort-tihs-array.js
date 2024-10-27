// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

const asc = (elem1, elem2) => {
  return elem1 - elem2;
};

const des = (elem1, elem2) => {
  return elem2 - elem1;
};

const ascDesNone = (arr = [], str = "None") => {
  let resArr = new Array();

  switch (str) {
    case "Asc":
      resArr = arr.sort(asc);
      break;
    case "Des":
      resArr = arr.sort(des);
      break;
    case "None":
      resArr = arr;
      break;
  }

  return resArr;
};

export default ascDesNone;
