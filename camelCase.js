const camelCase = function(input) {
  let result = input.split(" ");
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));