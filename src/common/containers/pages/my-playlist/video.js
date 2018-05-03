import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Video from '../../../components/pages/my-playlist/video';
import {saveLiked} from '../../../actions/liked';

const mapStateToProps = (state, props) => ({
  isLiked: _get(state, 'app.liked.list', []).indexOf(props.details.id) > -1,
  playlists: _get(state, 'app.playlists.list', [])
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveLiked
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
