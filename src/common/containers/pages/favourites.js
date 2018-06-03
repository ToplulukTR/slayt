import _get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Favourites from '../../components/pages/favourites';

const mapStateToProps = state => ({
  liked: _get(state, 'app.context.user.liked', [])
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
