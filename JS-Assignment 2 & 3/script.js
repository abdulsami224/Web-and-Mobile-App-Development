
// ********* Chap 05 ***********

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter another number: "));

let sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is: " + sum);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

let sub = num1 - num2;
alert("The subtraction of " + num1 + " and " + num2 + " is: " + sub);

let mul = num1 * num2;  
alert("The multiplication of " + num1 + " and " + num2 + " is: " + mul);

let div = num1 / num2;  
alert("The division of " + num1 + " and " + num2 + " is: " + div);

let mod = num1 % num2;  
alert("The modulus of " + num1 + " and " + num2 + " is: " + mod);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


let a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;    
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a--;    
document.write("Value after decrement is: " + a + "<br>");
a = a % 3;
document.write("The remainder is: " + a);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. 

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("The cost of buying 5 tickets to a movie is: " + totalCost + " PKR");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

let table1 = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
    document.write(table1 + " x " + i + " = " + table1 * i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celsius1 = 25;
let fahrenheit1 = (celsius1 * 9/5) + 32;
document.write(celsius1 + "°C is " + fahrenheit1 + "°F<br>");

let fahrenheit2 = 70;
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart</h1>");
let price1 = 650;
let quanitem1 = 3;
let price2 = 100;
let quanitem2 = 7;
let shipchar = 100;

document.write("Price of item 1 is: " + price1 + "<br>");
document.write("Quantity of item 1 is: " + quanitem1 + "<br>");
document.write("Price of item 2 is: " + price2 + "<br>");
document.write("Quantity of item 2 is: " + quanitem2 + "<br>");
document.write("Shipping Charges is: " + shipchar + "<br>");
document.write("Total Cost of your order is: " + (price1 * quanitem1 + price2 * quanitem2 + shipchar) + " PKR");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write("<h1>Marks Sheet</h1>");

let totalMarks = 500;
let marksObtained = 373;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage is: " + (marksObtained / totalMarks) * 100 + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>");
let usd = 10;
let saudiRiyal = 25;
document.write("Total Currency in PKR: " + (usd * 104.80 + saudiRiyal * 28) + " PKR");
 
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let num = 10;
document.write("Result is: " + ((num + 5) * 10) / 2);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

document.write("<h1>The Age Calculator</h1>");

let currentYear = 2025;
let birthYear = 2005;
document.write("Your age is: " + (currentYear - birthYear) + " years old");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>");

let radius = 20;
let circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br>");
let area = 3.142 * radius * radius;
document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>");

let snack = "chocolate";
let currentAge = 20;
let maxAge = 65;
let amountPerDay = 3;
let totalAmount = (maxAge - currentAge) * amountPerDay;

