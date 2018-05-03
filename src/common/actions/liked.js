import fetch from 'isomorphic-fetch'
import checkStatus from '../lib/fetch/check-status'
import parseJSON from '../lib/fetch/parse-json'

export const LIKE_STARTED = 'LIKE_STARTED';
export const LIKE_FINISHED = 'LIKE_FINISHED';

export const likeStarted = () => ({
  type: LIKE_STARTED,
});

export const likeFinished = liked => ({
  type: LIKE_FINISHED,
  payload: {liked},
});

export const saveLiked = id => dispatch => {
  if (id) {
    dispatch(likeStarted());

    fetch(`/api/like`, {method: 'POST', body: JSON.stringify({id})})
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        dispatch(likeFinished(data.liked));
      })
      .catch(error => {
        // TODO handle error
        dispatch(likeFinished());
      });
  }
};
