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
function divideByNumberNum(input) {
  try {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error("Invalid number");
    }

    if (input === 0) {
      throw new Error("Cannot divide by 0");
    }

    const result = 100 / input;
    console.log(`100 divided by ${input} is ${result}`);
  } catch (error) {
    console.error("Error:", error.message);
  }


divideByNumberNum(5);
divideByNumberNum(0);
divideByNumberNum("hello");
divideByNumberNum(NaN);
divideByNumberNum(25);

//terminal result 
100 divided by 5 is 20
Error:
Cannot divide by 0
Error:
Invalid number
Error:
Invalid number
100 divided by 25 is 4
  
