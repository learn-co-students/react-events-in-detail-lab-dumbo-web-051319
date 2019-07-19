// Code DelayedButton Component Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class DelayedButton extends React.Component {

  handleClick = (e) => {
    e.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, e)
  }

  render () {
    // console.log(this.props.delay)
    return(
      <button onClick={this.handleClick}></button>
      )
  }

}
