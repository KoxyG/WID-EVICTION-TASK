// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));       
console.log("Max:", findMax(numbers));       
console.log("Min:", findMin(numbers));   