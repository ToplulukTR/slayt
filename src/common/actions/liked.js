/* global firebase */
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
  payload: {liked}
});

const save = async (dispatch, liked, videoId) => {
  dispatch(likeStarted());

  const userId = 'selman';
  const db = firebase.firestore();
  const index = liked.indexOf(videoId);
  if (index === -1) {
    liked.push(videoId);
  } else {
    liked.splice(index, 1);
  }

  const docRef = db.collection("users").doc("selman");
  docRef.update({liked});
  dispatch(likeFinished(liked));
}

export const saveLiked = (liked, videoId) => dispatch => {
  if (videoId) {
    dispatch(likeStarted());
    save(dispatch, liked, videoId);
  }
};
