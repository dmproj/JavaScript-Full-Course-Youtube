//TYPES COERCION IN JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

// COERCION TO STRING USING toString() FUNCTION
let toStr
toStr = 42 // assigned number
console.log(typeof toStr)
toStr = toStr.toString() // number converted to string
console.log(typeof toStr)
toStr = true // assigned boolean value
console.log(typeof toStr)
toStr = toStr.toString() // boolean converted to string
console.log(typeof toStr)

const digit = 14
const noMutation = digit.toString()
console.log(typeof digit)
console.log(typeof noMutation)

const obj = { name: "John", age: 30, city: "New York" };
console.log(typeof obj); // object
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30,"city":"New York"}
console.log(typeof jsonString); // string


// COERCION TO NUMBER USING Number() FUNCTION
let toNum
toNum = "42" // assigned string
console.log(typeof toNum)
toNum = Number(toNum) // string converted to number
console.log(typeof toNum)
toNum = true // assigned boolean value
console.log(typeof toNum)
toNum = Number(toNum) // boolean converted to number
console.log(typeof toNum) 

console.log(Number(true))
console.log(Number(false))
console.log(Number("true"))

let myStr = "789"
console.log(new Number(myStr)) // new Number()

console.log(Number(NaN)) // NaN
console.log(Number(undefined)) // NaN
console.log(Number("")) // 0
console.log(Number(" ")) // 0
console.log(Number(null)) // 0

// COERCION TO BOOLEAN USING Boolean() FUNCTION
console.log(Boolean(false));       // false
console.log(Boolean(0));       // false
console.log(Boolean(''));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));     // false

console.log(Boolean(1));       // true
console.log(Boolean('Hello')); // true
console.log(Boolean({}));      // true


