import React from 'react';
import { Card } from 'antd';
import Markdown from 'react-markdown';
import { skillsHaveTemplate } from 'utils/markdown';

// title
const title = (firstName, lastName, currentPosition, currentCompany) => (
  <div>
    <label>{`${lastName} ${firstName}`}</label>
    <label>{`${currentPosition}
      ${currentCompany}`}</label>
  </div>
)


export default ({ onClick, firstName, lastName, currentPosition, currentCompany, skills: { startWith }}) => (
  <Card
    title={title(firstName, lastName, currentPosition, currentCompany)}
    onClick={onClick}
  >
    <Markdown source={skillsHaveTemplate(startWith)}/>
  </Card>
)
