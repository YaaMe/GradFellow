import { ACTION_TYPE } from 'actions/country';

export default (state = [], action) => {
  switch (action.type) {
  case `${ACTION_TYPE.GET_COUNTRIES}:success`:return action.data.map(({ name }) => name);
  default: return state;
  }
};
