// // 1. Online Course Enrollment Processor

// function processEnrollments(enrollments, courseStartDateStr) {
//     const courseStartDate = new Date(courseStartDateStr);

//     function capitalize(str) {
//         let words = str.split(" ");
//         let capitalizeWords = words.map(word => {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         });
//         return capitalizeWords.join(" ");
//     }

//     const result = enrollments.map(enroll => {
//         const name = capitalize(enroll.name);
//         const course = capitalize(enroll.course);
//         let fee = 0;

//         switch (course.toLowerCase()) {
//             case "web development":
//                 fee = 200;
//                 break;
//             case "data science":
//                 fee = 250;
//                 break;
//             case "graphic design":
//                 fee = 150;
//                 break;
//         }

//         const enrollDate = new Date(enroll.enrollmentDate);
//         const daysBefore = (courseStartDate - enrollDate) / (1000 * 60 * 60 * 24);

//         if (daysBefore > 30) {
//             fee = fee * 0.9;
//         }

//         const today = new Date();
//         const daysSinceEnrollment = Math.floor((today - enrollDate) / (1000 * 60 * 60 * 24));

//         return {
//             name: name,
//             course: course,
//             fee: `$${fee.toFixed(2)}`,
//             enrolledBefore: `${daysSinceEnrollment} days ago`
//         };
//     });

//     return result;
// }

// const enrollments = [
//   { name: "Abdul Sami", course: "web development", enrollmentDate: "2025-04-10" },
//   { name: "Jawwad Arif", course: "data science", enrollmentDate: "2025-05-01" },
//   { name: "Muhaimin", course: "graphic design", enrollmentDate: "2025-04-05" }
// ];

// const courseStartDate = "2025-05-20";

// console.log(processEnrollments(enrollments, courseStartDate));

// // ✅ 2. Employee Payroll System

// const employees = [
//    {
//     name: "Abdul Sami",
//     baseSalary: 80000,
//     hoursWorked: 34,
//     eligibleForBonus: false
//   },
//   {
//     name: "ali raza",
//     baseSalary: 90000,
//     hoursWorked: 45,
//     eligibleForBonus: true
//   },
//   {
//     name: "sara ahmed",
//     baseSalary: 120000,
//     hoursWorked: 40,
//     eligibleForBonus: false
//   },
//   {
//     name: "jawwad arif",
//     baseSalary: 140000,
//     hoursWorked: 46,
//     eligibleForBonus: true
//   }
// ];
// function processPayroll(employees) {
    
//     function capitalize(str) {
//         let words = str.split(" ");
//         let capitalizeWords = words.map(word => {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         });
//         return capitalizeWords.join(" ");
//     }

//     const payroll = employees.map(emp => {
//         const name = capitalize(emp.name);
//         const baseSalary = emp.baseSalary;
//         const hoursWorked = emp.hoursWorked;
//         const eligibleForBonus = emp.eligibleForBonus;
        
//         // Calculate the overtime pay
//         let overtimePay = 0;
//         if (hoursWorked > 40) {
//             let extraHours = hoursWorked - 40;
//             let hourlyRate = baseSalary / 40;
//             overtimePay = extraHours * hourlyRate * 1.5;
//         }

//         // Switch to apply a bonus
//         let bonus = 0;
//         switch (eligibleForBonus) {
//             case true:
//                 bonus = baseSalary * 0.1;
//                 break;
//             case false:
//                 bonus = 0;
//                 break;
//         }

//         // Total before tax
//         let totalSalary = baseSalary + overtimePay + bonus;
//         if (totalSalary > 100000) {
//             totalSalary *= 0.7;
//         }

//         return {
//             name: name,
//             finalSalary: totalSalary
//         };
//     });

//         // display the total payroll.
//         const totalPayroll = payroll.reduce((sum, emp) => 
//             sum + emp.finalSalary, 0
//         );

//         // Show result
//         console.log("Employee Payroll:");
//         payroll.forEach(emp => {
//             console.log(`${emp.name} - $${emp.finalSalary.toFixed(2)}`);
//         });
//         console.log(`\nTotal Payroll: $${totalPayroll.toFixed(2)}`);
// }

// processPayroll(employees);

// // ✅ 3. Temperature Converter

// function tempConverter(temp, unit) {

