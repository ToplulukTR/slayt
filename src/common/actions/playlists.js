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

export const addVideoToPlaylist = (videoId, playlistId) => dispatch => {
  if (videoId && playlistId) {
    // dispatch(likeStarted());

    fetch(`/api/playlist/${playlistId}/video`, {method: 'POST', body: JSON.stringify({id: videoId})})
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        alert('yes');
        // dispatch(likeFinished(data.liked));
      })
      .catch(error => {
        alert('no');
        // TODO handle error
        // dispatch(likeFinished());
      });
  }
};

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
