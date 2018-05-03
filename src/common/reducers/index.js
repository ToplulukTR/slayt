import { combineReducers } from 'redux';
import liked from './liked';
import playlists from './playlists';
import search from './search';
import user from './user';

const rootReducer = combineReducers({
  search,
  user,
  liked,
  playlists,
});

export default rootReducer;
