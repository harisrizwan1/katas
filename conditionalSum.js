const conditionalSum = function(values, condition) {
  let total = 0;
  for (let i of values) {
    if (condition === "even" && i % 2 === 0) {
      total += i;
    } else if (condition === "odd" && i % 2 !== 0) {
      total += i;
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));