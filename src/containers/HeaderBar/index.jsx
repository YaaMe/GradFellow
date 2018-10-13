import React, { Component } from 'react';
import {connect} from 'react-redux';
import { logo } from 'css/imgs';
import { Row, Col, Layout, Menu, Button, Popover } from 'antd';
import { Link } from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import FellowPopover from 'containers/FellowPopover';

const { Header } = Layout;

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({});

class HeaderBar extends Component {
  state = {
    popover: false
  }

  clickLogin = e => {
    this.setState({ popover: !this.state.popover });
  }

  renderMenuItem = ({ title, route, options = {}}, index) => (
    <Menu.Item key={index} {...options}>
      <Link to={`/${route}`}>{title}</Link>
    </Menu.Item>
  )

  render() {
    const { items, user } = this.props;
    return (
      <Header>
        <Row>
          <Col span={3}>
            <img src={logo} alt="logo"/>
          </Col>
          <Col span={15}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['0']}
              style={{ lineHeight: '64px' }}
            >
              {items.map(this.renderMenuItem)}
            </Menu>
          </Col>
          <Col span={3} offset={3}>
            <Popover
              content={user.token ?
                       <FellowPopover onClose={this.clickLogin}/> :
                       <LoginForm onClose={this.clickLogin} />}
              placement="bottomRight"
              title="Hello"
              trigger="click"
              visible={this.state.popover}
            >
              <Button ghost onClick={this.clickLogin}>{user.token ? user.lastName : 'Login'}</Button>
            </Popover>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
