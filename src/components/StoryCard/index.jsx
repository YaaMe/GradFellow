import React from 'react';
import { Button, Card } from 'antd';
import Markdown from 'react-markdown';
import { skillsHaveTemplate } from 'utils/markdown';

// title
const title = (firstName, lastName, currentPosition, currentCompany) => (
  <div style={{ width: '100%' }}>
    <div style={{ color: '#4676B5' }}><label>{`${lastName} ${firstName}`}</label></div>
    <div style={{ textAlign: 'right' }}><label>{currentPosition}</label></div>
    <div style={{ textAlign: 'right' }}><label>{`@ ${currentCompany}`}</label></div>
  </div>
)


export default ({ onClick, firstName, lastName, currentPosition, currentCompany,  skillsHave }) => (
  <Card
    title={title(firstName, lastName, currentPosition, currentCompany)}
  >
    <Markdown source={skillsHaveTemplate(skillsHave)}/>
    <Button type="primary" onClick={onClick}>Read More</Button>
  </Card>
)
