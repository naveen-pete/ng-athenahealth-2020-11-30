console.log('app.js');

function sayHi() {
  console.log('hi');

  console.log('this:', this);
}

var c = {
  id: 10,
  name: 'Hari',

  show: function () {
    console.log('c.show() invoked.');
    console.log('this:', this);
  }
}

sayHi();

c.show();