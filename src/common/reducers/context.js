import {INITIALIZE_APP_STARTED, INITIALIZE_APP_FINISHED} from '../actions/app';

const app = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_APP_STARTED:
      return {loading: true};
    case INITIALIZE_APP_FINISHED:
      return {
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default app;
