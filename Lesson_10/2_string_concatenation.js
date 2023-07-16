///STRINGS CONCATENATION IN JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

// Example 1
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// Example 2
let invite = "Hello, ";
let customer = "Alice";
let greeting = invite + customer + "! Welcome to our website.";
console.log(greeting); // Output: "Hello, Alice! Welcome to our website."

// Example 3
let age = 25;
let info = "I am " + age + " years old.";
console.log(info); // Output: "I am 25 years old."

// Example 1: Concatenating strings with numbers
let num1 = 10;
let num2 = 5;
let result = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);
console.log(result); // Output: "The sum of 10 and 5 is 15"

// Example 2: Concatenating strings with boolean values
let isAdmin = true;
let message = "User is admin: " + isAdmin;
console.log(message); // Output: "User is admin: true"

let strExample = "My " + "car";
console.log(strExample); // My car

console.log( '3' + 2 ); // "32"
console.log( 2 + '3' ); // "23"
console.log(2 + 2 + '2' ); // "42", operations are from left to right
console.log('1' + 2 + 2); // "122", not "14"

//operations except concatenation using "+" will be be converted to a number
console.log( 10 - '5' ); // 5, converts '2' to a number
console.log('10' / '5' ); // 2, converts both operands to numbers