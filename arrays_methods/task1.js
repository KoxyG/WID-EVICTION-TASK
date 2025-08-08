// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum =
numbers.reduce((accumulator,currentvalue) =>accumulator + currentvalue, 0);
console.log(sum); 

findmax(arr); {
    return Math.max(...arr);
}
const;  =  max [4,2,9,6,5,1,8,3,7];
console.log(findmax(numbers))

findmin(aqr); {
    return Math.min(...arr);
}
const number =[4,2,9,6,5,1,8,3,7];
console.log(findmin(numbers));

// Write test cases to verify that each function works correctly.