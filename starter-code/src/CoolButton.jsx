import React, { Component } from 'react'

class CoolButton extends Component{
  render(){
let strClass = "button is-small"
strClass += this.props.isDanger ? " is-rounded my-class is-danger" : "";
strClass += this.props.isSuccess ? " is-success" : "";
    return(
      <button className={ strClass }> {this.props.children} </button>

    )
  }
}

export default CoolButton;