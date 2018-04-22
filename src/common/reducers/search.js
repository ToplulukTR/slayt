import {SEARCH_STARTED, SEARCH_FINISHED, SEARCH_KEYWORD_UPDATE} from '../actions/search';

const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_STARTED:
      return {loading: true, list: []};
    case SEARCH_FINISHED:
      return {loading: false, list: action.payload.videos};
    case SEARCH_KEYWORD_UPDATE:
      return {...state, keyword: action.payload.keyword};
    default:
      return state;
  }
};

export default search;
