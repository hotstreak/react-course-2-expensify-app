console.log('redux 101'); 
import { createStore } from 'redux';

//Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

//Reducers
const countReducer = (state = { count: 0 }, action) => {
  console.log('running');

  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);
// const store = createStore((state = { count: 0 }, action) => {
//   console.log('running');

//   switch (action.type) {
//     case 'INCREMENT':
//       // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//       return {
//         count: state.count + action.incrementBy
//       };
//     case 'DECREMENT':
//       // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//       return {
//         count: state.count - action.decrementBy
//       };
//     case 'SET':
//       return {
//         count: action.count
//       }  
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }

// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - an object that gets sent to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'DECREMENT'
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10  
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// }); 
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 777 }));


