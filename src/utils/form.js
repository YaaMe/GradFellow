import React from 'react';
import { Row, Col, Form, Input, Select, Radio } from 'antd';

export const renderSelectOption = (value) => (
  <Select.Option key={value} value={value}>{value}</Select.Option>
);
export const renderRadioOption = ({title, value}) => (
  <Radio key={value} value={value}>{title}</Radio>
);

export const selectFormItem = (data) => {
  const { type } = data;
  switch (type) {
    case 'select':
      const { selectOptions } = data;
      return (
        <Select
          showSearch
          style={{ width: '100%' }}
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {selectOptions.map(renderSelectOption)}
        </Select>
      );
    case 'radio':
      const { radioOptions } = data;
      return (
        <Radio.Group>
          {radioOptions.map(renderRadioOption)}
        </Radio.Group>
      );
    default: return (<Input />);
  }
}

export const getFormItem = (info, getFieldDecorator) => {
  const { id, addField, title, options, col } = info;
  if (!addField) {
    return (
      <Col {...col} key={id}>
        <Form.Item>
          <div className="title">{title}</div>
          {getFieldDecorator(id, options)(selectFormItem(info))}
        </Form.Item>
      </Col>
    )
  }
  return (
    <Col {...col} key={id}>
      <Form.Item>
        <div className="title">{title}</div>
        {getFieldDecorator(id, options)(selectFormItem(info))}
      </Form.Item>
    </Col>
  )
};

export const getRow = (formItems, ids, getFieldDecorator) => formItems
  .map(item => getFormItem(item, getFieldDecorator));

export const getRegion = (formItems, idGroups, getFieldDecorator) => idGroups
  .map((ids, i) => (
    <Row key={i}>
      {getRow(formItems.filter(formItem => ids.indexOf(formItem.id) > -1), ids, getFieldDecorator)}
    </Row>
  ));
