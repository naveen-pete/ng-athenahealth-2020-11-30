console.log('spread syntax');

// Arrays
const a = [10, 20];
const b = [30, 40];

console.log('a:', a);

const c = a.slice();
console.log('c:', c);

const d = [...a];
console.log('d:', d);

const e = ['x', 'y', ...b, 'z'];
console.log('e:', e);

const f = [...a, ...b];
console.log('f:', f);

// Objects
const g = {
  id: 10,
  name: 'iPhone 12'
};
console.log('g:', g);

const h = { ...g };
console.log('h:', h);

const i = {
  company: 'Apple',
  ...g,
  price: 120000
};
console.log('i:', i);
