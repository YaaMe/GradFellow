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
