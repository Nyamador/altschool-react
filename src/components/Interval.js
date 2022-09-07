import React, { useState } from 'react';

import useInterval from '../hooks/useInterval';

export default function Interval() {
  // The counter
  const [count, setCount] = useState(0);
  // Dynamic delay
  const [delay, setDelay] = useState(10);
  // ON/OFF
  const [isPlaying, setPlaying] = useState(false);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  );

  const handleChange = (event) => {
    setDelay(Number(event.target.value));
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <p>
        <label htmlFor="delay">Delay: </label>
        <input
          type="number"
          name="delay"
          onChange={handleChange}
          value={delay}
        />
      </p>
    </>
  );
}
