const instructorWithLongestName = function(instructors) {
  let long= 0;
  let long1 = ''
  for (i = 0; i<instructors.length; i++) {
    if (instructors[i].name.length > long) {
      long = instructors[i].name.length;
      long1 = instructors[i];
    }
  }
  return long1;
}

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