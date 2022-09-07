import React, { useState } from 'react';

import useCountdown from '../hooks/useCountDown';

export default function Countdown() {
  const [intervalValue, setIntervalValue] = useState(10);
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 0,
      countStop: 9999,
      intervalMs: intervalValue,
      isIncrement: true
    });

  const handleChangeIntervalValue = (event) => {
    setIntervalValue(Number(event.target.value));
  };
  return (
    <div>
      <p>Count: {count}</p>

      <input
        type="number"
        value={intervalValue}
        onChange={handleChangeIntervalValue}
      />
      <button onClick={startCountdown}>start</button>
      <button onClick={stopCountdown}>stop</button>
      <button onClick={resetCountdown}>reset</button>
    </div>
  );
}
