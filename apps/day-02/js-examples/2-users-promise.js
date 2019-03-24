console.log('Begin')

const getUser = (id) => {
  const p = new Promise((resolve, reject) => {
    console.log('getting user. please wait...');
    // setTimeout(cb, delay)
    setTimeout(() => {
      resolve({
        id: id,
        name: 'krish',
        email: 'krish@a.com'
      });
      // reject('Unable to contact the server')
    }, 3000);
  });

  return p;
};

const getTodos = (userId) => {
  const p = new Promise((resolve, reject) => {
    console.log('getting todos. please wait...');
    // setTimeout(cb, delay)
    setTimeout(() => {
      // resolve(
      //   ['todo1', 'todo2', 'todo3']
      // );
      reject('Unable to contact the server')
    }, 3000);
  });

  return p;
}

getUser(1)
  .then((user) => {
    console.log('then handler user:', user);
    return getTodos(user.id)
  })
  .then((todos) => {
    console.log('then handler todos:', todos);
  })
  .catch((error) => {
    console.log('catch handler error:', error);
  });

const sum = 10 + 20;
console.log('sum:', sum);

console.log('End')