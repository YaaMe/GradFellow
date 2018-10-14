import axios from 'axios';
import { BASE_URL } from 'config';
import { ACTION_TYPE } from 'actions/user';

const server = axios.create({
  baseURL: BASE_URL,
});

export const fetchMiddleware = store => next => action => {
  const {
    requestBody,
    onSuccess = (args) => ({ type: `${action.type}:success`, ...args }),
    onError = (...args) => ({ type: `${action.type}:error` })
  } = action.$fetch;

  if (action.type === ACTION_TYPE.SHARE_STORY) {
    const { access_token } = store.getState().user;
    requestBody.headers = {'Authorization': `JWT ${access_token}`};
  }
  server.request(requestBody)
    .then((resp) => store.dispatch(onSuccess(resp)))
    .catch((...resp) => store.dispatch(onError(...resp)));
  return next(action);
};
