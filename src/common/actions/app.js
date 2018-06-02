/* global firebase */
import fetch from 'isomorphic-fetch'
import checkStatus from '../lib/fetch/check-status'
import parseJSON from '../lib/fetch/parse-json'

export const INITIALIZE_APP_STARTED = 'INITIALIZE_APP_STARTED';
export const INITIALIZE_APP_FINISHED = 'INITIALIZE_APP_FINISHED';

export const initAppStarted= () => ({
  type: INITIALIZE_APP_STARTED,
});

export const initAppFinished = data => ({
  type: INITIALIZE_APP_FINISHED,
  payload: data
});

export const initApp = () => dispatch => {
  const userId = 'selman';
  const db = firebase.firestore();

  dispatch(initAppStarted);
  db.collection("users").doc(userId).get().then((userData) => {
    dispatch(initAppFinished({
      user: userData.data()
    }));
    console.log(userData.data());
  });
};
