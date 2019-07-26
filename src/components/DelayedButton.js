// Code DelayedButton Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class DelayedButton extends React.Component{
  onDelayHandler = (event) => {
    console.log(this.props);
    // this makes the event persistent
    event.persist()
    // const target = {e.target}                 //store the data you need in a variable
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render(){
    return(
      <button onClick = {this.onDelayHandler}>Delayed</button>
    )
  }
}
export default DelayedButton
