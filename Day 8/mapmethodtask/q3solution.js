const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

const sums = arrays.map(sum => {
  return sum.reduce((acc, curr) => acc + curr, 0);
});

console.log(sums);  
