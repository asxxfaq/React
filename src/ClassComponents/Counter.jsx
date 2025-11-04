import React, { Component } from 'react'

export default class Counter extends Component {
    // step 1 initialize state
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    // Step2 define Methods to Modify State
    increment = () =>{
        this.setState({count: this.state.count + 1 });
    }
    decrement = () =>{
        this.setState({count: this.state.count - 1 });
    }
// Step 3 Render Ui 


    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2><br />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
