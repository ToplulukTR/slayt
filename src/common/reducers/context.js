import {INITIALIZE_APP_STARTED, INITIALIZE_APP_FINISHED} from '../actions/app';
import {LIKE_FINISHED} from '../actions/liked';

const app = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_APP_STARTED:
      return {loading: true};
    case INITIALIZE_APP_FINISHED:
      return {
        ...action.payload,
        loading: false
      };
    case LIKE_FINISHED:
      return {
        ...state,
        user: {
          ...state.user,
          liked: action.payload.liked
        }
      };
    default:
      return state;
  }
};

export default app;
