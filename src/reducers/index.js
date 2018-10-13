import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { default as user } from './user';
import { default as fellow } from './fellow';
import { default as countries } from './country';
import { default as positions } from './position';

export default combineReducers({
  user,
  fellow,
  countries,
  positions,

  router
});
