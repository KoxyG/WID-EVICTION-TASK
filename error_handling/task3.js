/function divideByNumber(num) {
  try {
    // Check if the input is a number
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Invalid number");
    }

    // Check if the number is zero
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }

    // Perform division
    let result = 100 / num;
    console.log(`100 divided by ${num} is ${result}`);
    return result;

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Test Cases
divideByNumber(5);       // Valid input
divideByNumber(0);       // Divide by zero
divideByNumber("hello"); // Invalid number/ 
