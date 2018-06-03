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


const initContext = async dispatch => {
  dispatch(initAppStarted);
  const userId = 'selman';
  const db = firebase.firestore();

  const userDoc = db.collection("users").doc(userId);
  const user = await userDoc.get();

  const playlistsCol = userDoc.collection('playlists');
  const playlistsData = await playlistsCol.get();
  const playlistsArr = playlistsData.docs.map(async playlist => {
    const videosCol = playlist.ref.collection('videos');
    const videos = await videosCol.get();
    return {
      ...playlist.data(),
      videos: videos.docs.map(video => video.data())
    };
  });
  const playlists = await Promise.all(playlistsArr);

  dispatch(initAppFinished({
    user: user.data(),
    playlists,
  }));
};

export const initApp = () => dispatch => {
  initContext(dispatch);
};
