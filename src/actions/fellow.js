import qs from 'qs';

export const ACTION_TYPE = {
  GET_USER_INFO: 'GET_USER_INFO',
};

export const getStoriesCard = ({ homeCountry, job }) => {
  let query = {};
  if (homeCountry) query.nationality = homeCountry;
  if (job) query.position = job;
  return {
    type: ACTION_TYPE.GET_USER_INFO,
    $fetch: {
      requestBody: {
        url: Object.keys(query) ? `/userinfo?${qs.stringify(query)}` : '/userinfo',
      }
    }
  };
};
