// Write a function divideByNumber(num) that divides 100 by the provided number.

/**
 * Implement error handling using try and catch:
 * In the try block, attempt to divide by the given number.
 * In the catch block, handle two potential errors:
 * 1. If the number is 0, throw an error with the message "Cannot divide by zero".
 * 2. If the number is not a number, throw an error with the message "Invalid number".
 * 
 * 
 * Test the function with different inputs:
 * 1. A valid number (e.g., 5)
 * 2. Zero (0)
 * 3. A non-number (e.g., "hello")
 * 
 * 
 * Bonus Points: Attach screenshot of proof it works on your terminal.
 */
function divideByNumber(num) {
  try {
    // Check if input is not a number
    if (isNaN(num)) {
      throw new Error("Invalid number");
    }

    // Check for division by zero
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }

    // If valid, perform division
    const result = 100 / num;
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Test cases
divideByNumber(5);      // Valid number
divideByNumber(0);      // Cannot divide by zero
divideByNumber("hello"); // Invalid number
