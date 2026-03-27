let grades = [70, 55, 88, 42, 95, 61];
let countA = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 80) {
    countA++;
  }
}

console.log(countA + " students made an A");