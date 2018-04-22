import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';

const mapStateToProps = state => ({
  playlists: state.user.playlists,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
