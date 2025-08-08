// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 // Implement the following functions:
 1. sumArray(arr): Returns the sum of all elements in the array using .reduce(). /** */
 
 function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

 //2. findMax(arr): Returns the largest number in the array. /** */

 function findMax(arr) {
  return Math.max(...arr);
}

 // 3. findMin(arr): Returns the smallest number in the array. /** */
 
function findMin(arr) {
  return Math.min(...arr);
}

// Write test cases to verify that each function works correctly. /** */

console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));       // Expected: 55
console.log("Max:", findMax(numbers));        // Expected: 10
console.log("Min:", findMin(numbers));        // Expected: 1