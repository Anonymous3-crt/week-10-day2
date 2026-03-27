let results = [55, 40, 72, 38, 91, 65, 48];

for (let i = 0; i < results.length; i++) {
  if (results[i] >= 50) {
    console.log(results[i] + " - Pass");
  } else {
    console.log(results[i] + " - Fail");
  }
}