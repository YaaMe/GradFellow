import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Form, Button } from 'antd';
import { getRegion } from 'utils/form';
import { parseCardsFromServer, parseCardsToServer } from 'utils/parseData';
import { getFormInfo } from 'config/shareStory';
import { StoryTemplate } from 'containers/Story';
import { shareStory } from 'actions/user';

const mapStateToProps = ({ user, countries, positions }) => ({ user, countries, positions });
const mapDispatchToProps = dispatch => ({
  shareStory: data => dispatch(shareStory(data))
});

class ShareStory extends Component {
  state = {
    preview: false,
    values: {}
  }
  componentDidMount() {
    if (!this.props.user.access_token) {
      this.props.history.push('/Home');
    }
  }

  setPreview = (preview) => {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.setState({ preview, values });
      }
    });
  }

  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.props.shareStory(parseCardsToServer(values));
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {countries, positions} = this.props;
    const { basicInfo, skills, companyCulture } = getFormInfo(countries, positions);
    const basicInfoRow = [
      ['firstName', 'lastName'],
      ['position', 'company'],
      ['nationality', 'tobeContacted'],
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
        {this.state.preview ? <div>
          <StoryTemplate story={parseCardsFromServer(parseCardsToServer(this.state.values))} user={this.props.user} />
          <Row>
            <Col span={2} offset={10}>
              <Button type="primary" onClick={e => this.setPreview(false)}>Back</Button>
            </Col>
          </Row>
        </div> : null
        }
        <div style={{ display: this.state.preview ? 'none': 'block'}}>
          <Form>
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
              <Col span={2} offset={10}>
                <Button onClick={e => this.setPreview(true)}>preview</Button>
              </Col>
              <Col span={2} offset={1}>
                <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ShareStory));
