/*
// Chap 01

// 1. Write a script to greet your website visitor using JS alert box.

alert("Hello Greetings!");

// 2. Write a script to display following message on your web page:

alert("Error! Please Enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break);

alert("Welcome to JS land.. \nHappy Coding! ");

// 4. Write a script to display following messages in sequence:

alert("Welcome to JS land..")
alert("Happy Coding! \nPrevent this page from creating additional dialogs.")

// 5. Generate the following message through browser’s developer console:

alert("Hello.. I can run JS through my web browrer's console")
*/

/* 
// Chap 02

 // 1. Declare a variable called username.

 var username;

 // 2. Declare a variable called myName & assign to it a string that represents your Full Name.

 var myName = "Abdul Sami";

// 3. Write script to
    a) Declare a JS variable, titled message.

    var message;

    b) Assign “Hello World” to variable message

    var message = "Hello World";

    c) Display the message in alert box.

     alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

    age = 19;
    profession = 'Web Developer';

    alert(myName);
    alert(age);
    alert(profession);

// 5. Write a script to display the following alert using one JS variable:   

 var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
 alert(pizza);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

 var email = "abdulsami24@gmail.com";
 alert("My Email Address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

 var book = "A smarter way to learn JavaScript.";
 alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS.

 console.log("Yah! I can write HTML content through JavaScript");

 Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

 var store = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert(store);
 console.log(store);
*/


/*
 // // Chap 03

 // 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

 var age = 19;
 alert("I am " + age + " years old");

 // 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

let visitCount = localStorage.getItem("visitCount");

        if (visitCount === null) {
            visitCount = 1;
        } else {
            visitCount = parseInt(visitCount) + 1;
        }

        localStorage.setItem("visitCount", visitCount);

        alert("You have visited this site " + visitCount + " times.");
    
// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

 var birthYear = 2005;
 console.log("My Birth Year is " + birthYear +
            "\n Datatype of my variable is " + typeof(birthYear)
 );

// 4. A visitor visits an online clothing store
//  www.xyzClothing.com . Write a script to store in variables
//  the following information:
//  a. Visitor’s name
//  b. Product title
//  c. Quantity i.e. how many products a visitor wants to
//  order
//  Show the following message in your browser: “John
//  Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

 var visitorName = "Jhon Doe";
 var productTitle = "T-shirt";
 var quantity = 5;
 document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");

*/

/*
 // // Chap 04

 // 1. Declare 3 variables in one statement.

    var var1 , var2 , var3;

 // 2. Declare 5 legal & 5 illegal variable names.

 Legal

 var userName
 var _age
 var $price
 var totalMarks
 var student_Grade

 Illegal

 var 1stNumber;
 var var;
 var total marks;
 var my age;
 var @amount;

//  3. Display this in your browser
//  a) A heading stating “Rules for naming JS variables”
//  b) Variable names can only contain ______, ______,
//  ______ and ______.
//  For example $my_1stVariable
//  c) Variables must begin with a ______, ______ or
//  _____. For example $name, _name or name
//  d) Variable names are case _________
//  e) Variable names should not be JS _________


 document.write("<h2>Rules for naming JS variables</h2>");
 
 document.write( "Variable names can only contain numbers, $ and _ . For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS Reserved word.");
*/

