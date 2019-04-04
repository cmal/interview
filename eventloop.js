setImmediate(function(){
    console.log("setImmediate");
});

setTimeout(function(){
    console.log("setTimeout");
},0);

process.nextTick(function() {
  console.log('process.nextTick');
});
