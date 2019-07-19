// Code CoordinatesButton Component Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class CoordinatesButton extends React.Component {

  clickHandler = (e) => {
    console.log(e.clientX)
    const coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.clickHandler}></button>
      )
  }

}
