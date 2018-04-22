import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyPlaylist from '../components/my-playlist';
import {handleSearch} from '../actions/search';

const mapStateToProps = state => ({
  search: state.search,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSearch
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylist);
