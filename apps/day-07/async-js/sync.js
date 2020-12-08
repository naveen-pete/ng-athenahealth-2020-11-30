console.log('sync js demo');

const getUser = username => {
  // issue http request to the server
  const user = users.find(u => u.name === username);
  return user;
};

console.log('begin');

const username = 'ram';
const user = getUser(username);   // 4 seconds
console.log('user:', user);

console.log('perform some other operation');

console.log('end');