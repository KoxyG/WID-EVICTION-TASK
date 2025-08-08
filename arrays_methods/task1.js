
  



// Create an array of 10 integers. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].





/**
 * Implement the following functions:
 * 1. sumArray(arr): Returns the sum of all elements in the array using .reduce().
 * 2. findMax(arr): Returns the largest number in the array.
 * 3. findMin(arr): Returns the smallest number in the array.
 */

// Write test cases to verify that each function works correctly.


const arr =[1,2,3,4,5,6,7,8,9,10];
let sum=0;
let max = arr[9];
let min=arr[0];
let num;


function sumArray(arr){
  sum= arr.reduce((sum,num)=> sum + num, 0);
  
  return sum;
}
//console.log( sumArray(arr));

function findMax(arr){
for(num of arr){
  if(num > max){
    max=num;
  }
}
  return max;
  }
  
  console.log( findMax(arr));

  
function findMin(arr){
  for(num of arr){
    if(num < min){
      min=num;
    }
  }
    return min;
    }
    
  //  console.log( findMin(arr));
