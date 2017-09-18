import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-block">
            <h4 className="card-title">{this.props.sayWhat}</h4>

        </div>

      </div>
    );
  }
}
