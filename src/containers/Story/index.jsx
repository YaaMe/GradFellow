import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Markdown from 'react-markdown';
import Breadcrumb from 'containers/Breadcrumb';
import {
  groupItem,
  userInfoTemplate,
  skillsHaveTemplate,
  skillsLearnedTemplate
} from 'utils/markdown';

const mapStateToProps = ({
  fellow: { reviews },
  user
}, {
  match: { params: { id }}}
) => ({
  story: reviews.find(story => story.id === id),
  user
});

const mapDispatchToProps = dispatch => ({});

class Story extends Component {
  render() {
    const { story = {}, user } = this.props;
    const { firstName, lastName, currentPosition, currentCompany } = story;
    const { startWith, learned } = story.skills;
    return (
      <div>
        <Breadcrumb items={['Stories', user.job, user.homeCountry]}/>
        <Row>
          <Col span={8}>
            <Markdown source={userInfoTemplate(firstName, lastName, currentPosition, currentCompany)}/>
          </Col>
          <Col span={16}>
            <Markdown source={[
              skillsHaveTemplate(startWith),
              skillsLearnedTemplate(learned)
            ].reduce(groupItem)}/>
          </Col>
        </Row>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story);
