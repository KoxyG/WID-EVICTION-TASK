// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to varify that each functions work.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Sum of array using reduce()
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 2. Find maximum number in array
function findMax(arr) {
  return Math.max(...arr);
}

// 3. Find minimum number in array
function findMin(arr) {
  return Math.min(...arr);
}

// Test the functions
console.log("Sum:", sumArray(arr));       // 55
console.log("Max:", findMax(arr));        // 10
console.log("Min:", findMin(arr));        // 1


