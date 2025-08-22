// Create an array of 10 integers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Function to calculate the sum of array elements using reduce
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Function to find the largest number in the array
function findMax(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

// Function to find the smallest number in the array
function findMin(arr) {
  return arr.reduce((min, num) => (num < min ? num : min), arr[0]);
}

// Test cases to verify each function works correctly
console.log('Original array:', numbers);
console.log('Sum of array:', sumArray(numbers)); // Should be 55 (1+2+3+...+10)
console.log('Maximum value:', findMax(numbers)); // Should be 10
console.log('Minimum value:', findMin(numbers)); // Should be 1

// Additional test cases with different arrays
const testArray1 = [5, 2, 9, 1, 7, 6, 3];
console.log('\nTest array 1:', testArray1);
console.log('Sum of test array 1:', sumArray(testArray1)); // Should be 33
console.log('Maximum value in test array 1:', findMax(testArray1)); // Should be 9
console.log('Minimum value in test array 1:', findMin(testArray1)); // Should be 1

const testArray2 = [10, 10, 10, 10];
console.log('\nTest array 2:', testArray2);
console.log('Sum of test array 2:', sumArray(testArray2)); // Should be 40
console.log('Maximum value in test array 2:', findMax(testArray2)); // Should be 10
console.log('Minimum value in test array 2:', findMin(testArray2)); // Should be 10