import React, { Component } from 'react'
import axios from 'axios'

export class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postlist : []
      }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

  render() {
    return (
      <div>
        <h1>Postlist</h1>
      </div>
    )

  }
}


