/**
 * Q8: Sum of first n odd numbers
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter how many odd numbers to sum: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
  } else {
    let sum = 0;
    // Sum of first n odd numbers = n^2 (optional shortcut)
    // But here, we'll do loop as asked:

    for (let i = 1, count = 0; count < n; i += 2, count++) {
      sum += i;
    }

    console.log(`Sum of first ${n} odd numbers is ${sum}`);
  }

  rl.close();
});
