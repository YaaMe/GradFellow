import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Markdown from 'react-markdown';
import Breadcrumb from 'containers/Breadcrumb';
import Graph from 'react-graph-vis';

import {
  groupItem,
  userInfoTemplate,
  skillsHaveTemplate,
  skillsLearnedTemplate,
  skillsRecommendTemplate,
  skillsTasksTitle,
  skillsRolesTitle,
  skillsTasksAutoTemplate,
  skillsTasksCollabTemplate,
  companyCultureTemplate,
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
    const {
      skillsHave,
      skillsLearned,
      skillsRecommend,
      skillsRolesInCompany,
      skillsTasksAuto,
      skillsTasksCollab
    } = story.skills;
    const graph = {
      nodes: ['Me', ...skillsRolesInCompany].map(role => role === 'Me' ?
                                                         ({ id: role, label: role, color: '#4b84E5'})
                                                        :({ id: role, label: role})),
      edges: skillsRolesInCompany.map(role => ({ from: role, to: 'Me'}))
    };

    const options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: "#000000"
      },
    };

    return (
      <div className="Story">
        <Breadcrumb items={['Stories', user.job, user.homeCountry]}/>
        <Row>
          <Col span={8}>
            <Markdown source={userInfoTemplate(firstName, lastName, currentPosition, currentCompany)}/>
          </Col>
          <Col span={16}>
            <Row>
            <Markdown source={[
              skillsHaveTemplate(skillsHave),
              skillsLearnedTemplate(skillsLearned),
              skillsRecommendTemplate(skillsRecommend),
              skillsTasksTitle()
            ].reduce(groupItem)}/>
            </Row>
            <Row>
              <Col span={12}>
                <Markdown source={skillsTasksAutoTemplate(skillsTasksAuto)}/>
              </Col>
              <Col span={12}>
                <Markdown source={skillsTasksCollabTemplate(skillsTasksCollab)}/>
              </Col>
            </Row>
            <Row>
              <Markdown source={skillsRolesTitle()} />
            </Row>
            <Row>
              <Col span={24} className="Graph">
                <Graph graph={graph} options={options} />
              </Col>
            </Row>
            <Row>
              <Markdown source={companyCultureTemplate()} />
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story);
