import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
  compose,
} from 'redux';
import {
  withTranslation,
} from 'react-i18next';

import {
  deleteProduct,
  getProducts,
} from './actions';

import Page from './page';

const mapStateToProps = ({
  products: {
    error,
    list,
  },
}, {
  t,
}) => ({
  error,
  labels: {
    actions: t('general:actions'),
    add: t('general:add'),
    edit: t('general:edit'),
    name: t('general:name'),
    noRecordToDisplay: t('general:noRecordToDisplay'),
    pageTitle: t('general:pages.products.title'),
    quantity: t('general:quantity'),
    remove: t('general:remove'),
  },
  products: list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteProduct,
  getProducts,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
)(Page);
