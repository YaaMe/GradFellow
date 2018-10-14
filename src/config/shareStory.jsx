export const getFormInfo = (countries, positions) => {
  const basicInfo = [{
    id: 'firstName',
    title: 'First Name',
    col: { span: 12 },
  }, {
    id: 'lastName',
    title: 'Last Name',
    col: { span: 11, offset: 1 },
  }, {
    id: 'position',
    title: 'Current Position',
    type: 'select',
    selectOptions: positions,
    col: { span: 12 },
  }, {
    id: 'company',
    title: 'Current Company',
    col: { span: 11, offset: 1 },
  }, {
    id: 'nationality',
    title: 'Nationality',
    type: 'select',
    selectOptions: countries,
    col: { span: 12 },
  }, {
    id: 'tobeContacted',
    title: 'Are you willing to be contacted?',
    type: 'radio',
    radioOptions: [{
      value: 'True',
      title: 'Yes'
    }, {
      value: 'False',
      title: 'No'
    }],
    col: { span: 11, offset: 1 },
  }];

  const skills = [{
    id: 'skillsHave',
    title: 'The technical skills you had when you got the job',
    col: { span: 11, offset: 1 },
  }, {
    id: 'skillsLearned',
    title: 'The technical skills you learned on the job',
    col: { span: 11, offset: 1 },
  }, {
    id: 'skillsRecommend',
    title: 'The skills you recommend international students to',
    col: { span: 11, offset: 1 },
  }, {
    id: 'skillsRolesInCompany',
    title: 'Key Roles you work with in the Company',
    col: { span: 11, offset: 1 },
  }, {
    id: 'skillsTasksAuto',
    title: 'Tasks you perform autonomously (e.g. write user stories)',
    col: { span: 11, offset: 1 },
  }, {
    id: 'skillsTasksCollab',
    title: 'Tasks you perform in groups (e.g. stand-up meetings)',
    col: { span: 11, offset: 1 },
  }];

  const companyCulture = [{
    id: 'ccCompetitiveness',
    title: 'In what perspectives would you describe your workplace as competitive?',
    col: { span: 12 },
  }, {
    id: 'ccDescByColleagues',
    title: 'In three words, how do your colleagues describe you at work?',
    col: { span: 11, offset: 1 },
  }, {
    id: 'ccWorkingApproach',
    title: "Describe the work environment or culture you're in that keep you productive and happy."
  }, {
    id: 'ccRelationshipWithColleague',
    title: 'Describe your relationship with your co-worker. How do you support each other?'
  }, {
    id: 'ccRelationshipWithMgr',
    title: 'Describe your working relationship with your manager. How does he/she help you with career development?'
  }];
  return { basicInfo, skills, companyCulture }
}
