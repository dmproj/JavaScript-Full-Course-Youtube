///ASSIGNMENTS, LESSON 14, JAVASCRIPT

//1. `toString()`
//Create a variable `num` with a numeric value and use the `toString()` method to convert it to a string. 
//Then, determine the type of the resulting string.
let num = 42;
let str = num.toString();
console.log(str); // Output: "42"
console.log(typeof str); // Output: "string"

//2. `Number()`
//Create a variable `str` with a string representation of a number and use the `Number()` 
//function to convert it to a numeric value. Then, determine the type of the resulting number.
let str1 = "42";
let num1 = Number(str1);
console.log(num1); // Output: 42
console.log(typeof num1); // Output: "number"

//3. `Boolean()`
//Create a variable `value` with a truthy or falsy value and use the `Boolean()` function 
//to convert it to a boolean value. Then, determine the type of the resulting boolean.
let value = 0; // Falsy value
let bool = Boolean(value);
console.log(bool); // Output: false
console.log(typeof bool); // Output: "boolean"
