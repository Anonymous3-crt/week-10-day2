let points = [15, 42, 8, 67, 23, 55, 31];
let lowest = points[0];

for (let i = 0; i < points.length; i++) {
  if (points[i] < lowest) {
    lowest = points[i];
  }
}

console.log(lowest);