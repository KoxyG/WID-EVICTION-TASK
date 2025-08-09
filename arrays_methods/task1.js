// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.
const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log("Array", numbers);
function sumArray(numbers) {
    return arr. reduce ((a,b)=> a+b, 0);
}
console.log( "sumArray",sumArray(numbers) );
function findmax(numbers) {
    return Math.max(1,2,3,4,5,6,7,8,9,10);
}
console.log("findmax", findmax (numbers));
function findmin (arr){
    return Math.min(1.2,3,4,5,6,7,8,9,10);
}
console.log("findmin", findmax(numbers));