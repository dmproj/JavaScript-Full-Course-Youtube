// SEMICOLONS IN JAVASCRIPT

console.log("the first line " + 
"and the second one"
)

const foo = () => {
  console.log("inside foo")
  
  return ;
  "returned value"
};

console.log(foo()); // = return "returned value";
