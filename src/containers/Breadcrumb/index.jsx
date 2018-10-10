import React from 'react';
import { Breadcrumb } from 'antd';

const renderItem = (title, index) => (<Breadcrumb.Item key={index}>{title}</Breadcrumb.Item>)

export default ({ items }) => (
  <Breadcrumb style={{ margin: '16px 0'}}>
    {items.map(renderItem)}
  </Breadcrumb>
)
