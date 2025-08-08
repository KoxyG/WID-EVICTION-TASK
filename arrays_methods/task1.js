// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.

let numbers = [3, 7, 12, 5, 9, 18, 21, 4, 10, 15];

function sumArray(arr) 
{
return arr.reduce((total, num) => total + num, 0);
}

function findMax(arr) 
{
return Math.max(...arr);
}

function findMin(arr) {
return Math.min(...arr);
}

console.log("Array:", numbers);

console.log("Test sumArray:", sumArray(numbers) === 104 ? "Passed" : "Failed");

console.log("Test findMax:", findMax(numbers) === 21 ? "Passed" : "Failed");

console.log("Test findMin:", findMin(numbers) === 3 ? "Passed" : "Failed");