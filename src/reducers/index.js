import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { default as user } from './user';

export default combineReducers({
  user,

  router
});
