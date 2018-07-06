import React, { PureComponent } from 'react';

export default class Spinner extends PureComponent {
  render() {
    return (
      <div>
        <i className="fas fa-home fa-2x fa-pulse" /> <span>Loading...</span>
      </div>
    );
  }
}
