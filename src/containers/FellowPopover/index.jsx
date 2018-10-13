import React, { Component } from 'react';
import {connect} from 'react-redux';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { fellowPopover } from 'config';
import { logout } from 'actions/user';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

class FellowPopover extends Component {
  logout = e => {
    this.props.onClose();
    this.props.logout();
  }
  renderItem = ({title, route}) => {
    if (route) {
      return (<List.Item><Link to={`/${route}`} onClick={this.props.onClose}>{title}</Link></List.Item>)
    }
    return <List.Item><a onClick={this.logout}>Logout</a></List.Item>
  }
  render() {
    return (
      <div>
        <List
          size="small"
          renderItem={this.renderItem}
          dataSource={fellowPopover}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FellowPopover);
