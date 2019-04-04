
// 按位取反, undefined按位取反后是-1
// ~function sayHello(){
//   console.log('hello');
// }();
// hello
// -1

// ~function sayHello() {
//   console.log('hello');
//   return 13
// }();
// hello
// -14

function a() {
  for (var i = 0; i < 5; i ++) {
    // setTimeout(function() {
    //   console.log('a', i);
    // });
    (function(i) {
      setTimeout(function() {
        console.log('b', i);
      });
    })(i);
    // setTimeout(() => console.log('c', i));
  }
  return 1;  
}

function a() {
  for (let i = 0; i < 5; i ++) {
    setTimeout(function() {
      console.log('a', i);
    });
  }
  return 1;  
}
