import React, {Component} from "react";

export class Welcome extends Component{
    render(){
        return <h1>Hi {this.props.name} is {this.props.age}</h1>
    }
}