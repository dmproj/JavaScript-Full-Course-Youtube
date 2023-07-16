//ASSIGNMENTS CHAINING IN JAVASCRIPT
//https://github.com/dmproj/JavaScript-Full-Course-Youtube

let x = (y = z = 0)
// let z = 0; equal to the above assignment
// let y = 0; equal to the above assignment
// let x = 0; equal to the above assignment
console.log("z", z)
// Output: z 0
console.log("y", y)
// Output: y 0
console.log("x", x)
// Output: x 0

let xx = (y = z = 0)
console.log(xx)
// all 3 variables will output: 0

let assigned1
let assigned2
let assigned3
let multipleAssignments = (assigned1 = assigned2 = assigned3 = 5 + 5)
console.log(multipleAssignments)
// Output: 10
console.log(assigned1)
// Output: 10
console.log(assigned2)
// Output: 10
console.log(assigned3)
// Output: 10

multipleAssignments = 6 + 6
assigned1 = multipleAssignments
assigned2 = assigned1
assigned3 = assigned2
console.log(multipleAssignments)
// Output: 12
console.log(assigned1)
// Output: 12
console.log(assigned2)
// Output: 12
console.log(assigned3)
// Output: 12