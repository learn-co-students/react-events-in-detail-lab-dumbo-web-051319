// Code DelayedButton Component Here
import React from 'react'
import PropTypes from 'prop-types'

class DelayedButton extends React.Component {

  handleClick = (e) => {
    e.persist()
    setTimeout( () => this.props.onDelayedClick(e), this.props.delay)
  }

  render () {
    return(
      <button onClick={this.handleClick}/>
    )
  }
}

export default DelayedButton;
