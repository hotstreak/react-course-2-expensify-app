import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database  as default };

// database.ref().on('value', (snapshot) => {
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//     });
// });

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Groceries',
//   note: 'Bought steaks!',
//   amount: 250000,
//   createdAt: 897987
// });

// database.ref('expenses').push({
//   description: 'Gas',
//   note: 'At Shell Libis',
//   amount: 1000,
//   createdAt: 897990
// });

// database.ref('expenses').push({
//   description: 'Paid Cable',
//   note: '',
//   amount: 129900,
//   createdAt: 897991
// });

// database.ref('expenses').push({
//   description: 'New shoes',
//   note: 'Got some Nike SBs',
//   amount: 25000,
//   createdAt: 99879211
// });