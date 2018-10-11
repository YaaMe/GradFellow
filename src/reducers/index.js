import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { default as user } from './user';
import { default as fellow } from './fellow';

export default combineReducers({
  user,
  fellow,

  router
});
