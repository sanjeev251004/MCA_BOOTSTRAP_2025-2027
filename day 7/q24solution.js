/** Q24
 * This program reads n numbers into an array, calculates the average 
 * of those numbers using a loop, and displays the result. 
 * It demonstrates how to use arrays and object-oriented concepts 
 * like classes and methods in Java.
 * 
 * Problem Flow
 * Read input size n
 * Read n elements into array
 * Loop through array to compute sum
 * Divide sum by n to get average
 * Display result
 * 
 * Input / Output Example
 * Input:
 * Enter how many numbers: 5
 * Enter the numbers:
 * 10
 * 20
 * 30
 * 40
 * 50
 * 
 * Output:
 * Average of the numbers: 30.00
 */

const prompt = require("prompt-sync")();

class AverageCalculator {
    constructor(size) {
        this.size = size;
        this.numbers = [];
    }

    readNumbers() {
        for (let i = 0; i < this.size; i++) {
            let num = parseFloat(prompt(`Enter number ${i + 1}: `));
            this.numbers.push(num);
        }
    }

    calculateAverage() {
        let sum = 0;
        for (let num of this.numbers) {
            sum += num;
        }
        return sum / this.size;
    }

    displayAverage() {
        let avg = this.calculateAverage();
        console.log(`Average of the numbers: ${avg.toFixed(2)}`);
    }
}

// Main program
let n = parseInt(prompt("Enter how many numbers: "));
let avgCalc = new AverageCalculator(n);
avgCalc.readNumbers();
avgCalc.displayAverage();
