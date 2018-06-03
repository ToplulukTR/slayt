import {LIKE_STARTED, LIKE_FINISHED} from '../actions/liked';

const liked = (state = {}, action) => {
  switch (action.type) {
    case LIKE_STARTED:
      return {loading: true};
    case LIKE_FINISHED:
      return {loading: false};
    default:
      return state;
  }
};

export default liked;
