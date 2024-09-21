//question1 
document.write("<h1>Question1 Result </h1>"  + "<br>")
let a = 10;
document.write("The value of a is: " + a +"<br>");

document.write("The value of ++a is: " + (++a) +"<br>");
document.write("Now the value of a is: " + a +"<br>");

document.write("The value of a++ is: " + (a++) +"<br>");
document.write("Now the value of a is: " + a +"<br>");

document.write("The value of --a is: " + (--a) +"<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>")  ;


//question2
document.write("<h1>Question2 Result </h1>"  + "<br>")
let c = 2;
let b = 1;
var result = --c - --b + ++b + b--;
//            1  - 0   + 1   + 1 =3

document.write("Final value of c: " + c  + "<br>"); 
document.write("Final value of b: " + b + "<br>"); 
document.write("Final result: " + result + "<br>" + "<br>"); 



let name = prompt("please enter your name");
alert("hello" + name + "wlcome" + "<br>");




var number = prompt("Enter a number to display its multiplication table:", "5");


number = number ? parseInt(number) : 5;


document.write("<h3>Multiplication Table of " + number + ":</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}




//question6
document.write("<h1>Question6 Result </h1>"  + "<br>")
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarksEach = 100;


var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));


var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));


var totalMarksObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksEach * 3;
var percentage = (totalMarksObtained / totalMarks) * 100;


document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + marks1 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + marks2 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + marks3 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalMarksObtained + "</strong></td><td><strong>" + totalMarks + "</strong></td></tr>");
document.write("<tr><td colspan='3'><strong>Percentage: " + percentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");


