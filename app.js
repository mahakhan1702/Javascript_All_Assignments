
//1
// var a = prompt("Enter a positive integer:");
//       var number = parseInt(a);

//       // Calculate round off, floor, and ceil values
//       var roundOff = Math.round(number);
//       var floorValue = Math.floor(number);
//       var ceilValue = Math.ceil(number);

//       document.write("Number: " + number + "<br>");
//       document.write("Round off value: " + roundOff + "<br>");
//       document.write("Floor value: " + floorValue + "<br>");
//       document.write("Ceil value: " + ceilValue);


//2
// var a = prompt("Enter a negative floating-point number:");
//       var number = parseFloat(a);

//       // Calculate round off, floor, and ceil values
//       var roundOff = Math.round(number);
//       var floorValue = Math.floor(number);
//       var ceilValue = Math.ceil(number);

//       document.write("Number: " + number + "<br>");
//       document.write("Round off value: " + roundOff + "<br>");
//       document.write("Floor value: " + floorValue + "<br>");
//       document.write("Ceil value: " + ceilValue);


//3
// var a = prompt("Enter a number:");
//       var number = parseFloat(a);

//       var absoluteValue = Math.abs(number);

//       document.write("Absolute value of " + number + " is " + absoluteValue);
   

//6
// var Number = Math.floor(Math.random() * 100) + 1;

//       document.write("Random Number: " + Number);

//7
// var a = prompt("Enter your weight:");
// var weight;

// // Remove any non-numeric characters from the user input
// weight = a.replace(/[^\d.]/g, '');

// document.write("Your weight is: " + weight + " kgs");

//8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

     
//       var a= prompt("Guess the secret number (between 1 and 10):");
//       var b = parseInt(a);

     
//       if (b === secretNumber) {
//         document.write("Congratulations! You guessed the secret number.");
//       } else {
//         document.write("Sorry, you did not guess the secret number. The secret number was: " + secretNumber);
//       }
   
//chapter 31 to 34
//1
// var currentDate = new Date();

// // Convert the date to a string
// var dateString = currentDate.toDateString();

// // Convert the time to a string
// var timeString = currentDate.toLocaleTimeString();

// document.write("Current Date: " + dateString + "<br>");
// document.write("Current Time: " + timeString);

//2


  /* // Get the current date
  var currentDate = new Date();

  // Get the current month index (0-11)
  var currentMonthIndex = currentDate.getMonth();

  // Array of month names
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  // Get the current month name from the array
  var currentMonthName = monthNames[currentMonthIndex];

  // Alert the current month name
  alert("Current Month: " + currentMonthName); */

  //3
//   var dayNames = [
//     "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
//   ];

//   // Get the current day index (0-6)
//   var currentDayIndex = currentDate.getDay();

//   // Get the current day name from the array and extract the first three letters
//   var currentDayLetters = dayNames[currentDayIndex].substring(0, 3);

//   // Alert the first three letters of the current day
//   alert("Current Day: " + currentDayLetters);


//4
// var currentDate = new Date();

//   // Get the current day index (0-6)
//   var currentDayIndex = currentDate.getDay();

//   // Check if it's Saturday (index 6) or Sunday (index 0)
//   if (currentDayIndex === 6 || currentDayIndex === 0) {
//     alert("It's Fun day");
//   } else {
//     alert("It's not Fun day");
//   }



//7
// var a = new Date();


// var b = a.getHours();

// // Check if it's before noon
// if (b < 12) {
//   // Alert "It's AM"
//   alert("It's AM");
// } else {
//   // Alert "It's PM"
//   alert("It's PM");
// }

//5
// var a = new Date();
// var b = a.getDate();
// if (b < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }


//8
// var a= new Date(2020, 11, 0);
// console.log(a);


//9
// var startingDate = new Date(2015, 5, 18); // Note: Month is 0-based, so 5 is for June


// var currentDate = new Date();

// // Calculate the time difference in milliseconds
// var timeDiff = currentDate.getTime() - startingDate.getTime();

// // Convert the time difference to days
// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// // Alert the number of days passed since 1st Ramadan
// alert("Number of days passed since 1st Ramadan: " + daysPassed);



//10
// var age = prompt("What is your age?");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// alert("Your birth year is: " + birthYear);


//13
// Define bill details
// var customerName = "John Doe";
// var currentMonth = "June";
// var numberOfUnits = 250;
// var chargesPerUnit = 15.75;
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = netAmountPayable * 0.1;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// // Round off amounts to 2 decimal places
// netAmountPayable = netAmountPayable.toFixed(2);
// latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);

// // Display bill details in the browser
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits + "</p>");
// document.write("<p>Charges per Unit: " + chargesPerUnit + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
// document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");
