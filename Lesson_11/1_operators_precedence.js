//OPERATORS PRECEDENCE IN JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

//2 + 2 * 2
// Output: 6

//(2 + 2) * 2
// Output: 8

const simpleMath = 2 + 2 + 2 - 1
const sameMath = 1 - 2 + 2 + 2
console.log(simpleMath)
// Output: 5
console.log(sameMath)
// Output: 3

let mathOperation = 2 + 3 * 4
console.log(mathOperation)
// Output: 14

const keyOne = "1"
const keyTwo = "2"
const assignment = +keyOne + +keyTwo
console.log(assignment)
// Output: 3

let accumulator
let example = (accumulator = 5 + 5)
console.log(accumulator)
// Output: 10
console.log(example)
// Output: 10

let res = (true && false) || true
console.log(res)
// Output: true

let result = false || (true && false)
console.log(result)
// Output: false

let x = 2
let y = 3
let output = x + (y = 4) * 2
console.log(output)
// Output: 10
console.log(y)
// Output: 4