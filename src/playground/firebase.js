import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_QSKQpEDZKxSKKtpruzk40ieh293fp6I",
  authDomain: "expensify-a4dfc.firebaseapp.com",
  databaseURL: "https://expensify-a4dfc.firebaseio.com",
  projectId: "expensify-a4dfc",
  storageBucket: "expensify-a4dfc.appspot.com",
  messagingSenderId: "753746032273"
};

firebase.initializeApp(config);

const database = firebase.database();

//Use push for arrays.  It also creates a unique id
database.ref('notes').push({
  title: 'Course topics',
  body: 'React Native, Node, Python'
});


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const theVal = snapshot.val();
//     console.log(`${theVal.name} is a ${theVal.job.title} at ${theVal.job.company}`);
// });

// setTimeout(() => {
//   database.ref('name').set('Loki');  
//   database.ref('age').set(5);
//   database.ref('job').set({
//     title: 'Database Administrator',
//     company: 'Apple'
//   });  

// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 3500);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }); 

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Ritchie Morales',
//   age: 46,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Pasig',
//     country: 'Philippines'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: '68.75 inches',
//   weight: '192 lbs'
// }).then(() => {
//   console.log('Attributes added!');
// }).catch((e) => {
//   console.log('Something went wrong!', e);
// });

// database.ref().update({
//   name: 'Loki',
//   age: 4,
//   job: 'Food Taster',
//   isSingle: null
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle was removed!');
//   })
//   .catch((e) => {
//     console.log('Something went wrong!', e);
//   });

