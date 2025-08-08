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



console.log('hello,world!');


  //let num=10;  
//const baseNumber=100;

function divideByNumber(){
   
    try{ 
      //test of division
        //const num = 0;
        const num="hello"
        //let num=5;  
        const baseNumber=100;
        const result=baseNumber/num;
   
   console.log(result)
       

}catch(error){

        if(num===0){
    throw new error('Cannot divide by zero');
   }

   if(isNaN(num)){
        throw new error('Invalid number');
     }
     console.log(error);
}
  }
  divideByNumber();