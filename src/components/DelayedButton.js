// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

  passAlongDelay = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.passAlongDelay}>
          Delay Button
        </button>
      </div>
    )
  }
}

export default DelayedButton;


//NOTE:
// template for setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
// OPTION 1(as function): setTimeout(function(){ alert("Hello"); }, 3000);
// OPTION 2(as arrow fn): setTimeout(() => { alert("Hello")}, 3000);
