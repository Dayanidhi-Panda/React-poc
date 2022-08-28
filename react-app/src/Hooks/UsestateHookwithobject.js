import React, { useState } from 'react'

export default function UsestateHookwithobject() {

    const [name, setname] = useState({firstname: "", lastname: ""})
  return (
    <div>
      First Name: <input 
                    type="text" 
                    value={name.firstname} 
                    onChange={e => setname({...name, firstname:e.target.value})} />
                    
      Last Name :<input 
                    type="text" 
                    value={name.lastname}
                    onChange= {e => setname({...name, lastname:e.target.value})}
                    />
      <div>First Name is : {name.firstname}</div>
      <div>Last Name is : {name.lastname}</div>
    </div>
  )
}
