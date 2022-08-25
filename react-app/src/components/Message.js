import React, {Component} from "react";

export class Message extends Component{


    constructor(){
        super()
        this.state={
            message : "welcome visitor",
        }
    }

    changeMessage(){
        this.setState({
            message: "Thanks for subscribing"
        })
    }
    render(){
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
        </div>
        )
    }
}