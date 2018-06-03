/* global firebase */
import fetch from 'isomorphic-fetch'
import checkStatus from '../lib/fetch/check-status'
import parseJSON from '../lib/fetch/parse-json'

export const CREATE_PLAYLIST_STARTED = 'CREATE_PLAYLIST_STARTED';
export const CREATE_PLAYLIST_FINISHED = 'CREATE_PLAYLIST_FINISHED';
export const VOTE_STARTED = 'VOTE_STARTED';
export const VOTE_FINISHED = 'VOTE_FINISHED';

export const createPlaylistStarted = () => ({
  type: CREATE_PLAYLIST_STARTED,
});

export const createPlaylistFinished = playlists => ({
  type: CREATE_PLAYLIST_FINISHED,
  payload: {playlists}
});

export const voteStarted = () => ({
  type: VOTE_STARTED,
});

export const voteFinished = playlists => ({
  type: VOTE_FINISHED,
  payload: {playlists}
});

export const vote = (videoId, playlistId, increment) => dispatch => {
  if (videoId && playlistId) {
    dispatch(voteStarted());

    fetch(`/api/playlist/${playlistId}/video/${videoId}/${increment ? 'up' : 'down'}`, {method: 'POST'})
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        dispatch(voteFinished(data.playlists));
      })
      .catch(error => {
        // TODO handle error
        dispatch(voteFinished());
      });
  }
};

const addVideo = async (dispatch, videoId, playlistId) => {
  // dispatch(initAppStarted);
  const userId = 'selman';
  const db = firebase.firestore();

  const userDoc = db.collection("users").doc(userId);
  const user = await userDoc.get();

  const playlistDoc = userDoc.collection('playlists').doc(playlistId);
  const playlistsData = await playlistDoc.get();
  const videosRef = playlistsData.ref.collection('videos');
  const video = await videosRef.doc(videoId).get();

  console.log(video);
  if (video.exists) {
    // TODO alert
  } else {
    try {
      await videosRef.doc(videoId).set({id: videoId, name: 'hardcoded-name'});
    } catch(err) {
      // TODO
      alert(err);
    }
  }
  /*
  dispatch(initAppFinished({
    user: user.data(),
    playlists,
  }));
  */
};

export const addVideoToPlaylist = (videoId, playlistId) => dispatch => {
  if (videoId && playlistId) {
    addVideo(dispatch, videoId, playlistId);
  }
};
