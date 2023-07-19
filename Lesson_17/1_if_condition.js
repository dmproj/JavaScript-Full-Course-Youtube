// "if, else-if, else" STATEMENTS IN JAVASCRIPT
// https://github.com/dmproj/JavaScript-Full-Course-Youtube

if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if none of the conditions are true
}

let lesson1 = 17;

if (lesson1 == 17) {
  console.log("The current lesson is 17");
}

//false, 0, NaN, null, undefined, ''

let example; // undefined
if (example) {
  console.log("displayed if true");
}

let lesson2 = 17;

if (lesson2 == 17) {
  console.log("The current lesson is 17");
} else if (lesson2 == 18) {
  console.log("next lesson is 18");
} else if (lesson2 == 19) {
  console.log("a future lesson will be 19");
} /// continue with else if as much as required


let lesson3 = 15;

if (lesson3 == 15) {
  console.log("The current lesson is 17");
} else if (lesson3 == 18) {
  console.log("it's the next lesson 18");
} else console.log("no idea!");
console.log(res);

let lesson4 = 15;

let res;
if ((res = lesson4 == 17)) {
  console.log("The current lesson is 17");
} else if (lesson4 == 18) {
  console.log("it's the next lesson 18");
} else console.log("ask me another!");
console.log(res);


if (5 > 6) {
  console.log("false");
} else if (7 < 6) {
  console.log("true");
} else console.log("the default block");

if (1) {
  console.log("1")
}

if (2) {
  console.log("2")
}

if (3) {
  console.log("3")
}

if (false != 1) {
  console.log("true")
}
