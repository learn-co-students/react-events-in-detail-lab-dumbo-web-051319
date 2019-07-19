// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

  passAlongCoordinates = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.passAlongCoordinates}> Click Me </button>
      </div>
    )
  }
}

export default CoordinatesButton;
