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
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Invalid number");
    }
    
    if (Number(num) === 0) {
      throw new Error("Cannot divide by zero");
    }

    // If no errors, return result
    const result = 100 / num;
    console.log(`100 divided by ${num} is ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// Test cases
console.log("Case 1: Valid number (5)");
divideByNumber(5);

console.log("\nCase 2: Zero (0)");
divideByNumber(0);       // Expected: Cannot divide by zero

console.log("\nCase 3: Non-number ('hello')");
divideByNumber("hello"); // Expected: Invalid number