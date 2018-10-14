import React from 'react';
import { Button, Card } from 'antd';
import Markdown from 'react-markdown';
import { skillsHaveTemplate } from 'utils/markdown';

// title
const title = (firstName, lastName, position, company) => (
  <div style={{ width: '100%' }}>
    <div style={{ color: '#4676B5' }}><label>{`${lastName} ${firstName}`}</label></div>
    <div style={{ textAlign: 'right' }}><label>{position}</label></div>
    <div style={{ textAlign: 'right' }}><label>{`@ ${company}`}</label></div>
  </div>
)


export default ({ onClick, firstName, lastName, position, company,  skillsHave }) => (
  <Card
    title={title(firstName, lastName, position, company)}
  >
    <Markdown source={skillsHaveTemplate(skillsHave)}/>
    <Button style={{ float: 'right' }} type="primary" onClick={onClick}>Read More</Button>
  </Card>
)
