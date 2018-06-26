const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Loki',
      age: 4
    });
    // reject('Something went wrong');
  }, 5000);
})

console.log('before');

// promise.then((data) => {
//   console.log('1', data);
// }).catch((error) => {
//   console.log('error: ', error);
// });

promise.then((data) => {
  console.log('1', data);
  return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');