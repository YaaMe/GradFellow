import { ACTION_TYPE } from 'actions/user';
import { message } from 'antd';
const initState = {
  homeCountry: '',
  job: '',
  cards: []
};

export default (state = initState, action) => {
  switch (action.type) {
  case `${ACTION_TYPE.LOGIN}:success`:
    message.success("Story Created :)");
    return {...state, ...action.data};
  case ACTION_TYPE.UPDATE_HOME_COUNTRY: return {...state, homeCountry: action.data};
  case ACTION_TYPE.UPDATE_DESIRED_JOB: return {...state, job: action.data};
  case ACTION_TYPE.LOGOUT: return initState;
  default: return state;
  }
}
