const user = {
  name: 'Yuto',
  hello() {
    console.log(this.name);
  }
};

user.hello(); // 'Yuto'

