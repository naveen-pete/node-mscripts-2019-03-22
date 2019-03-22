const fs = require('fs')

// fs.writeFileSync('test.txt', 'Hi welcome');
// fs.appendFileSync('test.txt', ' I am naveen');
// const data = fs.readFileSync('test.txt');
// console.log(data);
// console.log(data.toString());

// const user = {
//   name: 'shiv',
//   email: 'a@b.c'
// };

// console.log(user);

// const userStr = JSON.stringify(user);
// console.log(userStr);
// fs.writeFileSync('user.json', userStr);

const data = fs.readFileSync('user.json');
const userStr = data.toString();
console.log(userStr);

const user = JSON.parse(userStr);
console.log(user.name);
