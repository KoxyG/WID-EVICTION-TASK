// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(arr) {
  return arr.reduce(function (total, current) {
    return total + current;
  }, 0);
}

function findMax(arr) {
  return arr.reduce(function (max, current) {
    return current > max ? current : max;
  });
}

function findMin(arr) {
  return arr.reduce(function (min, current) {
    return current < min ? current : min;
  });
}

console.log("Sum:", sumArray(numbers));
console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));


Array:
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Sum:
55
Max:
10
Min:
1
