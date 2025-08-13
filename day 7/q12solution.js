/** Q12
 * This program reads 5 numbers (each between 1 and 30) from the user.
 * For each number, it prints a line with that many asterisks *, 
 * forming a simple bar chart or histogram.
 * 
 * Problem Flow:
 * Read 5 numbers from the user
 * Loop through each number
 * For each number:
 * Print the number
 * Print that many * using inner loop
 * 
 * Sample Output:
 * Input:
 * Enter 5 Numbers in a same line: 
 * 3 7 2 6 1
 * Output:
 * 3 ***
 * 7 *******
 * 2 **
 * 6 ******
 * 1 *
 */

const prompt = require("prompt-sync")();

// Read input
let input = prompt("Enter 5 numbers in the same line (between 1 and 30): ");
let numbers = input.split(" ").map(Number);

// Loop through each number
for (let num of numbers) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(num + " " + stars);
}
