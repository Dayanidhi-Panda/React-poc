import React, { useState } from 'react'

export default function Hookincrementdecrement() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    // const incrmentfive = () =>{
    //     for(let i=0; i<5; i++){      //it still return valu as incrementing by 1, to avoid this we will use prevstate.
    
    //         setCount(count+1)
    //     }
    // }

const incrmentfive = () =>{
        for(let i=0; i<5; i++){     
    
            setCount(prevstate => prevstate+1)
        }
    }

  return (
    <div>
      count is {count}

      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={incrmentfive}>increment 5</button>
    </div>
  )
}
