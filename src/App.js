import "./App.css"
import React from "react"
import Groceries from "./components/Groceries"
import DateComponent from "./components/DateComponent"

function App() {
  return (
    <>
      <p>My name is Desmond</p>
      <div>
        <DateComponent />

        <Groceries />
      </div>
    </>
  )
}

{
  /* <button>Hello</button>
      <p>World</p> */
}
{
  /* <DateComponent />
      <Groceries /> */
}
export default App