//     switch (unit.toLowerCase()) {
//         case 'c':
//             fahrenheit = (temp * 9 / 5) + 32;
//             console.log(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);
//             kelvin = temp + 273.15;
//             console.log(`Temperature in Kelvin: ${kelvin.toFixed(2)}`);
//             break;

//         case 'f':
//             celsius = (temp - 32) * 5 / 9;
//             console.log(`Temperature in Celsius: ${celsius.toFixed(2)}`);
//             kelvin = (temp - 32) * 5 / 9 + 273.15;
//             console.log(`Temperature in Kelvin: ${kelvin.toFixed(2)}`);
//             break;

//         case 'k':
//             celsius = temp - 273.15;
//             console.log(`Temperature in Celsius: ${celsius.toFixed(2)}`);
//             fahrenheit = (temp - 273.15) * 9 / 5 + 32;
//             console.log(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);
//             break;

//         default:
//             console.log("Invalid unit. Please enter 'C' for Celsius, 'F' for Fahrenheit, or 'K' for Kelvin.");
//             }
// }

// let temp = parseFloat(prompt("Enter the temperature:"));
// let unit = prompt("Enter the unit 'C' for Celsius, 'F' for Fahrenheit, or 'K' for Kelvin.:");

// tempConverter(temp, unit);

// // ✅ 4. Banking System (Using Switch Case, Functions, and Loops)

// const users = [
//     { name: "Sami", balance: 50000 },
//     { name: "Ali", balance: 60000 },
//     { name: "Talha", balance: 70000 },
//     { name: "Jawwad", balance: 80000 }
// ];

// function findUser(name) {
//     return users.find(user => user.name.toLowerCase() === name.toLowerCase());
// }

// function performAction(action, userName, amount, receiverName) {
//     const user = findUser(userName);
    
//     if(!user) {
//         return `${userName} not found.`;
//     }

//     switch(action.toLowerCase()) {
//         case "deposit":
//             user.balance += amount;
//             return `Deposited $${amount} into ${userName}'s account.`;

//         case "withdraw":
//             if(user.balance < amount) {
//                 return "Insufficient Balance.";
//             }
//             else {
//                 user.balance -= amount;
//                 return `Withdrawn $${amount} from ${userName}'s account.`;
//             }
        
//         case "transfer":
//             const receiver = findUser(receiverName);

//             if(!receiver) {
//                 return `${receiverName} not found.`;
//             }
//             else if (user.balance < amount) {
//                 return "Insufficient Balance.";
//             }
//             else {
//                 user.balance -= amount;
//                 receiver.balance += amount;
//                 return `Transferred $${amount} from ${userName}'s account to ${receiverName}'s account.`;
//             }
        
//             case "checkbalance":
//                 return `${userName}'s balance: $${user.balance}`;

//             default:
//                 return "Invalid action. Please use deposit, withdraw, transfer, or checkBalance.";
//     }
// }

// console.log(performAction("deposit", "Sami", 10000));
// console.log(performAction("withdraw", "Jawwad", 5000));
// console.log(performAction("transfer", "Talha", 5000, "Ali"));
// console.log(performAction("checkbalance", "Sami"));
// console.log(performAction("checkbalance", "Jawwad"));
// console.log(performAction("checkbalance", "Talha"));
// console.log(performAction("checkbalance", "Ali"));

// // ✅ 5. Multi-Currency Converter

// const exchangeRates = {
//     "USD": 1,
//     "EUR": 0.85, 
//     "GBP": 0.75, 
//     "JPY": 110.50
// };

// function convertCurrency(amountInUsd, targetCurrency) {
//     let convertedAmount = 0;

//     switch(targetCurrency.toUpperCase()) {
//         case "EUR":
//             convertedAmount = amountInUsd * exchangeRates.EUR; ;
//             break;
        
//         case "GBP":
//             convertedAmount = amountInUsd * exchangeRates.GBP;
//             break;

//         case "JPY":
//             convertedAmount = amountInUsd * exchangeRates.JPY;
//             break;

//         default:
//             return "Invalid target currency. Please use EUR, GBP, or JPY.";
//     }

//     return `Amount in ${targetCurrency}: ${convertedAmount.toFixed(2)}`;
// }

// console.log(convertCurrency(100, "EUR"));
// console.log(convertCurrency(130, "GBP"));
// console.log(convertCurrency(500, "JPY"));
