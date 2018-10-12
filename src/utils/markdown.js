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
${skillsHave.map(listItem).reduce(groupItem)}
`;

export const skillsLearnedTemplate = (skillsLearned = []) => `
## New Skills I learnt on job:
${skillsLearned.map(listItem).reduce(groupItem)}
`;

export const skillsRecommendTemplate = (skillsRecommend = []) => `
## Skills I wish I had known earlier:
${skillsRecommend.map(listItem).reduce(groupItem)}
`;
