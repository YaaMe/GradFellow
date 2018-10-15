export const ACTION_TYPE = {
  GET_COUNTRIES: 'GET_COUNTRIES',
};

export const getCountries = () => ({
  type: ACTION_TYPE.GET_COUNTRIES,
  $fetch: {
    requestBody: {
      url: '/country'
    },
  }
});
