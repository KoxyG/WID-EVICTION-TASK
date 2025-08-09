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

class myBenz{
    constructor ( "carlBenz","GLE", 2023 ){
        this.make = "carlBenz";
        this.model ="GLE";
        this.year = 2023;
    }
}
getmyBenzinfo() {
    return { make: {carlBenz}, model: {GLE},year: {2023}}
}