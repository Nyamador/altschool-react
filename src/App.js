import React from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Interval from './components/Interval';
import useBoolean from './hooks/useBoolean';
import useCounter from './hooks/useCounter';

// console.log(React.useState)





function App() {
  // const data = useCustomHook('books')
  // console.log('data:', data)
  const { value, toggle } = useBoolean(false);
  const {count, increment, decrement, reset, setCount} = useCounter(8)

  return (
    <>
      {value && <p>My name is Desmond</p>}
      <button onClick={toggle}>Click me to reveal</button>
      <div className='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => setCount(count * 3)}>Multiply By 3</button>

      </div>
      <Interval />
      <Countdown />
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
