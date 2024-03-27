//Q1. Installation
//Ans: Installation completed
//Q2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some TypeScript today?”
var person = "Komal";
console.log("Hello ".concat(person, ", would you like to learn some TypeScript today?"));
//Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Komal";
//Print name in all small letters
console.log("In LowerCase: " + personName.toLowerCase());
//Print name in all Capital letters
console.log("In UpperCase: " + personName.toUpperCase());
//Print First letter of each word in Capital letter
console.log("In TitleCase: " + personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
