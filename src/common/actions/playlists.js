import fetch from 'isomorphic-fetch'
import checkStatus from '../lib/fetch/check-status'
import parseJSON from '../lib/fetch/parse-json'

export const CREATE_PLAYLIST_STARTED = 'CREATE_PLAYLIST_STARTED';
export const CREATE_PLAYLIST_FINISHED = 'CREATE_PLAYLIST_FINISHED';

export const createPlaylistStarted = () => ({
  type: CREATE_PLAYLIST_STARTED,
});

export const createPlaylistFinished = playlists => ({
  type: CREATE_PLAYLIST_FINISHED,
  payload: {playlists}
});
