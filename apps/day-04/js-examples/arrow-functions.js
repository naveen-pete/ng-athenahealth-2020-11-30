console.log('arrow functions');

// ES5 - before 2015 - function statement syntax
// function sum(a, b) {
//   return a + b;
// }

// ES5 - before 2015 - function expression syntax 
// (anonymous function syntax)
// var sum = function (a, b) {  // function reference
//   return a + b;
// };

// ES6 - arrow function syntax #1
// var sum = (a, b) => {  // function reference
//   return a + b;
// };

// ES6 - arrow function syntax #2 (lambda expression)
var sum = (a, b) => a + b;

// ES6 - arrow function syntax #3 (lambda expression)
var square = n => n * n;

var sayHello = () => {
  console.log('Hello welcome to ES6');
}

var result = sum(40, 50);
console.log('sum:', result);

result = square(5);
console.log('square:', result);

sayHello();