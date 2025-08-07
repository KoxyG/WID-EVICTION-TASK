// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.
// array of 10 integers
const numbers = [1,2,3,4,5,6,7,8,9,10];

// 1. function to sum array using .reduce()
function sumArray(arr) {
    return arr.reduce((total, num)=> total + num, 0);
}

//2. function to find max
function findMax(arr) {
    return Math.max(...arr);
}

//3. function to find min
function findMin(arr) {
    return Math.min(...arr)
}

//   Test Cases
console.log("sum of array:",sumArray((numbers));
console.log("maximum number:",findMax(numbers));
console.log("minimum number:",findMin(numbers));
)