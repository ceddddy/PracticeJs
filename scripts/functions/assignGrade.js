function assignGrade(num) {
  if (num >= 90) {
    return "A";
  }
  if (num >= 75) {
    return "B";
  }
  if (num >= 50) {
    return "C";
  }
  if (num >= 30) {
    return "D";
  }
  if (num >= 20) {
    return "E";
  }
  if (num >= 10) {
    return "F";
  }
}

console.log(assignGrade(92));
console.log(assignGrade(78));
console.log(assignGrade(55));
console.log(assignGrade(31));
console.log(assignGrade(28));
console.log(assignGrade(13));