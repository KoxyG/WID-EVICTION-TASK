// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const findMax = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr);
};

const findMin = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr);
};

console.log(`Array: [${numbers}]`);
console.log('--------------------');
console.log(`Sum of array: ${sumArray(numbers)}`);
console.log(`Maximum value: ${findMax(numbers)}`);
console.log(`Minimum value: ${findMin(numbers)}`);

console.log('\n--- Additional Test Cases ---');

// Test cases for sumArray
console.log('\n--- Testing sumArray ---');
const testArray1 = [1, 2, 3, 4, 5];
console.assert(sumArray(testArray1) === 15, `sumArray([1, 2, 3, 4, 5]) should be 15, got ${sumArray(testArray1)}`);

const testArray2 = [-1, -2, -3];
console.assert(sumArray(testArray2) === -6, `sumArray([-1, -2, -3]) should be -6, got ${sumArray(testArray2)}`);

const testArray3 = [10];
console.assert(sumArray(testArray3) === 10, `sumArray([10]) should be 10, got ${sumArray(testArray3)}`);

const testArray4 = [];
console.assert(sumArray(testArray4) === 0, `sumArray([]) should be 0, got ${sumArray(testArray4)}`);

// Test cases for findMax
console.log('\n--- Testing findMax ---');
const testArray5 = [5, 12, 3, 8];
console.assert(findMax(testArray5) === 12, `findMax([5, 12, 3, 8]) should be 12, got ${findMax(testArray5)}`);

const testArray6 = [-10, -2, -20];
console.assert(findMax(testArray6) === -2, `findMax([-10, -2, -20]) should be -2, got ${findMax(testArray6)}`);

const testArray7 = [100];
console.assert(findMax(testArray7) === 100, `findMax([100]) should be 100, got ${findMax(testArray7)}`);

const testArray8 = [];
console.assert(findMax(testArray8) === undefined, `findMax([]) should be undefined, got ${findMax(testArray8)}`);

// Test cases for findMin
console.log('\n--- Testing findMin ---');
const testArray9 = [5, 12, 3, 8];
console.assert(findMin(testArray9) === 3, `findMin([5, 12, 3, 8]) should be 3, got ${findMin(testArray9)}`);

const testArray10 = [-10, -2, -20];
console.assert(findMin(testArray10) === -20, `findMin([-10, -2, -20]) should be -20, got ${findMin(testArray10)}`);

const testArray11 = [100];
console.assert(findMin(testArray11) === 100, `findMin([100]) should be 100, got ${findMin(testArray11)}`);

const testArray12 = [];
console.assert(findMin(testArray12) === undefined, `findMin([]) should be undefined, got ${findMin(testArray12)}`);
