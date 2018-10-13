import axios from 'axios';
import { BASE_URL } from 'config';

const server = axios.create({
  baseURL: BASE_URL
});

export const fetchMiddleware = store => next => action => {
  const {
    requestBody,
    onSuccess = (args) => ({ type: `${action.type}:success`, ...args }),
    onError = (...args) => ({ type: `${action.type}:error` })
  } = action.$fetch;

  server.request(requestBody)
    .then((resp) => store.dispatch(onSuccess(resp)))
    .catch((...resp) => store.dispatch(onError(...resp)));
  return next(action);
};