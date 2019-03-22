const fs = require('fs');

const userFileName = 'users.json';

const addUser = (name, email) => {
  const users = loadUsers();
  const duplicateUser = users.find(u => u.name === name);

  if (duplicateUser) {
    console.log('User already exists.')
  } else {
    users.push({
      name,
      email
    });

    saveUsers(users);

    console.log('New user added!');
  }
}

const listUsers = () => {
  console.log('List of users');
  const users = loadUsers();
  users.forEach(u => console.log(u.name));
};

const readUser = name => {
  const users = loadUsers();
  const user = users.find(u => u.name === name);

  if (user) {
    console.log('Name:', user.name);
    console.log('Email:', user.email);
  } else {
    console.log('User not found!');
  }
};

const removeUser = name => {
  const users = loadUsers();

  const filteredUsers = users.filter(u => u.name !== name);

  if (users.length > filteredUsers.length) {
    saveUsers(filteredUsers);
    console.log('User removed!');
  } else {
    console.log('User not found!');
  }
}

const saveUsers = users => {
  const usersString = JSON.stringify(users);
  fs.writeFileSync(userFileName, usersString);
}

const loadUsers = () => {
  try {
    const data = fs.readFileSync(userFileName);
    const users = JSON.parse(data.toString());
    return users;
  } catch (e) {
    return [];
  }
}

module.exports = {
  addUser,
  listUsers,
  readUser,
  removeUser
};
