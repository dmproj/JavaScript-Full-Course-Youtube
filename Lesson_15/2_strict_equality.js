//Strict equality "===" no coercion.

console.log("1" == 1); // true
console.log("1" === 1); // fslse

let strToNum = Number("1");
console.log(strToNum === 1);

console.log(null == undefined); // true
console.log(null === undefined); // false


