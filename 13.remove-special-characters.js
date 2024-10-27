// Create a function that takes a string, removes all "special" characters
//e.g. ., !, @, #, $, %, ^, &, \, *, (, )
//and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

const removeSpecialCharacters = (string = "") => {
  return string.match(/[\w -]/g).join("");
};

export default removeSpecialCharacters;
