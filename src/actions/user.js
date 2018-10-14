export const ACTION_TYPE = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SHARE_STORY: 'SHARE_STORY',
  UPDATE_HOME_COUNTRY: 'SELECT_HOME_COUNTRY',
  UPDATE_DESIRED_JOB: 'SELECT_DESIRED_JOB',
};

export const login = ({ userName, password }) => ({
  type: ACTION_TYPE.LOGIN,
  $fetch: {
    requestBody: {
      url: '/login',
      method: 'post',
      data: {
        username: userName,
        password
      },
    }
  }
});

export const logout = () => ({ type: ACTION_TYPE.LOGOUT });

export const shareStory = (data) => ({
  type: ACTION_TYPE.SHARE_STORY,
  $fetch: {
    requestBody: {
      url: '/userinfo',
      method: 'post',
      data
    }
  }
});

export const updateHomeCountry = (homeCountry) => ({
  type: ACTION_TYPE.UPDATE_HOME_COUNTRY,
  data: homeCountry
});

export const updateDesiredJob = (job) => ({
  type: ACTION_TYPE.UPDATE_DESIRED_JOB,
  data: job
});
