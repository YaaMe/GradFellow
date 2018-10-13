import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fellowPopover } from 'config';

export default class FellowPopover extends Component {
  renderItem = ({ title, route }, index) => (
    <Link to={`/${route}`}>{title}</Link>
  )
  render() {
    return (
      <div>
        {fellowPopover.map(this.renderItem)}
      </div>
    )
  }
}

