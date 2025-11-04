import React, { Component } from 'react'

export default class Mounting extends Component {
    componentDidMount() {
       
        console.log("Component Mounted!");
        
    }
  render() {
    return (
      <div>
        <p>Component has been Mounted</p>
      </div>
    )
  }
}
