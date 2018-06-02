import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';
import {initApp} from '../actions/app';

const mapStateToProps = state => {
  return {
    loading: _get(state, 'app.context.loading', [])
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initApp
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
