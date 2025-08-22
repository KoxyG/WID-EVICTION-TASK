// Write a function divideByNumber(num) that divides 100 by the provided number
function divideByNumber(num) {
  try {
    // Check if the input is a number
    if (typeof num !== 'number') {
      throw new Error('Invalid number');
    }
    // Check if the number is zero
    if (num === 0) {
      throw new Error('Cannot divide by zero');
    }
    // Perform the division
    return 100 / num;
  } catch (error) {
    // Handle the errors
    console.error('Error occurred:', error.message);
    return null; // Return null for failed cases
  }
}

// Test the function with different inputs
console.log('Dividing by 5:', divideByNumber(5)); // Should be 20
console.log('Dividing by 0:', divideByNumber(0)); // Should show error
console.log('Dividing by "hello":', divideByNumber("hello")); // Should show error