import { ACTION_TYPE } from 'actions/fellow';
import { parseCardsFromServer } from 'utils/parseData';

const initState = {
  cards: []
};

export default (state = initState, action) => {
  switch (action.type) {
  case `${ACTION_TYPE.GET_USER_INFO}:success`:
    return {
      ...state,
      cards: action.data.map(parseCardsFromServer)
    };
  default: return state;
  }
}
