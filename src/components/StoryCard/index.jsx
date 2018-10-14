import React from 'react';
import { Button, Card } from 'antd';
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


export default ({ onClick, firstName, lastName, currentPosition, currentCompany,  skillsHave }) => (
  <Card
    title={title(firstName, lastName, currentPosition, currentCompany)}
  >
    <Markdown source={skillsHaveTemplate(skillsHave)}/>
    <Button type="primary" onClick={onClick}>Read More</Button>
  </Card>
)
