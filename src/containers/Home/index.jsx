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
        <div className="banner-region">
          <img className="banner" src={homeBanner}/>
          <div className="hint">
            We now have <label className="hint-number">189</label> stories shared by fellow graduates <br/>
            from <label className="hint-number">10</label> countries successfully employed in Australia
          </div>
        </div>
        <div className="body-region">
          <Row><Col span={18} offset={3}>
            <Row className="main-form">
              <Col span={8} offset={1} className="form-item">
                <Row className="item-title">I came from</Row>
                <Row>
                  <Select
                    showSearch
                    defaultValue={homeCountry}
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    onChange={this.changeHomeCountry}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {homeCountries.map(renderSelectOption)}
                  </Select>
                </Row>
              </Col>
              <Col span={8} offset={1} className="form-item">
                <Row className="item-title">looking for</Row>
                <Row>
                  <Select
                    showSearch
                    defaultValue={job}
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    onChange={this.changeDesiredJob}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {jobs.map(renderSelectOption)}
                  </Select>
                </Row>
              </Col>
              <Col span={4} offset={1} className="form-item">
                <Button className="main-button" type="primary" onClick={this.goNext}>Read stories</Button>
              </Col>
            </Row>
          </Col></Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
