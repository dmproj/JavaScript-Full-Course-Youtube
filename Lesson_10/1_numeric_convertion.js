//NUMERIC COERCION (CONVERSION) IN JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

//1. Implicit Coercion
let number = 10;
let string = "5";
let result = number + string;
console.log(result); // Output: "105" (string concatenation)

//2. Explicit Coercion:
let num = 10;
let str = "5";
let res = num + Number(str);
console.log(res); // Output: 15 (numeric addition)

//3.Non-numbers coercion
console.log(+""); // 0
console.log(+true); // 1

let dogs = "11";
let cats = "22";
console.log(dogs + cats); // 1122

//Unary Plus Operator (+) for Numeric Conversion:
let numString = "123";
let numValue = +numString;
console.log(typeof numValue); // Output: number

//Converting a String to a Numeric Value:
let numStr = "42";
console.log(typeof numStr);
let numVal = +numStr;
console.log(typeof numVal);
console.log(numVal); // Output: 42

//Converting Other Data Types to a Numeric Value:
let booleanValue = true;
let numericVal = +booleanValue;
console.log(numericVal); // Output: 1

let nullValue = null;
let numValue2 = Number(nullValue);
console.log(numValue2); // Output: 0

//Handling Invalid Numeric Conversions:
let str1 = "Hello";
let numericValue = +str1;
console.log(numericValue); // Output: NaN

//conversion, string to number
const keyOne = "1";
const keyTwo = "2";
console.log(+keyOne + +keyTwo); // Output 3