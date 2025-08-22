/**
 * Define a Car class with the following properties:
 * 1. make: (string)
 * 2. model: (string)
 * 3. year: (number)
 */

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Add a method getCarInfo() to return car details
  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// Create at least two instances with different values
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Civic', 2018);

// Call getCarInfo() on both instances to display the information
console.log(car1.getCarInfo()); // Output: Make: Toyota, Model: Camry, Year: 2020
console.log(car2.getCarInfo()); // Output: Make: Honda, Model: Civic, Year: 2018. bye.