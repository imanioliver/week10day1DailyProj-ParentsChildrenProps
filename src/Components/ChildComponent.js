import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
            <button type="submit" onClick={this.props.onClick} className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus.">
            Wha'dya Say?
            </button>
        </div>
      </div>
    );
  }
}
