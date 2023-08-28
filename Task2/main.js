//alert("Hellor JavaScript Conditions");

/* if (condition) {
// block of code to be executed if the condition is true
} else {
// block of code to be executed if the condition is false
} */

// another if statement
/* if (condition1) {
//first condition
} else if (condition2) {
// second condition
} else {
// no codition for the last one
} */

// Exercise 1
/* const hour = 15;
if (hour < 18) {
  greetings = "Good Day";
} else {
  greetings = "Good Evening";
}
console.log(greetings); */

// Exerciese 2
/* let firstName = prompt("Please write your first name here!");
if (firstName === "Mithun") {
  console.log("You are correct!");
} else {
  console.log("You should try again!");
} */

// Exercise 3
/* let tem = parseInt(prompt("Enter temperature in celsius"));

if (tem <= 15) {
  message = "The weather is so cold";
} else {
  message = "The weather is not so cold";
}
console.log(message); */

// Exercise 4
/* let season = prompt("What is your favorite season?").toLowerCase();
console.log(season);

switch (season) {
  case "spring":
    console.log("So you really like spring season");
    break;
  case "summer":
    console.log("So you really like summer season");
    break;
  case "fall":
    console.log("So you really like fall season");
    break;
  case "winter":
    console.log("So you really like winter season");
    break;

  default:
    console.log("Did you enter correct season name?");
    break;
}
 */

// Exercise 5
/* let regHour = 7;
let bonusHour = 9;
let totalHours = parseInt(prompt("Enter Your Total Hours Here"));
let hourlySalary = parseInt(prompt("Enter your hourly salary here! 😀"));
let extraHours = bonusHour - regHour;
let overTime = totalHours - bonusHour;

if (totalHours <= 7) {
  wage = totalHours * hourlySalary;
} else if (totalHours <= 9) {
  wage = hourlySalary * totalHours + (extraHours * hourlySalary) / 2;
} else if (totalHours > 9) {
  wage =
    hourlySalary * totalHours +
    (extraHours * hourlySalary) / 2 +
    overTime * hourlySalary;
} else {
  wage = "No Salary Yet 🤣🤣🤣";
}
console.log(wage); */

//

/* let hours = parseInt(prompt("Enter your total working hours here!"));
let rate = parseInt(prompt("Enter your hourly rate here!"));
let regPay = hours * rate;
let regHour = 7;
let bonusHours = 9 - regHour;
let bonus = (bonusHours * rate) / 2;
let overTimeHours = hours - (regHour + bonusHours);
let overTime = overTimeHours * rate;
let salary = 0;

if (hours <= 7) {
  salary = regPay;
} else if (hours <= 9) {
  salary = regPay + bonus;
} else if (hours > 9) {
  salary = regPay + bonus + overTime;
} else {
  salary = "No Salary Yet Sorry! 🥲";
}
console.log(salary); */

// Asking 3 Random Numbers From The Users

// Function to check if all numbers are positive
/* function areAllPositive(numbers) {
  for (let num of numbers) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
}

// Function to check if all numbers are negative
function areAllNegative(numbers) {
  for (let num of numbers) {
    if (num >= 0) {
      return false;
    }
  }
  return true;
}

// Function to calculate sum of numbers
function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Function to calculate multiplication of numbers
function calculateMultiplication(numbers) {
  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
}

// Get input from user
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));
const number3 = parseFloat(prompt("Enter the third number:"));

const numbers = [number1, number2, number3];

if (areAllPositive(numbers)) {
  console.log("Sum:", calculateSum(numbers));
  console.log("Multiplication:", calculateMultiplication(numbers));
} else if (areAllNegative(numbers)) {
  console.log("Only negatives");
} else {
  console.log("Sum:", calculateSum(numbers));
} */

// Function to check if all numbers are positive
/* function areAllPositive(numbers) {
  for (let num of numbers) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
} */

// Function to check if all numbers are negative
/* function areAllNegative(numbers) {
  for (let num of numbers) {
    if (num >= 0) {
      return false;
    }
  }
  return true;
} */

// Function to sum of numbers
/* function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Function for multiplication numbers
function multiplicationNum(numbers) {
  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
} */

// Get input from users

/* const number1 = parseFloat(prompt("Please Enter First Number Here!"));
const number2 = parseFloat(prompt("Please Enter Second Number Here!"));
const number3 = parseFloat(prompt("Please Enter Third Number Here!"));

const numbers = [number1, number2, number3]; */

// Now IF Statment Goes Here

/* if (areAllPositive(numbers)) {
  console.log("Sum is:", calculateSum(numbers));
  console.log("Multiplications is", multiplicationNum(numbers));
} else if (areAllNegative(numbers)) {
  console.log("Only Nagative Numbers");
} else {
  console.log("Sum:", calculateSum(numbers));
}
 */

// Task- Finding Out Odd or Even Number

// Function to check if a number is positive and divisible by 2

/* function checkNumber() {
  if (isNaN(number)) {
    console.log("Invalid Input Please Enter a Valid Number");
    return;
  }
  if (number < 0) {
    console.log("Please Enter a Positive Number");
    checkNumber();
  } else if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}
const number = Number(prompt("Give me a number"));
checkNumber(); */

// Function to check if a number is positive and divisible by 2
/* function checkNumber() {
  const userInput = prompt("Enter a number:"); // Ask for user input

  const number = parseFloat(userInput); // Convert the input to a number

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  if (number < 0) {
    console.log("Please enter a positive number.");
    checkNumber(); // Ask for input again
  } else if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Call the function to start the program
checkNumber(); */

// #1 Loop Assignments
// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)
/* for (let num = 0; num < 100; num += 2) {
  console.log(num);
}
 */
