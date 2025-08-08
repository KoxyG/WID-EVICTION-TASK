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

// Define the Car class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to return car details
  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// Create two instances of the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2022);

// Call getCarInfo() on both instances
console.log(car1.getCarInfo());
console.log(car2.getCarInfo());

