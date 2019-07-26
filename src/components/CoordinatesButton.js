// Code CoordinatesButton Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class CoordinatesButton extends React.Component{

  clickHandle = (event) => {
    // console.log(event.clientY)
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return (
      <div>
        <button onClick={this.clickHandle}>Coordinates</button>
      </div>

    );
  }
}
export default CoordinatesButton
