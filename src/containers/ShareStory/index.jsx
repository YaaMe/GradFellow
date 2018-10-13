import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Form } from 'antd';
import { homeCountries, jobs } from 'config';
import { getRegion } from 'utils/form';
import { getFormInfo } from 'config/shareStory';


const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({});

class ShareStory extends Component {
  componentDidMount() {
    if (!this.props.user.token) {
      this.props.history.push('/Home');
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { basicInfo, skills, companyCulture } = getFormInfo(homeCountries);
    const basicInfoRow = [
      ['firstName', 'lastName'],
      ['currentPosition', 'currentCompany'],
      ['nationality', 'beContacted'],
    ];
    const skillsRow = [
      ['skillsHave', 'skillsLearned'],
      ['skillsRecommend', 'skillsRolesInCompany'],
      ['skillsTasksAuto', 'skillsTasksCollab'],
    ];
    const companyCultureRow = [
      ['ccCompetitiveness', 'ccDescByColleagues'],
      ['ccWorkingApproach'],
      ['ccRelationshipWithColleague'],
      ['ccRelationshipWithMgr'],
    ]

    return (
      <div className="ShareStory">
        <Row>
          <Col className="basic-info" span={11} offset={1}>
            <Row><Col>Basic Info</Col></Row>
            {getRegion(basicInfo, basicInfoRow, getFieldDecorator)}
          </Col>
          <Col className="skills" span={11} offset={1}>
            <Row><Col offset={1}>Skills</Col></Row>
            {getRegion(skills, skillsRow, getFieldDecorator)}
          </Col>
        </Row>
        <Row>
          <Col className="company-culture" offset={1}>
            <Row><Col>Your company culture</Col></Row>
            {getRegion(companyCulture, companyCultureRow, getFieldDecorator)}
          </Col>
        </Row>
        <Row className="button-region">
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ShareStory));
