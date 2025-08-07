/**
 * Define a Car class with the following properties:
 * 1. make: (string)
 * 2.model: (string)
 * 3. year: (number)
 * 
 * 
 * Add a method getCarInfo() to the class that returns a string with the car’s details 
 * in the format: "Make: {make}, Model: {model}, Year: {year}"
 * 
 * 
 * Create at least two instances of the Car class, 
 * each with different values, and call getCarInfo() on both instances to display the information.
 * Run it and make sure it works.
 * 
 * Bonus Points: Attach screenshot of proof it works on your terminal.
 */



/**
 * Defines a Car class with properties for make, model, and year.
 */
class Car {
  /**
   * Constructs a new Car instance.
   * @param {string} make - The make of the car.
   * @param {string} model - The model of the car.
   * @param {number} year - The year the car was made.
   */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /**
   * Returns a string with the car's details.
   * @returns {string} The formatted car information.
   */
  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// --- Create and test instances ---

// Create the first instance of the Car class.
const car1 = new Car("Honda", "Civic", 2021);

// Create the second instance of the Car class.
const car2 = new Car("Tesla", "Model 3", 2023);

// Display the information for both cars.
console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
