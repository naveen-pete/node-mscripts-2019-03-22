const yargs = require('yargs');
const users = require('./users');

console.log('Welcome to Users app');

yargs.command({
  command: 'add',
  description: 'Add user',
  handler(argv) {
    users.addUser(argv.name, argv.email);
  },
  builder: {
    name: {
      description: 'User name',
      type: 'string',
      demandOption: true
    },
    email: {
      description: 'User email',
      type: 'string',
      demandOption: true
    }
  }
});

yargs.command({
  command: 'list',
  description: 'List users',
  handler() {
    users.listUsers();
  }
});

yargs.command({
  command: 'read',
  description: 'Read user',
  handler(argv) {
    users.readUser(argv.name);
  },
  builder: {
    name: {
      description: 'User name',
      type: 'string',
      demandOption: true
    }
  }
});

yargs.command({
  command: 'remove',
  description: 'Remove user',
  handler(argv) {
    users.removeUser(argv.name);
  },
  builder: {
    name: {
      description: 'User name',
      type: 'string',
      demandOption: true
    }
  }
});

yargs.parse();
