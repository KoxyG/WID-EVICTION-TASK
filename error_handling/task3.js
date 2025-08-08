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
    if (num===0) {
        throw new Error("cannot divide by zero!");
    }
    return 100 /num;
}


{if (typeof num !=='number' ) {
        throw new Error("Invalid number");
    }

    }

{
    

}

try{
    console.log(dividebynumber(5));
} catch (error) {
    console.error(error.message);
}
try{
    console.log(divideByNumber(0));
 } catch (eror) {
    console.error(error.message);
 }
try{
    console.log(dividebynumber(hello));
} catch (eror) {
    console.error(error.message);
}

    