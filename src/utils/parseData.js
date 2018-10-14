export const parseData = (data) => {
  const {
    skillsRolesInCompany = '',
    skillsTasksAuto = '',
    skillsTasksCollab =''
  } = data;
  return {
    ...data,
    skillsTasksAuto: skillsTasksAuto.split('&'),
    skillsTasksCollab: skillsTasksCollab.split('&'),
    skillsRolesInCompany: skillsRolesInCompany.split('&')
  };
};

export const parseDataToServer = (data) => {
  return {
    ...data
  };
};

export const parseServerToData = (data) => {
  return {
    ...data
  };
};

export const parseCardsFromServer = ({
  skills_have,
  cc_relationship_with_colleague,
  first_name,
  last_name,
  cc_desc_by_colleagues,
  name,
  skills_tasks_collab,
  skills_recommend,
  company,
  skills_tasks_auto,
  skills_roles_in_company,
  skills_learned,
  cc_competitiveness,
  tobe_contacted,
  cc_relationship_with_mgr,
  nationality,
  position,
  id,
  cc_working_approach
}) => ({
  skillsHave: [skills_have],
  ccRelationshipWithColleague: cc_relationship_with_colleague,
  firstName: first_name,
  lastName: last_name,
  ccDescByColleagues: cc_desc_by_colleagues,
  name: name,
  skillsTasksCollab: [skills_tasks_collab],
  skillsRecommend: [skills_recommend],
  company: company,
  skillsTasksAuto: [skills_tasks_auto],
  skillsRolesInCompany: skills_roles_in_company.split(','),
  skillsLearned: [skills_learned],
  ccCompetitiveness: cc_competitiveness,
  tobeContacted: tobe_contacted,
  ccRelationshipWithMgr: cc_relationship_with_mgr,
  nationality: nationality,
  position: position,
  id: id,
  ccWorkingApproach: cc_working_approach
});
