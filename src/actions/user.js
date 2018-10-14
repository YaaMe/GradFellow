export const ACTION_TYPE = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_HOME_COUNTRY: 'SELECT_HOME_COUNTRY',
  UPDATE_DESIRED_JOB: 'SELECT_DESIRED_JOB',
};

export const login = (data) => ({
  type: ACTION_TYPE.LOGIN,
  $fetch: {
    requestBody: {
      url: '/login',
      method: 'post',
      data: {...data},
    }
  }
});

export const logout = () => ({ type: ACTION_TYPE.LOGOUT });

export const updateHomeCountry = (homeCountry) => ({
  type: ACTION_TYPE.UPDATE_HOME_COUNTRY,
  data: homeCountry
});

export const updateDesiredJob = (job) => ({
  type: ACTION_TYPE.UPDATE_DESIRED_JOB,
  data: job
});
