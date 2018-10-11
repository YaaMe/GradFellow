import React, { Component } from 'react';
import { Row, Col, Select, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { homeCountries, jobs } from 'config';
import { updateHomeCountry, updateDesiredJob } from 'actions/user';
// import { Breadcrumb } from 'containers';
// <Breadcrumb items={['Home', 'List', 'App']}/>

// const mapStateToProps = ({ breadcrumb })
import {homeBanner} from 'css/imgs';
const Option = Select.Option;

const renderSelectOption = (value) => (
  <Option key={value} value={value}>{value}</Option>
)

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
  changeHomeCountry: value => dispatch(updateHomeCountry(value)),
  changeDesiredJob: value => dispatch(updateDesiredJob(value))
});

class Home extends Component {
  changeHomeCountry = value => {
    this.props.changeHomeCountry(value);
  }
  changeDesiredJob = value => {
    this.props.changeDesiredJob(value);
  }
  goNext = e => {
    this.props.history.push('/StoriesCard');
  }
  render() {
    const { homeCountry, job } = this.props.user;
    return (
      <div className="Home">
        <img className="banner" src={homeBanner}/>
        <div className="selectForm">
          <Row className="Row">
            <Col span={3} offset={8}>I came from</Col>
            <Col span={6}>
              <Select
                showSearch
                defaultValue={homeCountry}
                style={{ width: 200 }}
                optionFilterProp="children"
                onChange={this.changeHomeCountry}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {homeCountries.map(renderSelectOption)}
              </Select>
            </Col>
          </Row>
          <Row className="Row">
            <Col span={3} offset={8}>looking for</Col>
            <Col span={6}>
              <Select
                showSearch
                defaultValue={job}
                style={{ width: 200 }}
                optionFilterProp="children"
                onChange={this.changeDesiredJob}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {jobs.map(renderSelectOption)}
              </Select>
            </Col>
          </Row>
          <Row className="Row">
            <Col span={8} offset={9}>
              <Button className="main-button" type="primary" onClick={this.goNext}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
