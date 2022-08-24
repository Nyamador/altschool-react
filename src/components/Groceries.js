import React from "react"

export default function Groceries() {
  // const myGroceries = ["Apple", "Banana", "Orange"]
  const myGroceries = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Orange",
    },
  ]

  const groceryLogger = (e) => {
    console.log(`You clicked the ${e.target.innerText} button`)
  }
  return myGroceries.map((grocery) => (
    <button key={grocery.id} onClick={groceryLogger}>
      {grocery.name}
    </button>
  ))
}
