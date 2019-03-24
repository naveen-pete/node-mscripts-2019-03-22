const api = require('./src/api');

api.getUser('Bret', (error, user) => {
  if (error) {
    return console.log('Error:', error);
  }

  console.log('user:', user);
});

api.getUser('aaa', (error, user) => {
  if (error) {
    return console.log('Error:', error);
  }

  console.log('user:', user);
})