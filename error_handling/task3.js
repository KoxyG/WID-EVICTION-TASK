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

/**
 * Divides 100 by the provided number with error handling.
 * @param {*} num - The number to divide 100 by.
 * @returns {number} The result of the division.
 */
function divideByNumber(num) {
  try {
    // Check if the input is a valid number.
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Invalid number");
    }

    // Check for division by zero.
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    
    // Perform the division if no errors are found.
    const result = 100 / num;
    console.log(`Result of 100 / ${num}: ${result}`);
    return result;

  } catch (error) {
    // Catch and log the thrown error messages.
    console.error(`Error: ${error.message}`);
  }
}

// --- Test Cases ---
console.log("--- Testing divideByNumber function ---");

// Test with a valid number (e.g., 5)
console.log("Test Case 1: Valid number");
divideByNumber(5);

console.log("\n");

// Test with zero (0)
console.log("Test Case 2: Zero");
divideByNumber(0);

console.log("\n");

// Test with a non-number (e.g., "hello")
console.log("Test Case 3: Non-number");
divideByNumber("hello");

