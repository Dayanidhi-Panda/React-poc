import React from 'react'

// function Greet(){
//     return <h1>Hi Dayanidhi</h1>
// }

// ---------------------Using arrow function---------------
// export const Greet = () => <h1>Hi Dayanidhi</h1>
 export const Greet = props => <h1>Hi {props.name} is {props.age}</h1>

//export default Greet;