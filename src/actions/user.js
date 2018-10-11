export const ACTION_TYPE = {
    UPDATE_HOME_COUNTRY: 'SELECT_HOME_COUNTRY',
    UPDATE_DESIRED_JOB: 'SELECT_DESIRED_JOB'
};

export const updateHomeCountry = (homeCountry) => ({
    type: ACTION_TYPE.UPDATE_HOME_COUNTRY,
    data: homeCountry
});

export const updateDesiredJob = (job) => ({
    type: ACTION_TYPE.UPDATE_DESIRED_JOB,
    data: job
});
