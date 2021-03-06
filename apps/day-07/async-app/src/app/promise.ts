import { users, posts } from './data';

const getUser = (userName) => {
  return new Promise((resolve, reject) => {
    console.log('promise - getUser() started.');
    setTimeout(() => {
      const user = users.find(
        u => u.name === userName
      );

      if (!user) {
        reject('Could not find user.');
      } else {
        resolve(user);
      }

    }, 3000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    console.log('getPosts() started.');
    setTimeout(() => {
      const postsForUser = posts.filter(
        p => p.userId === userId
      );

      if (postsForUser.length <= 0) {
        reject('Could not find posts for user');
      } else {
        resolve(postsForUser);
      }

    }, 3000);
  });
}

// ES6/ES2015
export const doWork = () => {
  getUser('krish')
    .then((user: any) => {
      console.log('user:', user);
      return getPosts(user.id);
    })
    .then((posts: any) => {
      console.log('posts for user:', posts);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};