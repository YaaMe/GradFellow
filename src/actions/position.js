export const ACTION_TYPE = {
  GET_POSITIONS: 'GET_POSITIONS',
};

export const getPositions = () => ({
  type: ACTION_TYPE.GET_POSITIONS,
  $fetch: {
    requestBody: {
      url: '/position'
    }
  }
});
