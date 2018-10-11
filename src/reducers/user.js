import { homeCountries, jobs } from 'config';
import { ACTION_TYPE } from 'actions/user';

const initState = {
    homeCountry: homeCountries[0],
    job: jobs[0]
};

export default (state = initState, action) => {
    switch (action.type) {
    case ACTION_TYPE.UPDATE_HOME_COUNTRY: return ({...state, homeCountry: action.data});
    case ACTION_TYPE.UPDATE_DESIRED_JOB: return ({...state, job: action.data});
    default: return state;
    }
}
