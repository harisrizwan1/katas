const repeatNumbers = function(data) {
  let result = [];
  for (let i of data) {
    result.push(i[0].toString().repeat(i[1]));
  }
  return result.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));