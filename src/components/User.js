import React, { Component } from 'react'
import Pet from './Pet.js'
import CustomButton from './CustomButton.js'

export default class User extends Component {
  constructor() {
    super()
    this.state = {
      color: "red",
      count: 0
    }
  }
  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <span onClick={() => this.setState({ color: 'blue' })} className='username'>{this.props.name} </span>
        <span>has a </span>
        <Pet color='green' pet={this.props.pet} />
        <Pet color='#861' pet={this.props.pet} />
        <Pet color={this.state.color} pet={this.props.pet} />
        <h1>{this.state.count}</h1>
        {/* <input /> */}
        <div>
          <CustomButton name='increment' count={76} onBtnClick={(n) => this.setState({ count: this.state.count + n })} />
          <CustomButton name='decrement' onBtnClick={() => alert('hi')} />
          {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment</button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>decrement</button> */}
        </div>
        <div>
          <CustomButton name='+5' onBtnClick={() => this.setState({ count: this.state.count + 5 })} />
          <CustomButton name='-5' onBtnClick={() => this.setState({ count: this.state.count - 5 })} />
          <CustomButton name='set default' onBtnClick={() => this.setState({ count: 0 })} />
          {/* <button onClick={() => this.setState({ count: this.state.count + 5 })}>+5</button>
          <button onClick={() => this.setState({ count: this.state.count - 5 })}>-5</button>
          <button onClick={() => this.setState({ count: 0 })}>set default</button> */}
        </div>
      </div>
    )
  }
}

export class Item extends Component {
  render() {
    return (
      <div>Item</div>
    )
  }
}
