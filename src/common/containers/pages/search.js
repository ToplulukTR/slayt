import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../../components/pages/search';
import {handleSearch} from '../../actions/search';

const mapStateToProps = state => ({
  search: _get(state, 'app.search'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSearch
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
