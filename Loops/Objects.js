const student = {
  name: "Chanith",
  age: 23,
  grade: "A"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
