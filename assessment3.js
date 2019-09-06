//1. Create two variables, num1 and num2, and assign a numerical value to each. Finally, create a third variable, sum, and assign it as a value the sum of num1 and num2.
 var num1;
 var num2;

num1 = 45;
num2 = 15;
 var sum= num1 + num2;
 console.log(sum);

//2. Create two variables, firstName and lastName, and assign them the appropriate values from your name. Using string concatenation, log the following phrase to the console: “Hello, my name is firstName lastName”, where firstName and lastName are replaced with the values from the variables.
var firstName;
var lastName;
firstName ="Jacob";
lastName ="Richardson";
console.log( "Hello, my name is " +  firstName  + " " +  lastName );


//3. Using the slice, substring, or substr methods, pull the last four characters from the following string:
var ssn = "123-45-6789";
var lastFourDigits = ssn.slice (7,);
console.log("The last four digits are: " + lastFourDigits);

//4. Create an array called suits that contains the four different suits from a standard deck of cards.
var suits= [
    "clubs",
    "hearts",
    "spades",
    "diamonds",
]


//5. Print out the third suit from your suits array.
console.log(suits[2]);


//6. Create a variable, bool. Using an if statement, if bool is true, print out “The Boolean is true”.
var bool
bool = true;
if (bool) {
console.log("The Boolean is true");
}



//BONUS

//7. Create two Boolean variables, speed and noticedByCop.  Using an if statement, check to see if speed is above 80 AND noticedByCop is equal to true. If both of these are met, print out “You got caught!” to the console. Add an else block to the if statement and print out “You’re safe…for now” in the case both of those conditions aren’t met.
 var speed = 60
 var noticedByCop = true
  if (speed =80,) {
      console.log("You got caught");
  }
  else {
      console.log("You're safe..for now");
  }
