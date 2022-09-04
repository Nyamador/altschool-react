import React, { useState } from 'react';

function Counter() {
  let [value, setValue] = useState(1);

  const handleIncrement = (e) => {
    setValue(value + 1);
    console.log('Increment was clicked');
  };

  const handleDecrement = () => {
    if (value <= 0) {
      setValue((prev) => {
        console.log('prev:', prev);

        return 0;
      });
    } else {
      setValue(value - 1);
    }

    console.log('Decrement was clicked');
  };

  const handleReset = () => {
    setValue(0);
    console.log('Reset was clicked');
  };


  // effect
  React.useEffect(() => {
    // document.title = `I changed the state of my counter component`
    console.log('useEffect was called')
    // addEventListener
    // clean up
    // removeEventListener

  }, [value])

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;