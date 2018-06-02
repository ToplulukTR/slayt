import { combineReducers } from 'redux';
import context from './context';
import liked from './liked';
import playlists from './playlists';
import search from './search';
import user from './user';

const rootReducer = combineReducers({
  context,
  search,
  user,
  liked,
  playlists,
});

export default rootReducer;
