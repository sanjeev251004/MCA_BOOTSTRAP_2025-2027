/** Q25
 * This program reads n integers into an array and finds the second
 * largest number among them. It uses a class with methods for input, 
 * processing (finding second largest), and output. It showcases 
 * array handling and object-oriented principles in Java.
 * 
 * Problem Flow 
 * Read input size n
 * Store values in array
 * Use loop to compare and find:
 *     largest
 *     secondLargest
 * Display result
 * 
 * Input / Output Example
 * Input:
 * Enter how many numbers: 6
 * Enter the numbers:
 * 10
 * 45
 * 22
 * 45
 * 8
 * 19
 * 
 * Output:
 * Second largest number is: 22
 */

const prompt = require("prompt-sync")();

class SecondLargestFinder {
    constructor(size) {
        this.size = size;
        this.numbers = [];
    }

    readNumbers() {
        for (let i = 0; i < this.size; i++) {
            let num = parseInt(prompt(`Enter number ${i + 1}: `));
            this.numbers.push(num);
        }
    }

    findSecondLargest() {
        let largest = -Infinity;
        let secondLargest = -Infinity;

        for (let num of this.numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }

        return secondLargest;
    }

    displayResult() {
        let secondLargest = this.findSecondLargest();
        console.log(`Second largest number is: ${secondLargest}`);
    }
}

// Main program
let n = parseInt(prompt("Enter how many numbers: "));
let finder = new SecondLargestFinder(n);
finder.readNumbers();
finder.displayResult();
