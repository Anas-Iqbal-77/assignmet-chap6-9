
document.write("<h1>Question#1 result</h1>")
let city = prompt("Please enter your city name:");

    
    if (city == "karachi") {
        document.write("Welcome to the city of lights");
    } else {
        document.write("get lost"  + "<br>");
    }

    document.write(" <h1>Question#2 result </h1> ")
    let gender = prompt("Please enter your gender (male/female):");

    
    if (gender == "male") {
        document.write("good morning sir");
    }
    else if (gender=="female"){
        document.write("good morning mam")
    }

    document.write("<h1>Question#3 result</h1>")
    let signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

    
    if (signalColor == "red") {
        document.write("Must Stop");
    } else if (signalColor == "yellow") {
         document.write("Ready to move");
    } else if (signalColor == "green") {
        document.write("Move now");
    } else {
        console.log("Invalid color. Please enter Red, Yellow, or Green.");
    }


    document.write("<h1>Question#4 result</h1>")
    let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

    
    if (remainingFuel < 0.25) {
         document.write("Please refill the fuel in your car");
    } else {
        document.write("Fuel level is sufficient");
    }

    document.write("<h1>Question#6 result</h1>")

    let subject1 = parseInt(prompt("Enter marks for subject 1: "));
  let subject2 = parseInt(prompt("Enter marks for subject 2: "));
  let subject3 = parseInt(prompt("Enter marks for subject 3: "));

 
  let totalMarks = subject1 + subject2 + subject3;

 
  let percentage = (totalMarks / 300) * 100;

 
  let grade, remarks;
  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }

 
  document.write(" <h1>Total Marks:</h1> " + totalMarks + "<br>");
  document.write(" <h1>Percentage: </h1> " + percentage.toFixed(2) + "%" + "<br>");
  document.write(" <h1>Grade: </h1>" + grade + "<br>");
  document.write("<h1>Remarks:</h1> " + remarks + "<br>");


  document.write("<h1>Question#6 result</h1>")
  let secretNumber = 7;  

  
  let userGuess = parseInt(prompt("Guess the secret number between 1 and 10"));
  
  
  if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer");
  } 
  
  else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    document.write("Close enough to the correct answer");
  } 
 
  else {
    document.write("Wrong guess! Try again.");
  }


  document.write("<h1>Question#7 result</h1>")
  let number = parseInt(prompt("Enter a number to check if it's divisible by 3"));


if (number % 3 == 0) {
  document.write("The number is divisible by 3");
} else {
  document.write("The number is not divisible by 3");
}

document.write("<h1>Question#8 result</h1>")
let num = parseInt(prompt("Enter a number to check if it's even or odd"));


if (number % 2 === 0) {
  document.write("The number is even");
} else {
  document.write("The number is odd");
}


document.write("<h1>Question#11 result</h1>")
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");


if (operation == "+") {
    document.write("Result: " + (num1 + num2));
} else if (operation == "-") {
    document.write("Result: " + (num1 - num2));
} else if (operation == "*") {
    document.write("Result: " + (num1 * num2));
} else if (operation == "/") {
    if (num2 === 0) {
        document.write("Error: Division by zero is not allowed.");
    } else {
        document.write("Result: " + (num1 / num2));
    }
} else if (operation == "%") {
    document.write("Result: " + (num1 % num2));
} else {
    document.write("Invalid operation! Please enter one of the following: +, -, *, /, %");
}






    


