const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

console.log("Arrays:", numbers);
console.log("Sum:", sumArray(numbers));
console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));