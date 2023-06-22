import React, { Component } from 'react'

export default class CustomButton extends Component {
  render() {
    return (
      <button style={{color: 'yellow', background: 'black', cursor: 'pointer', textTransform: 'uppercase', padding: '5px 10px', margin: '5px 10px'}} onClick={() => this.props.onBtnClick(this.props.count)}>{this.props.name}</button>
    )
  }
}
