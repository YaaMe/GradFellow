import React, { Component } from 'react';
// import { connect } from 'redux';
import { Row, Col, Select, Button, Icon } from 'antd';
// import { Breadcrumb } from 'containers';
// <Breadcrumb items={['Home', 'List', 'App']}/>

// const mapStateToProps = ({ breadcrumb })

const Option = Select.Option;

const renderSelectOption = (value) => (
  <Option key={value} value={value}>{value}</Option>
)

export default class Home extends Component {
  handleChange = (value) => {
    console.log(`change ${value}`)
  }
  render() {
    const countries = ['--', 'China', 'India', 'Thailand', 'Indonesia'];
    const jobs = ['--', 'Software Engineer', 'System Analyst', 'Technical Support', 'Business Analyst'];
    return (
      <div className="Home">
        <div className="banner">lllllllarge image</div>
        <div className="selectForm">
          <Row className="Row">
            <Col span={3} offset={6}>I came from</Col>
            <Col span={6}>
              <Select
                showSearch
                defaultValue="--"
                style={{ width: 200 }}
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {countries.map(renderSelectOption)}
              </Select>
            </Col>
          </Row>
          <Row className="Row">
            <Col span={3} offset={6}>looking for</Col>
            <Col span={6}>
              <Select
                showSearch
                defaultValue="--"
                style={{ width: 200 }}
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {jobs.map(renderSelectOption)}
              </Select>
            </Col>
          </Row>
          <Row className="Row">
            <Col span={8} offset={8}>
              <Button className="main-button" type="primary">
                <Row>
                  <Col span={23}>
                    <label>Hear job stories from those<br/>
                      with similar backgrounds</label>
                  </Col>
                  <Col className="go-icon" span={1}>
                    <label><Icon type="right" /></label>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
