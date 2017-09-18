import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-center w3-animate-bottom">{this.props.sayWhat}</h1>
      </div>
    );
  }
}
