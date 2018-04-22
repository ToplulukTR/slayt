import fetch from 'isomorphic-fetch'
import checkStatus from '../lib/fetch/check-status'
import parseJSON from '../lib/fetch/parse-json'

export const SEARCH_STARTED = 'SEARCH_STARTED';
export const SEARCH_FINISHED = 'SEARCH_FINISHED';
export const SEARCH_KEYWORD_UPDATE = 'SEARCH_KEYWORD_UPDATE';

export const searchKeywordUpdate= keyword => ({
  type: SEARCH_KEYWORD_UPDATE,
  payload: {keyword}
});

export const searchStarted = () => ({
  type: SEARCH_STARTED,
});

export const searchFinished = videos => ({
  type: SEARCH_FINISHED,
  payload: {videos}
});

export const handleInputChange = keyword => dispatch => {
  dispatch(searchKeywordUpdate(keyword));
};

export const handleSearch = keyword => dispatch => {
  if (keyword) {
    dispatch(searchStarted());

    fetch(`/api/videos?keyword=${keyword}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        dispatch(searchFinished(data.videos));
      })
      .catch(error => {
        // TODO handle error
        dispatch(searchFinished([]));
      });
  }
};
