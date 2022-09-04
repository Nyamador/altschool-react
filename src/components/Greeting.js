// const Greeting = () => {
//   const [name, setName] = useState('');
//   console.log(name);
//   return (
//     <div>
//       <h2>I am a Greeting Component</h2>
//       {name !== '' ? <h4>My name is {name}</h4> : <h4>No Name</h4>}
//     </div>
//   );
// };

import React from 'react';

export default function Greeting(prop) {
  // let stateDispatcher = React.useState('Desmond')
  // const name = stateDispatcher[0]
  // const changeName = stateDispatcher[1]

  // destructured
  const [name, setName] = React.useState('Desmond');



  const pElement = <p>Hello Greeting, My name is {name}</p>
  return (
    <div onClick={() => setName('AltSchool')}>{ pElement}</div>
  )
}
