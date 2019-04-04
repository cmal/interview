let intervalId = setInterval(() => {
  console.log('log');
}, 1000);
intervalId.unref();
