///ASSIGNMENTS, LESSON 12, JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

// 1.
// Declare a variable count and initialize it to 5. Use the increment operator to increase 
// its value by 1 and assign it to a new variable increasedCount. 
// Print both count and increasedCount to the console.
let count = 5;
let increasedCount = count++;
console.log(count); // Output: 6
console.log(increasedCount); // Output: 5

// 2.
// Declare a variable quantity and set its initial value to 10. 
// Use the decrement operator to decrease its value by 1 and assign it to a new 
// variable decreasedQuantity. Print both quantity and decreasedQuantity to the console.
let quantity = 10;
let decreasedQuantity = quantity--;
console.log(quantity); // Output: 9
console.log(decreasedQuantity); // Output: 10

// 3.
// Declare a variable x and assign it a value of 3. Use the increment operator 
// to increase its value by 1 and assign it to x. Then use the decrement 
// operator to decrease its value by 1 and assign it to x again. 
// Print the final value of x to the console.
let x = 3;
x++;
x--;
console.log(x); // Output: 3

// 4.
// Declare a variable a and set its initial value to 7. Use the increment 
// operator to increase its value by 1 and assign it to a. Then use the 
// decrement operator twice to decrease its value by 2 and assign it to 
// a each time. Print the final value of a to the console.
let a = 7;
a++;
a--;
a--;
console.log(a); // Output: 6

// 5.
// Create a variable named b and assign it the initial value of 10.
// Subtract 1 from the current value of b using the compound assignment operator -=.
// Divide the current value of b by 3 using the compound assignment operator /=.
// Print the value of b to the console using console.log().
let b = 10;
b -= 1;
b /= 3;
console.log(b);