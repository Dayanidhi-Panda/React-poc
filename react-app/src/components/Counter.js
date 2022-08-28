import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
       // this.state.count = this.state.count + 1 //it will not change the count value in screen

       //-------2nd method----
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count);
    

    //------third PaymentMethodChangeEvent(recomended)
     this.setState((prevState) =>({
        count: prevState.count + 5
     }))
    }
    

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        {/* <button onClick={this.increment.bind(this)}>Increment</button> //to avoid this scenario we can use arrow function */}
        <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
