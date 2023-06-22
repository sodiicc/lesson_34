import React, { Component } from 'react'

export default class Pet extends Component {
  render() {
    return (
      <span style={{fontSize: '40px', color: this.props.color}}>
        {this.props.pet}
      </span>
    )
  }
}
