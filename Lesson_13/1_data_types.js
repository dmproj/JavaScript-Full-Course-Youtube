//DATA TYPES IN JAVASCRIPT

//weak, dynamic, coercion
let x = 10; // number
x = "High " + 5; // string
x = true; // boolean
x = x + 5; // Coerced back to number
console.log(x); // output 6

//typeof operator
console.log(typeof "a"); //without parenthesis
console.log(typeof("a")); //with parenthesis typeof()

// NUMBERS
let number = 555; //int
console.log(typeof number);
console.log(typeof number);
number = 5.55;  //float
console.log(typeof number);

//INFINITY
let positiveInfinity = Infinity;
console.log(positiveInfinity);
console.log(typeof positiveInfinity);
console.log(10 / 0);

//-INFINITY
let negativeInfinity = -Infinity;
console.log(negativeInfinity);
console.log(typeof negativeInfinity);
console.log(-10 / 0);

//NaN
let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber); // NUMBER!

console.log(0 / 0);
console.log(Math.sqrt(-1));
console.log("Hi" * 5);
console.log(NaN ** 0); // !!! = 1

//BIGINT
const bigNumber = 1234567890n;
const anotherBigNumber = BigInt("98765432109876543210");
console.log(typeof bigNumber); // "bigint"
console.log(typeof anotherBigNumber); // "bigint"

//STRING
let singleQuotes = 'single quotes, '; // single quotes
let doubleQuotes = "double quotes, "; // double quotes
let backticks = `backticks, `; // backticks
const val = "literals, ";
let tempLit = `temp
late ${val}`; // template literals
let stringConstructor = new String("string constructor"); //string constructor
let concatination = "conca" + "tenation, "; // concatenation
console.log(
  singleQuotes,
  doubleQuotes,
  backticks,
  tempLit,
  stringConstructor,
  concatination
);
console.log(typeof tempLit);

//BOOLEAN
const YES = true;
const NO = false;
const compare = YES > 0 || 1 < NO; // "||" OR Operator
console.log(YES, NO, compare);
console.log(typeof NO);

//NULL
console.log(null === null); // true
console.log(null === undefined); // false
console.log(null === false); // false
console.log(null === 0); // false
console.log(null === ""); // false
console.log(Number(0)); // converted to a number, nil

let myVariable = null;
console.log(myVariable); // null
console.log(typeof myVariable); // BUG!!! It's a primitive, not an object

//UNDEFINED
let noValue;
console.log(noValue); // undefined
noValue = "defined"; // value is assigned
console.log(noValue);

//SYMBOL
const symbol1 = Symbol();
const symbol2 = Symbol("description");
console.log(symbol1, symbol2);

const myObj = {};
const symbolKey1 = Symbol("key");
const symbolKey2 = Symbol("key");
myObj[symbolKey1] = "value";
myObj[symbolKey2] = "value";
console.log(myObj);

//OBJECT
const obj = {};
const arr = [];
console.log(typeof obj, typeof arr);

//SUMMARY
const int = 4;
const flt = 4.1;
const bigInt = 12323n;
const str = "string";
const bool = true;
const nil = null;
const notdefined = undefined;
const symb = Symbol();
const obj1 = { a: 1 };
console.log(
  typeof int,
  typeof flt,
  typeof bigInt,
  typeof str,
  typeof bool,
  typeof nil,
  typeof notdefined,
  typeof symb,
  typeof obj1
);
console.log(typeof console.log);
