// ES6 Object Destructuring
console.log('destructuring');
  
// const person = {
//   name: 'Loki Poki',
//   age: 99,
//   location: {
//     city: 'Pasig',
//     temp: 42
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// Challenge
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);


//Array destructuring
const address = ['15 Combee Lane', 'Clifton', 'New Jersey', '07012']
// const [street, city, state, zip] = address;

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`)


//Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, sPrice, mPrice, lPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}.`);
