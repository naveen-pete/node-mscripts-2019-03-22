// es5
// function sum(a, b) {
//   return a + b;
// }

// function expression
// const sum = function (a, b) {
//   return a + b;
// };

// arrow function 1
// const sum = (a, b) => {
//   return a + b;
// };

// arrow function 2
const sum = (a, b) => a + b;

// const square = (x) => x * x;

// arrow function 3
const square = x => x * x;

const c = sum(10, 20);
console.log('c:', c);

console.log(square(5));
