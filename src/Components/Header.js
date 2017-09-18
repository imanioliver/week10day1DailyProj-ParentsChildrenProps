import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Simon Says</h1>
                <p className="lead">Forget Simon...What do YOU want to say? (unless your name is Simon)</p>
            </div>
        </div>

    );
  }
}
