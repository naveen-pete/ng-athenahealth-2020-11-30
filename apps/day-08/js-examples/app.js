console.log('destructuring assignment');

const c = {
  id: 10,
  name: 'def',
  city: 'bengaluru'
};

// const name = c.name;
// const city = c.city;

const { name, city } = c;

console.log('name:', name);
console.log('city:', city);
