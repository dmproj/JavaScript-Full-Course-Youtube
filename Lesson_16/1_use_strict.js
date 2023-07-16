// "use strict" DIRECTIVE IN JAVASCRIPT
// https://github.com/dmproj/JavaScript-Full-Course-Youtube

//With "use stric":

//1.
//"silent" varibales declaration is not permitted, var let or const required
"use strict";
b = 10; // to avoid errors change to:  var b = 10
console.log(b);

//2.
"use strict";
//var b after declared is hoisted to this place
b = 10;
console.log(b);
//will work since "b" is redeclared(hoisted) using var and assigned value of 10
var b;
console.log(b);

//3. "use strict" affects the entire scope, including the inner scope of the function
"use strict";
function example() {
  b = 8;
  console.log(b);
}

example();

//4. "use strict" declaration can be nested in functions
function myStrictFunc() {
  "use strict";
  function inner() {
    return `use strict`;
  }
  return `with ${inner()}`;
}

console.log(myStrictFunc());

function unrestricted() {
  return "unrestricted function";
}

console.log(unrestricted());

//5. No duplicate parameter names allowed
"use strict";
function zz (x,x) {console.log(x,x)} // if "x" and "y" then code will work correctly
xx(1,2)

//6. Octals must be declared using "0o"
"use strict";
var c = 0123; 
//var c = 0o123;
console.log(c)
//7. The delete operator cannot be used to delete variables decalred with var, let, or const.
delete c;

//8. Some reserved words are not allowed with "use strict"
"use strict"
//eval 
//arguments
const implements = 5
console.log(implements)

