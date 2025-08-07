// Create an array of 10 integers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 */
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * 2. findMax(arr): Returns the largest number in the array.
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * 3. findMin(arr): Returns the smallest number in the array.
 */
function findMin(arr) {
  return Math.min(...arr);
}

// Test Cases
console.log("Testing sumArray:");
console.log(sumArray(numbers)); // Expected: 55

console.log("Testing findMax:");
console.log(findMax(numbers)); // Expected: 10

console.log("Testing findMin:");
console.log(findMin(numbers)); // Expected: 1
