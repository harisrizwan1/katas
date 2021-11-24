const organizeInstructors = function(instructors) {
  let courses = [];
  let result = {};
  for (let i of instructors) {
    if (!courses.includes(i.course)) {
      courses.push(i.course);
    }
  }
  for (let course of courses) {
    result[course] = [];
    for (let j of instructors) {
      if (j.course === course) {
        result[course].push(j.name);
      }
    }
  }
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));