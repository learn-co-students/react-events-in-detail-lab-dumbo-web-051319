// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClick = (event) => {
    // if you dont add event.persist() your event will be undefined due to event pooling
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    } , this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>DELAY</button>
      </div>
    )
  }

}
