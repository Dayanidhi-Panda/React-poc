import React, { useState } from 'react'

export default function UsestateHookwithArray() {

    const [items, setItem] = useState([])
    const addItem = () =>{
        setItem([...items, {
            id:items.length,
            value: Math.floor(Math.random() * 10 )*1
        }])
    }

  return (
    <div>
      <button onClick={addItem}>add a number</button>
      <ul>
        {items.map(item => (
            <li key={item.length}> {item.value}</li>
        ))}
      </ul>
    </div>
  )
}
