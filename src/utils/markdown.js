export const listItem = item => `+ ${item}`;
export const groupItem = (content, item) => item ? `${content}\n${item}` : content;

export const userInfoTemplate = (firstName, lastName, position, company) => `
# ${lastName}
# ${firstName}
## ${position}
## ${company}
`;

export const skillsHaveTemplate = (skillsHave = []) => `
## Technical Skills I started with:
${skillsHave.map(listItem).reduce(groupItem, [])}
`;

export const skillsLearnedTemplate = (skillsLearned = []) => `
## New Skills I learnt on job:
${skillsLearned.map(listItem).reduce(groupItem, [])}
`;

export const skillsRecommendTemplate = (skillsRecommend = []) => `
## Skills I wish I had known earlier:
${skillsRecommend.map(listItem).reduce(groupItem, [])}
`;

export const skillsTasksTitle = () => `
## My Daily Tasks:
`;

export const skillsRolesTitle = () => `
## Key People I work with
`;

export const skillsTasksAutoTemplate = (skillsTasksAuto = []) => `
### Autonomous tasks:
${skillsTasksAuto.map(listItem).reduce(groupItem, [])}
`;

export const skillsTasksCollabTemplate = (skillsTasksCollab = []) => `
### Groups tasks:
${skillsTasksCollab.map(listItem).reduce(groupItem, [])}
`;

export const companyCultureTemplate = (
  ccDescByColleagues,
  ccCompetitiveness,
  ccRelationshipWithMgr,
  ccWorkingApproach,
  ccRelationshipWithColleague
) => `
## My Workplace Culture
* * *
I would describe my company competitive in these perspectives:
${ccCompetitiveness}
* * *
${ccDescByColleagues}
* * *
${ccWorkingApproach}
* * *
${ccRelationshipWithMgr}
* * *
${ccRelationshipWithColleague}
`;
