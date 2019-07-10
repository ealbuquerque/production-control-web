import { connect } from 'react-redux';
import { compose } from 'redux';

import Component from '../../components/Navbar';

import menus from './_menus.json';

const mapStateToProps = () => ({
  menus,
});

export default compose(
  connect(mapStateToProps),
)(Component);
