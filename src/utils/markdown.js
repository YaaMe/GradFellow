export const listItem = item => `+ ${item}`;
export const groupItem = (content, item) => item ? `${content}\n${item}` : content;

export const userInfoTemplate = (firstName, lastName, currentPosition, currentCompany) => `
# ${lastName}
# ${firstName}
## ${currentPosition}
## ${currentCompany}
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
  ccCompetitivenss,
  ccDescribedByColleagues,
  ccRelationshipWithColleague,
  ccRelationshipWithMgr
) => `
## My Workplace Culture
* * *
I would describe my company competitive in these perspectives:

inclusivity
* * *
My friends describe me as a caring person with attention to details.
* * *
I like the working style of agile here because it made me stay productive and inspired.
* * *
I like how I'm trusted in my field of work. My manager listens to my view and guides me to explore
* * *
Colleagues are friendly and fun. We usually exchange news over lunch like friends. Though everyone is busy, I still receive support as long as I ask for it.
`;
