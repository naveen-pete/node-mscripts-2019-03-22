console.log('Begin')

const getUser = (id, callback) => {
  console.log('getting user. please wait...');
  // setTimeout(cb, delay)
  setTimeout(() => {
    callback(undefined, {
      id,
      name: 'krish',
      email: 'krish@a.com'
    });
    // callback('Unable to contact the server')
  }, 3000);

}

const cbUser = (error, user) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log('user:', user);
}

const user = getUser(
  1,
  cbUser
);

const sum = 10 + 20;
console.log('sum:', sum);

console.log('End')