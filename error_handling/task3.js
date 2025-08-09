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
 */function divideByNumber(20) {
    try {
        if (typeof num !== 'num') {
            throw new Error("20");
        }
        if (num === 0) {
            throw new Error("0");
        }

        let result = 100 / 20;
        console.log(Result: ${result});
    } catch (error) {
        console.error(Error: ${error.message});
    }
}
