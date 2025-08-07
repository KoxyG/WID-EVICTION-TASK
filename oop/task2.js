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

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.make}${this.model}${this.year}`;
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.getCarInfo());

const car2 = new Car("Honda", "Civic", 2022);
console.log(car2.getCarInfo());

//results 
ToyotaCorolla2020
HondaCivic2022
