import React from 'react';
import './App.css';
import Counter from './components/Counter';
import GitHubUser from './components/GitHubUser';
import Greeting from './components/Greeting';

// console.log(React.useState)





function App() {
  return (
    <>
      <p>My name is Desmond</p>
      <div>
        <Greeting />
        <Greeting />
        <Counter />
        <GitHubUser />
      </div>
    </>
  );
}

export default App;
