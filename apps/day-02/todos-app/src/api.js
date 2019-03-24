const request = require('request');
const baseUrl = 'https://jsonplaceholder.typicode.com';

const getUser = (username, callback) => {
  // const url = baseUrl + '/users?username=' + username;
  const url = `${baseUrl}/users?username=${username}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      return callback('Unable to access the service');
    }

    if (!response.body[0]) {
      return callback('User not present');
    }

    const user = {
      id: response.body[0].id,
      name: response.body[0].name
    };
    callback(undefined, user);
  })
};

module.exports = {
  getUser
}