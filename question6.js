let goals = [2, 0, 3, 1, 4, 0, 2];
let count = 0;

for (let i = 0; i < goals.length; i++) {
  if (goals[i] === 0) {
    count++;
  }
}

console.log(count);