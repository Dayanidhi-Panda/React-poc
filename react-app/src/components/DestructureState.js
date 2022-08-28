import React, { Component } from 'react'

export class DestructureState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    const {name, age}=this.props;
    return (
      <div>
        <h1>Hi i am {name} is {age}</h1>
      </div>
    )
  }
}


