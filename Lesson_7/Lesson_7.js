// JAVASCRIPT VARIABLES

let age
age = 26 // number
let streetname = "11 lane" // string
console.log(streetname)

let isStudent = true // boolean
let person = {name: "John", age: 25} // object
let numbers = [1, 2, 3, 4]  // array

let myName = "Mike", hisName = "Boris", herName = "Jessica"

let penColor = "red"
let glassTint = "green"
let shadowColor = "gray"

let myNick = "Mike"
,
hisNick = "Boris"
, herNick = "Jessica"

let myBooks = "Book1 and Book2"
let heabyBox = "25kg"
let myLuckyNumber = 25

myBooks = "Book1 and Book2 so and Book3"
console.log(myBooks)

//variables values reasignment
myBooks = myLuckyNumber
console.log(myBooks)

//good naming
let houseNumber
let totalDistance

//avoid
let a, b, c // and so on

//good examples
let newUser
let registeredUser

//bad examples
let nameASD
let some888

//aditional variables types
let $ = "1 USD"
let title = "The price is "
let _ = "= "
console.log(title + _ + $)

//you will get an error
// let my var
// let my-str
// let 2txt

//you caan use non-latin symbols

//reserved words
// let let
// let if

//error - for const, value must be assigned when declared
// const PI

//block scoped
{
  let example = "no meaning"
  const noChnages = "also no meaning"
}

//use capital letters for values that are constants
const PI = 3.14
const BLUE = "#0000FF"

const sky = BLUE

//reassigned value for let
let score = 100
score = 150

//no reassignments for const
const Pi = 3.14
// Pi = 314 // error

//all varibales are case sensetive
let newVar = 1
let newVAR = 1 // 2 different varibales

// var
varExample = "will be no error"
console.log(varExample)


// variable can be declared only once
// let newVar <- error, was declared at line 89