/*
 // Chap 9 To 11

 // 1. Write a program to take “city” name as input from user. If
//  user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights”

 var city = prompt("Enter the city : ");
     if (city == 'karachi') {
         alert("Welcome to the City of Lights");
     }
     else
         alert("Wrong City!");

 // 2. Write a program to take “gender” as input from user. If the
//  user is male, give the message: Good Morning Sir. If the
//  user is female, give the message: Good Morning Ma’am.

 var gender = prompt("Enter your Gender : ");
 if (gender == 'male') {
     alert("Good Morning Sir!");
 } else {
     alert("Good Morning Ma'am!");
 }

//  3. Write a program to take input color of road traffic signal
//  from the user & show the message according to this table:
//  Signal color Message
//  Red Must Stop
//  Yellow Ready to move
//  Green Move now

 var inputColor = prompt("Enter the color : ");
 if (inputColor == 'red')
     alert("Must Stop");
 else if (inputColor == 'yellow')
     alert("Ready to Move");
 else
     alert("Move now");

//  4. Write a program to take input remaining fuel in car (in
//  litres) from user. If the current fuel is less than 0.25litres,
//  show the message “Please refill the fuel in your car”

 var fuel = Number(prompt("Enter the remaining fuel : "));
 if (fuel <= 0.25)
     alert("Please refill the fuel in your car");
 else
     alert("Fuel is Enough");

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a)
 var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");  // true
 }

//b) 
 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }

//c) 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");  // true
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");  // true
}


//d) 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e) 
if (true){
alert("True");
}
if (false){
alert("False");
}


// f) 
if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

document.write("<h1>Marksheet</h1>");

var obtMarks = Number(prompt("Enter the Obtained Marks : "));
var totalMarks = 300;
var perc = (obtMarks * 100) / totalMarks;

if (perc >= 80){
    var grade = 'A-one';
    var remarks = 'Excellent';
}
else if (perc >= 70){
    var grade = 'A';
    var remarks = 'Good';
}
else if (perc >= 60){
    var grade = 'B';
    var remarks = 'You need to improve';
}
else {
    var grade = 'F';
    var remarks = 'Sorry';
}

document.write("Total Marks : " + totalMarks + "<br>");
document.write("Obtained Marks : " + obtMarks + "<br>");
document.write("Percentage : " + perc + "<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNum = 7;
var guessNum = Number(prompt("Guess the Number : "));
if (guessNum === secretNum){
    alert("Bingo! Correct Guess");
} 
else if (guessNum+1 === secretNum) {
    alert("Close Enough to the correct answer.");
}
else {
    alert("Wrong Guess!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = Number(prompt("Enter a number : "));
if (num % 3 == 0){
    alert("Number is divisible by 3");
}
else {
    alert("Number is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num1 = Number(prompt("Enter a Number : "));
if (num1 % 2 == 0){
    alert("Given number is even");
} 
else {
    alert("Given number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = Number(prompt("Enter a Temperature : "));
if (temp > 40)
    alert("It is too hot outside.");
else if (temp > 30)
    alert("The Weather today is Normal.");
else if (temp > 20)
    alert("Today’s Weather is cool.");
else if (temp > 10)
    alert("OMG! Today’s weather is so Cool.");


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num3 = Number(prompt("Enter 1st number : "));
var num4 = Number(prompt("Enter 2nd number : "));

var operation = prompt("Enter Operation to Perform : ");
if (operation == '+') {
    var result = num3 + num4;
}
else if (operation == '-') {
    var result = num3 - num4;
}
else if (operation == '*') {
    var result = num3 * num4;
}
else if (operation == '/') {
    var result = num3 / num4;
}
else if (operation == '%') {
    var result = num3 % num4;
}
else {
    alert("Wrong Operation");
}

alert("Result is = " + result);

// Chap 12 & 13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a single character:");

if (char >= '0' && char <= '9') {
    alert("You entered a NUMBER.");
} else if (char >= 'A' && char <= 'Z') {
    alert("You entered an UPPERCASE LETTER.");
} else if (char >= 'a' && char <= 'z') {
    alert("You entered a LOWERCASE LETTER.");
} else {
    alert("You entered a special character or symbol.");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

    var num5 = Number(prompt("Enter 1st num : "));
    var num6 = Number(prompt("Enter 2nd num : "));

    if (num5 > num6){
        alert("1st number is greater")
    }
    else if (num5 < num6){
        alert("2nd number is greater")
    }
    else{
        alert("Numbers are equal")
    }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num7 = Number(prompt("Enter a number:"));

if (num7 > 0) {
    alert("The number is POSITIVE.");
} else if (num7 < 0) {
    alert("The number is NEGATIVE.");
} else {
    alert("The number is ZERO.");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char1 = prompt("Enter a Single Character") 

if (char1 >= 'a' && char1 <= 'z'){

    if(char1 == 'a' || char1 == 'e' || char1 == 'i' || char1 == 'o' || char1 == 'u'){
        alert("Character is Vowel");
    }
    else{
        alert("Character is Not Vowel");
    }
}
else{
    alert("Not a character")
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var storePass = prompt("Enter the Password to store : ");
var userPass = prompt("Please! Enter the Password : ");

if(userPass == ''){
    alert("Please enter your password");
}
else if (userPass === storePass){
    alert("“Correct! The password you entered matches the original password.")
}
else{
    alert("Incorrect Password");
}

// 6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}
alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = Number(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time! Enter between 0000 and 2359.");
}
*/