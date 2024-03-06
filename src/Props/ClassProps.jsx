import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1> mera naam {this.props.name} hye ur meri umar {this.props.name}</h1>
      </div>
    )
  }
}
