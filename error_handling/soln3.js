function divideByNumber(num) {
  try {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Invalid number");
    }

    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }

    return 100 / num;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log (divideByNumber(5));
console.log (divideByNumber(0));                  
console.log( divideByNumber("hello"));
