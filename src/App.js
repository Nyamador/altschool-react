import React from 'react';
import './App.css';
import useBoolean from './hooks/useBoolean';
import useCounter from './hooks/useCounter';

// console.log(React.useState)





function App() {
  // const data = useCustomHook('books')
  // console.log('data:', data)
  const { value, toggle } = useBoolean(false);
  const {count, increment, decrement, reset} = useCounter(8)

  return (
    <>
      {value && <p>My name is Desmond</p>}
      <button onClick={toggle}>Click me to reveal</button>
      <div className="counter">
        <h1>{ count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      {/* <div>
        <Greeting />
        <Greeting />
        <Counter />
        <GitHubUser />
      </div> */}
    </>
  );
}

export default App;
