class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const car1 = new Car("Lexus", "390", 2020);
const car2 = new Car("Tesla", "Model 3", 2023);


console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
