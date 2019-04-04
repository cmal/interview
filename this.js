var fullName = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName: function() {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName()); // undefined
var test = obj.prop.getFullName;
console.log(test()); // language, if in browser; undefined, if in node script
console.log(test.call(this)); // test() is the same as test.call(this)
console.log(this); // window object, if in browser; {} if in node script


var name = 'window';
var Tom = {
  name: 'Tom',
  show: function() {
    console.log(this);
    console.log(this.name);
  },
  wait: function() {
    var fun = this.show;
    this.show();
    fun();
    console.log('this:',this);
  }
}
Tom.wait();




console.log('==============');
function fun() {
  this.a = 0;
  this.b = function() {
    console.log(this.a);
  };
}

fun.prototype = {
  b: function() {
    this.a = 20;
    console.log(this.a);
  },
  c: function() {
    this.a = 30;
    console.log(this.a);
  }
};

var my_fun = new fun();
my_fun.b();
my_fun.c();
console.log(my_fun);

var my_fun2 = new fun;
console.log(my_fun2.a);
my_fun2.__proto__.c();
console.log(my_fun2.a);
console.log(my_fun.__proto__.a);

