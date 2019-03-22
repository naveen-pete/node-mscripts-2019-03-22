const user = {
  name: 'john',
  email: 'a@b.c',
  age: 25,

  display() {
    console.log(this.name);
    console.log(this.email);
  }

  // es5
  // display: function () {
  //   console.log(this.name);
  //   console.log(this.email);
  // }
};

// console.log(user);
user.display();
