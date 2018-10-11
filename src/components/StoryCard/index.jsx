import React from 'react';
import { Card } from 'antd';
import Markdown from 'react-markdown';

// skill region
const listSkill = skill => `+ ${skill}`
const groupSkill = (content, skill) => skill ? `${content}\n${skill}` : content
const cardContent = startWith => `
## Technical skills I started with
${startWith.map(listSkill).reduce(groupSkill)}
`
// title
const title = (firstName, lastName, currentPosition, currentCompany) => (
  <div>
    <label>{`${lastName} ${firstName}`}</label>
    <label>{`${currentPosition}
      ${currentCompany}`}</label>
  </div>
)


export default ({ firstName, lastName, currentPosition, currentCompany, skills: { startWith }}) => (
  <Card
    title={title(firstName, lastName, currentPosition, currentCompany)}
  >
    <Markdown source={cardContent(startWith)}/>
  </Card>
)
