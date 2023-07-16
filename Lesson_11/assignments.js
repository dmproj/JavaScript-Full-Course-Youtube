///ASSIGNMENTS, LESSON 11, JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

//Operators Precedence

//1.
// Using the operators +, -, and = with unary plus, 
// create an expression that involves multiple variables and arithmetic operations. 
let a, b, c;
a = b = c = 2 + 3 - 4;

// 2. 
// Create an expression that demonstrates the precedence of the unary plus operator (+) 
// over addition (+). 
let str = "0.1"
let result = +str + 2;

//Assignments Chaining

// 1. 
// Use chaining to assign the same value to multiple variables. 
let x, y, z;
x = y = z = 10;

// 2. 
// Create a more complex chaining by assigning the result of an expression 
// to multiple variables. 
let p, r, s
let t = 111
p = r = s = 5 + 5 + (t = 5 - 4 ) * 2;

