console.log('async js demo - promise');

const getUser = username => {
  console.log('getUser() started...');

  return new Promise((resolve, reject) => {
    // async function
    setTimeout(() => {
      // issue http request to the server
      const user = users.find(u => u.name === username);
      if (user) {
        resolve(user);
      } else {
        reject('user not found');
      }

    }, 4000);
  });
};

console.log('begin');

const username = 'ram1';
getUser(username)
  .then((user) => {
    console.log('user:', user);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

console.log('perform some other operation');

console.log('end');
