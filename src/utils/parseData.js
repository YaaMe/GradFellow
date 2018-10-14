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
