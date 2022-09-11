import * as React from 'react'

export default function useCustomHook(type) {
  // state
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (type === 'cars') {
      const cars = [
        { id: 1, name: 'Tesla' },
        { id: 2, name: 'BMW' },
        { id: 3, name: 'Jeep' },
      ]
      setData(cars)
    } else if (type === 'books') {
      const books = [
        { id: 1, name: 'Harry Potter' },
        { id: 2, name: 'Lord of the Rings' },
        { id: 3, name: 'Lion King' },
      ]
      setData(books)
    } else {
      setData([])
    }
  }, [type])

  // return data
  // return [data, setData]
  return {data, setData}
}