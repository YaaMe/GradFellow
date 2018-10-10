import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const renderMenuItem = (menu, index) => (
  <Menu.Item key={index}>
    <Link to={`/${menu}`}>{menu}</Link>
  </Menu.Item>
)

export default ({ items }) => (
  <Header>
    <div className="logo"/>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      {items.map(renderMenuItem)}
    </Menu>
  </Header>
)
