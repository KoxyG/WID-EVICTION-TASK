// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.



// Create an array of 10 integers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * 1. Returns the sum of all elements in the array using .reduce()
 */
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * 2. Returns the largest number in the array
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * 3. Returns the smallest number in the array
 */
function findMin(arr) {
  return Math.min(...arr);
}

// Test Cases
console.log("Original Array:", numbers);
console.log("Sum of Array:", sumArray(numbers));      // Expected: 55
console.log("Maximum Number:", findMax(numbers));     // Expected: 10
console.log("Minimum Number:", findMin(numbers));     // Expected: 1


