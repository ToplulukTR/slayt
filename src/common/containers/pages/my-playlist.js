import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyPlaylist from '../../components/pages/my-playlist';
import {vote} from '../../actions/playlists';

const mapStateToProps = state => ({
  playlists: _get(state, 'app.context.playlists', [])
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    vote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylist);
