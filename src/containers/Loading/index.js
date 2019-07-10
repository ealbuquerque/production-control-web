import {
  connect,
} from 'react-redux';
import {
  compose,
} from 'redux';

import Loading from '../../components/Loading';

const mapStateToProps = ({
  loading,
}) => ({
  showLoading: Object.keys(loading).some(prop => loading[prop]),
});

export default compose(
  connect(mapStateToProps),
)(Loading);
