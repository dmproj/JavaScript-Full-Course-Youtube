//COMPARISON OPERATORS IN JAVASCRIPT

const compare = 1 > 2
console.log(compare)
console.log(typeof compare)

//<= correct order
//>= correct order
//=> error!, symbol used by arrow function, () => {}

//in math:  ≠
//in JS:  !=


//if you need to store the result use a varibale
const res = 1 == 1
console.log(res)

// ==  loose equality, with coersion
// === strict equality, no coersion, types are verified  

//2 > 1 true, 0 < 1 also true, 5 >= 5 true, 4 != 4 false etc

console.log("" == 0) //true, Equal to: ==
console.log(0x14D != 333) //false, Not equal to: !=
console.log( null > 0 );  // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // OOPS! true
console.log(null == undefined); // true (special case)
console.log(0 == undefined) // false
console.log(NaN != NaN) //true, Strict not equal to: !==
console.log("a" > "A") //true, Greater than: >
console.log("Z" > "A") //true, Greater than: >
console.log("abcd" > "abce") // false
console.log(-Infinity < Infinity) //true, Less than: <
console.log(-0 >= 0) //true, OOPS! Greater than or equal to: >=
console.log(5.49 <= 5.490) //true, Less than or equal to: <=

console.log(3 + 2 > 4) //true,  do you remeber about precedence?
console.log("1" == 1) // true
console.log(1 >= "1") // true
console.log("001" == 1) // true
console.log(false == "0"); // true (coercion)
console.log(false == "false"); // false
console.log(+"" == 0); //true,  0 (unary plus  operator)

console.log(0.1 + 0.2 == 0.3); // false (floating point precision)
console.log((0.1).toFixed(20)); // "0.10000000000000000555"
console.log((0.2).toFixed(20)); // "0.20000000000000001110"
console.log((0.3).toFixed(20)); // 0.29999999999999998890








