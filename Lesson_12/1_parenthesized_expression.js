//GROUPING EXPRESSIONS IN A PARENTHESIZED EXPRESSION IN JAVASCRIPT

let resultLet = (2 + 3, 4 * 5, "hello");
console.log(resultLet);

const resultConst = (2 + 3, 4 * 5, "Hello");
console.log(resultConst);

const a = ((x = 5), x * 2, x - 1);
console.log(a);

const b = 5;
const y = (b * 2, b - 1);
console.log(b);
console.log(y);

for (let a = 1, b = 5, c; a < 9; a++, b++) {
  c = a * b;
  console.log(c);
}
