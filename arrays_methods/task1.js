// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.

const numbers = [12, 5, 8, 3, 15, 7, 10, 20, 1, 6];

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Test case for sumArray fxn
const sumResult = sumArray(numbers);
console.log(`The sum of all numbers is: ${sumResult}`);
console.log(`Did it work? ${sumResult === 87 ? 'Yes' : 'No'}`);

// Test case for findMax fxn
const maxResult = findMax(numbers);
console.log(`The largest number is: ${maxResult}`);
console.log(`Did it work? ${maxResult === 20 ? 'Yes' : 'No'}`);

// Test case for findMin fxn
const minResult = findMin(numbers);
console.log(`The smallest number is: ${minResult}`);
console.log(`Did it work? ${minResult === 1 ? 'Yes' : 'No'}`);