import _get from 'lodash.get';
import { connect } from 'react-redux';
import Sidebar from '../../../components/pages/search/sidebar';

const mapStateToProps = state => ({
  playlists: _get(state, 'app.context.playlists', []),
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
