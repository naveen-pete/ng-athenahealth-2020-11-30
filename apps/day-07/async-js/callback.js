console.log('async js demo - callback');

const getUser = (username, cb) => {
  console.log('getUser() started...');

  // async function
  setTimeout(() => {
    // issue http request to the server
    const user = users.find(u => u.name === username);
    if (user) {
      cb(null, user);
    } else {
      cb('user not found', null);
    }

  }, 4000);

  // return undefined;
};

console.log('begin');

const username = 'ram1';
getUser(username, (error, user) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log('user:', user);
});   // 4 seconds

console.log('perform some other operation');

console.log('end');
