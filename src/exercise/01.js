// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// ... spread operator allows the merge of objects
// function countReducer(state, action) {
//   // return state + action;
//   return {
//     ...state,


//     // Support both the function API and the object API for calling code
//     ...(typeof(action) === 'function' ? action(state) : action),
//   };
// }

function countReducer(state, action) {
  // return state + action;
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step};
    case 'DECREMENT':
      return {count: state.count - action.step};
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  };
}

function Counter({initialCount = 0, step = 1}) {

  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  //const [count, changeCount] = React.useReducer(countReducer, initialCount);
  
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)

  // 2) Extra Credit
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // });

  // const {count} = state;
  // const increment = () => setState({count: count + step});

  // 3) Extra Credit
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // });

  // const {count} = state;
  // const increment = () => setState(currentState => ({count: currentState.count + step}));

  // 4) Extra Credit
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
