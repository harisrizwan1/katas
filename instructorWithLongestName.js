const instructorWithLongestName = function(instructors) {
  let count = 0;
  let winner;
  for (let i of instructors) {
    if (i.name.length > count) {
      count = i.name.length;
      winner = i;
    }
  }
  return winner;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));