document.write("Favorite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalAmount + " " + snack + " to last you until the ripe old age of " + maxAge);

// ********* Chap 06-09 ***********

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h1>Result</h1>");

let a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("------------------------------<br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write ("Now the value of a is: " + a + "<br>");
document.write("<br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

let a = 2, b = 1;
let result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result);

// 
//    EXPLANATION:
// --a = 1
// --a - --b = 1 - 0 = 1
// --a - --b + ++b = 1 + 1 = 2
// --a - --b + ++b + b-- = 2 + 1 = 3

// 3. Write a program that takes input a name from user &
// greet the user.

let yourName = prompt("Enter your name: ");
alert("Hello " + yourName + "! How are you?");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let tabnum = prompt("Enter a number: ", 5);

for (let i = 1; i <= 10; i++) {
    document.write(tabnum + " x " + i + " = " + tabnum * i + "<br>");
}
    
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let sub1 = prompt("Enter the name of the first subject: ");
let sub2 = prompt("Enter the name of the second subject: ");
let sub3 = prompt("Enter the name of the third subject: "); 

let eachSubTotalMarks = 100;
let totalMarks = eachSubTotalMarks * 3;
let marksObtained1 = parseInt(prompt("Enter the marks obtained in " + sub1 + ": "));
let marksObtained2 = parseInt(prompt("Enter the marks obtained in " + sub2 + ": "));
let marksObtained3 = parseInt(prompt("Enter the marks obtained in " + sub3 + ": "));

let totalObtainedMarks = marksObtained1 + marksObtained2 + marksObtained3;
let percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + eachSubTotalMarks + "</td><td>" + marksObtained1 + "</td><td>" + (marksObtained1 / eachSubTotalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + eachSubTotalMarks + "</td><td>" + marksObtained2 + "</td><td>" + (marksObtained2 / eachSubTotalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + eachSubTotalMarks + "</td><td>" + marksObtained3 + "</td><td>" + (marksObtained3 / eachSubTotalMarks * 100) + "%</td></tr>");
document.write("<tr><td></td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + percentage + "%</td></tr>");
document.write("</table>");

// ********** CHAPTER 14 - 16 **********

// 1. Declare an empty array using JS literal notation to store
// student names in future.

let students = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

let students = new Array();

// 3. Declare and initialize a strings array.

let stringArr = ["Alice", "Bob", "Charlie"];

// 4. Declare and initialize a numbers array.

let numArr = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.

let boolArr = [true, false, true];

// 6. Declare and initialize a mixed array.

let mixedArr = ["Alice", 25, true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let eduQuals = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications</h1>");

for (let i = 0; i < eduQuals.length; i++) {
    document.write((i + 1) + ")  " + eduQuals[i] + "<br>");
}
    
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentNames = ["Michael", "Jhon", "Tony"];
let scores = [400, 420, 380];

for (let i = 0; i < studentNames.length; i++) {
    document.write("Score of " + studentNames[i] + " is " + scores[i] + " . Percentage: " + (scores[i]/500) * 100 + "%<br>");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colors = ["Red", "Green", "Blue"];

document.write("<h1>Colors</h1>");
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br><br>");

let addBegColor = prompt("Enter a color to add to the beginning: ");
colors.unshift(addBegColor);
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

let addEndColor = prompt("Enter a color to add to the end: ");
colors.push(addEndColor);
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

let addBegColor1 = prompt("Enter 1st color to add to the beginning: ");
let addBegColor2 = prompt("Enter 2nd color to add to the beginning: ");
colors.unshift(addBegColor1);
colors.unshift(addBegColor2);
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

colors.shift();
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

colors.pop();
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

let addColorIndex = parseInt(prompt("Enter the index at which you want to add a color: "));
let addColor = prompt("Enter the color you want to add: ");
colors.splice(addColorIndex, 0, addColor);
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

let delColorIndex = parseInt(prompt("Enter the index at which you want to delete a color: "));
let delColor = parseInt(prompt("Enter the number of colors you want to delete: "));
colors.splice(delColorIndex, delColor);
for (let i = 0; i < colors.length; i++) {
    document.write(colors[i] + " \,  ");
}
document.write("<br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let scores = [320, 230, 480, 120];
document.write("Score of Students: ");
for (let i = 0; i < scores.length; i++) {
    document.write(scores[i] + " \,  ");
}
document.write("<br>");
scores.sort();
document.write("Ordered Scores of Students: ");
for (let i = 0; i < scores.length; i++) {
    document.write(scores[i] + " \,  ");
}

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities: <br>");
for (let i = 0; i < cities.length; i++) {
    document.write(cities[i] + " \,  ");
}
document.write("<br><br>");
let selectedCities = cities.splice(2, 3);
document.write("Selected Cities: <br>");
for (let i = 0; i < selectedCities.length; i++) {
    document.write(selectedCities[i] + " \,  ");
}
    
// 12. Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)

let arr = ["This ", " is ", " my ", " cat"];

document.write(arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

for (let i = 0; i < queue.length; i++) {
    document.write("Out: <br>" + queue[i] + "<br>")
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

let stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

for (let i = stack.length - 1; i >= 0; i--) {
    document.write("Out: <br>" + stack[i] + "<br>")
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");


// *********** CHAP 17-20 ************

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let twodarr = [[], []]; 

// 2. Declare and initialize a multidimensional array
//representing the following matrix:

let twodarr = [[0, 1, 2, 3], 
                [1, 0, 1, 2], 
                [2, 1, 0, 1]];

//3. Write a program to print numeric counting from 1 to 10.

let count = 1; 

for (i = count; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let table2 = parseInt(prompt("Enter a number of multiplication table: "));
let noOfTime = parseInt(prompt("Enter the length of the multiplication table: "));

for (let i = 1; i <= noOfTime; i++) {
    document.write(table2 + " x " + i + " = " + table2 * i + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i = 0; i < fruits.length; i++) {    
    document.write(fruits[i] + "<br>");
}
document.write("<br>");

for (let i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a.
document.write("Counting: <br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b.
document.write("Reverse Counting: <br>");
for(let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c.
document.write("Even: <br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d.
document.write("Odd: <br>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e.
document.write("Series: <br>");
for(let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let found = false;

for (let i = 0; i < A.length; i++) {
    if (search === A[i]) {
        document.write(A[i] + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}
    if (!found) {
        document.write("We are sorry. " + search + " is not available in our bakery");
    }

// 8. Write a program to identify the largest number in the
// given array.

A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");

let largest = A[0];

for (let i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.write("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.

A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");

let smallest = A[0];

for (let i = 0; i < A.length; i++) {
    if(A[i] < smallest) {
        smallest = A[i];
    }
}
document.write("The smallest number is: " + smallest);

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + " \, ");
    }
}

// 1. Simulating an ATM Withdrawal System
Category: Banking & Finance
📌 Problem:
 Create a simple ATM withdrawal system where:
The user enters the amount they want to withdraw.
The system checks if the amount is available in the ATM.
The system dispenses the correct number of bills in denominations of 100, 500, and 1000.
If the amount is not a multiple of 100, show an error message.


let available1000 = 10;
let available500 = 20;
let available100 = 30;

document.write("<h1>ATM Withdrawal System</h1> <br>");

let input = prompt("Enter the amount to withdraw (or 'exit' to quit):");

if (input.toLowerCase() === 'exit') {
    document.write("Exiting the ATM. Thank you!");
} else {
    let amount = parseInt(input);

    if (isNaN(amount) || amount % 100 !== 0) {
        document.write("Error: Enter a valid amount (multiple of 100).");
    } else {
        let bills1000 = Math.min(Math.floor(amount / 1000), available1000);
        amount -= bills1000 * 1000;

        let bills500 = Math.min(Math.floor(amount / 500), available500);
        amount -= bills500 * 500;

        let bills100 = Math.min(Math.floor(amount / 100), available100);
        amount -= bills100 * 100;

        if (amount > 0) {
            document.write("Error: Cannot dispense the exact amount.");
        } else {
            document.write("You received:<br>");
            if (bills1000) document.write(bills1000 + " x 1000<br>");
            if (bills500) document.write(bills500 + " x 500<br>");
            if (bills100) document.write(bills100 + " x 100<br>");
        }
    }
}

//  2. Parking Lot Fee Calculator
Category: Transportation & Management
📌 Problem:
 Create a parking fee calculator where:
The first 2 hours are free.
After 2 hours, the fee is $5 per hour.
If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.

document.write("<h1>Parking Lot Fee Calculator</h1>");

let hours = parseInt(prompt("Enter the number of hours parked:"));
let fee = 0;

if (isNaN(hours)) {
    document.write("Error: Enter a valid number of hours.");
}
else {
    if (hours <= 2) {
    document.write("No fee for the first 2 hours.");
    } 
    else if (hours > 10) {
        fee = 50;
        document.write("Your Parking Fee is: $" + fee);
    }
    else {
        fee = (hours - 2) * 5;
        document.write("Your Parking Fee is: $" + fee);
    }
}

// 3. Car Speed Fine System
Category: Transportation & Management
📌 Problem:
 Create a parking fee calculator where:
The first 2 hours are free.
After 2 hours, the fee is $5 per hour.
If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.

document.write("<h1>Car Speed Fine System</h1>");

let speed = parseInt(prompt("Enter the speed of the car:"));


if (isNaN(speed)) {
    document.write("Error: Enter a valid speed.");
}
else {
    if (speed <= 60) {
        document.write("Safe Speed.");
    }
    else if (speed > 60 && speed <= 80) {
        document.write("Warning: You are driving above the safe speed.");
    }
    else {
        let fine = (speed - 80) * 1;
        document.write("Your fine is: $" + fine);
    }
}
    
// 4. Bank Loan Interest Calculator
Category: Finance & Banking
📌 Problem:
 Create a loan interest calculator where:
If the loan amount is ≤ $10,000, the interest rate is 5%.
If it's between $10,001 and $50,000, the interest rate is 7%.
If it's above $50,000, the interest rate is 10%.
Calculate the total amount to be paid back.

document.write("<h1>Bank Loan Interest Calculator</h1>");

let loanAmount = parseInt(prompt("Enter the loan amount:"));

if (isNaN(loanAmount)) {
    document.write("Error: Enter a valid loan amount.");
}
else {
    if (loanAmount <= 10000) {
        let interestRate = 0.05;
        let interest = loanAmount * interestRate;
        let totalAmount = loanAmount + interest;
        document.write("Interest Rate: 5%<br>");
    }
    else if (loanAmount > 10000 && loanAmount <= 50000) {
        interestRate = 0.07;
        interest = loanAmount * interestRate;
        totalAmount = loanAmount + interest;
        document.write("Interest Rate: 7%<br>");
    }
    else {
        interestRate = 0.1;
        interest = loanAmount * interestRate;
        totalAmount = loanAmount + interest;
        document.write("Interest Rate: 10%<br>");
    }

    document.write("Total Amount: $" + totalAmount);
}

// 5. Toll Booth System - Vehicle Fee Collection
📌 Problem:
 A toll booth collects different tolls based on vehicle type:
Car → $5
Truck → $10
Bus → $8
If a vehicle doesn't have enough money, let it pass but record unpaid tolls.

document.write("<h1>Toll Booth System</h1>");

let vehicleType = prompt("Enter the type of vehicle (car, bus, or truck):");

let haveMoney = confirm("Do you have money to pay the fee?");

if (vehicleType.toLowerCase() === "car" && haveMoney) {
    let fee = 5;
    document.write("Your fee is: $" + fee);
}
else if (vehicleType.toLowerCase() === "bus" && haveMoney) {
    fee = 8;
    document.write("Your fee is: $" + fee);
}
else if (vehicleType.toLowerCase() === "truck" && haveMoney) {
    fee = 10;
    document.write("Your fee is: $" + fee);
}
else if (!haveMoney) {
    document.write("OK go. But you count in unpaid tolls.");
    unpaidTolls += 1;
}
else {
    document.write("Error: Enter a valid vehicle type.");
}

// 6. School Exam Result Processing 
📌 Problem:
 A class of 3 students takes 4 subjects. Generate random marks, find average & grade.

document.write("<h1>School Exam Result Processing</h1>");

let student1Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
let student2Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
let student3Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

function calculateAverage(marks) {
    let total = marks[0] + marks[1] + marks[2] + marks[3];
    let average = total / marks.length;
    return average;
}

function grade(average) {
    if (average >= 80) {
        return "A";
    }
    else if (average >= 70) {
        return "B";
    }
    else if (average >= 60) {
        return "C";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "Fail";
    }
}

let student1Average = calculateAverage(student1Marks);
let student2Average = calculateAverage(student2Marks);
let student3Average = calculateAverage(student3Marks);

let student1Grade = grade(student1Average); 
let student2Grade = grade(student2Average); 
let student3Grade = grade(student3Average); 

document.write("Student 1 Average: " + student1Average + "<br>");
document.write("Student 2 Average: " + student2Average + "<br>");
document.write("Student 3 Average: " + student3Average + "<br><br>");

document.write("Student 1 Grade: " + student1Grade + "<br>");
document.write("Student 2 Grade: " + student2Grade + "<br>"); 
document.write("Student 3 Grade: " + student3Grade + "<br>");

// 7. Student Exam Pass/Fail System 
📌 Problem Statement:
 A university has 8 students who get random exam scores between 0 - 100. A student:
Passes if score ≥ 50
Fails if score < 50
 The program calculates how many students passed and failed.

document.write("<h1>Student Exam Pass/Fail System</h1>");

let pass = 0;
let fail = 0;

let uniStud = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
            Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
            Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
            Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
];

for (let i = 0; i < uniStud.length; i++) {
    if (uniStud[i] >= 50) {
        document.write("Student " + (i + 1) + " has passed the exam.<br>");
        pass++;
    }
    else {
        document.write("Student " + (i + 1) + " has failed the exam.<br>");
        fail++;
    }
}

document.write("Total Pass: " + pass + "<br>");
document.write("Total Fail: " + fail + "<br>");

// 8. Cinema Ticket Booking System 
📌 Problem Statement:
 A cinema has 10 seats available. Customers randomly book seats and pay based on age:
Children (0-12) → $5
Adults (13-59) → $10
Seniors (60+) → $7
 The program books seats until they are full and calculates total revenue.

let tickets = 10;
let price = 0;

for (let i = 0; i < tickets; i++) {
    let age = parseInt(prompt("Enter your age:"));

    if (age < 0) {
        document.write("Invalid age. Please enter a valid age.<br>");
    }
    else if (age <= 12) {
        price += 5;
        document.write("The ticket price for a child is $5.<br>");
    }
    else if (age <= 59) {
        price += 10;
        document.write("The ticket price for an adult is $10.<br>");
    }
    else {
        price += 7;
        document.write("The ticket price for a senior is $7.<br>");
    }
}

document.write("Total price for all tickets: $" + price);

// 9. Parking Lot Fee Calculation
📌 Problem Statement:
 A parking lot has 15 cars parked. Each car is parked for a random number of hours (1-10 hours).
Up to 3 hours → $3 per hour
4-6 hours → $2 per hour
7+ hours → $1 per hour
 The program calculates total parking fees collected.

document.write("<h1>Parking Lot Fee Calculator</h1>");

let parkingLot = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
                  Math.floor(Math.random() * 10) + 1 ];

let fee = 0;

for (let i = 0; i < parkingLot.length; i++) {

    document.write("Car " + (i + 1) + " has parked for " + parkingLot[i] + " hours<br>");

    if (parkingLot[i] <= 3) {
        fee += 3 * parkingLot[i];
    }
    else if (parkingLot[i] > 3 && parkingLot[i] <= 6) {
        fee += 2 * parkingLot[i];
    }
    else {
        fee += 1 * parkingLot[i];
    }
}

document.write("Total fee: $" + fee);

// 10. Library Late Fee System 
📌 Problem Statement:
 A library has 20 borrowers who return books late by 1-15 days.
1-5 days late → $2 per day
6-10 days late → $3 per day
11+ days late → $5 per day
 The program calculates total late fees collected.

document.write("<h1>Library Late Fee System</h1>");

let lateFee = 0;

let books = [Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
             Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
];

for (let i = 0; i < books.length; i++) {

    document.write("Book " + (i + 1) + " has " + books[i] + " days late.<br>");

    if (books[i] >= 1 && books[i] <= 5) {
        lateFee += 2 * books[i];
    }
    else if (books[i] > 5 && books[i] <= 10) {
        lateFee += 3 * books[i];
    }
    else {
        lateFee += 5 * books[i];
    }
}

document.write("Total late fee: $" + lateFee);

// 11. Gas Station Fuel Dispenser ⛽💰
📌 Problem Statement:
 A gas station serves 10 cars, each requesting a random amount of fuel (5-50 liters).
Up to 20 liters → $1.2 per liter
21-35 liters → $1.0 per liter
36+ liters → $0.8 per liter
 The program calculates total revenue from all cars.

document.write("<h1>Gas Station Fuel Dispenser</h1>");

let cars = [
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
];

let total = 0;

for (let i = 0; i < cars.length; i++) {

    document.write("Car " + (i + 1) + " has " + cars[i] + " liters of gas.<br>");

    if ( cars[i] <= 20) {
        total += 1.2 * cars[i];
    }
    else if (cars[i] > 20 && cars[i] <= 35) {
        total += 1 * cars[i];
    }
    else {
        total += 0.8 * cars[i];
    }
}

document.write("Total: $" + total);
