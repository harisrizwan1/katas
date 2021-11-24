const sumLargestNumbers = function(data) {
  let first = 0;
  let second = 0;
  for (let i of data) {
    if (i > first) {
      first = i;
    }
  }
  for (let j of data) {
    if (j > second && j !== first) {
      second = j;
    }
  }
  return first + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));