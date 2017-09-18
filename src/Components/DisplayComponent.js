import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.sayWhat}</h1>
      </div>
    );
  }
}
