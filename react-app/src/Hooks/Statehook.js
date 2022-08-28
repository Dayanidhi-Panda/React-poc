// import React, { Component } from 'react'

// export class Statehook extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }

//     increment(){
//         this.setState({
//             count: this.state.count+1
//         })
//     }
    
//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.increment()}>click on me {this.state.count}</button>
//       </div>
//     )
//   }
// }

///========Same we can achive through usestate hook in functional component====

import React , {useState}from 'react'

export function Statehook() {
    
    const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>click on me {count}</button>
    </div>
  )
}

export default Statehook;