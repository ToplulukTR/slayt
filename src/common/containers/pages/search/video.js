import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Video from '../../../components/pages/search/video';
import {saveLiked} from '../../../actions/liked';
import {addVideoToPlaylist} from '../../../actions/playlists';

const mapStateToProps = (state, props) => ({
  isLiked: _get(state, 'app.liked.list', []).indexOf(props.details.id) > -1,
  playlists: _get(state, 'app.playlists', [])
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addVideoToPlaylist,
    saveLiked
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
