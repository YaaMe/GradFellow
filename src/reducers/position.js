import { ACTION_TYPE } from 'actions/position';

export default (state = [], action) => {
  switch (action.type) {
  case `${ACTION_TYPE.GET_POSITIONS}:success`: return action.data.map(({ name }) => name);
  default: return state;
  }
};
