// Code CoordinatesButton Component Here
import React from 'react'
import { log } from 'util';



export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        
    }

    render() {
        return (
            <div><button onClick={this.handleClick}>Click Me Also</button></div>
        )
    }
}








