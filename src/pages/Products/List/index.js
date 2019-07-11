import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
  compose,
} from 'redux';
import {
  reduxForm,
} from 'redux-form';
import {
  withTranslation,
} from 'react-i18next';

import {
  deleteProduct,
  FORM_FILTER,
  getProducts,
  onClickToCleanFilter,
  onSubmitFilter,
} from './actions';
import {
  getEmployees,
} from '../../Employees/List/actions';
import {
  getRawMaterials,
} from '../../RawMaterials/List/actions';

import Page from './page';

const mapStateToProps = ({
  employees: {
    list: listEmployees,
  },
  products: {
    error,
    list: listProducts,
  },
  rawMaterials: {
    list: listRawMaterials,
  },
}, {
  t,
}) => ({
  error,
  employees: listEmployees,
  labels: {
    actions: t('general:actions'),
    add: t('general:add'),
    clean: t('general:clean'),
    edit: t('general:edit'),
    employee: t('general:employee'),
    name: t('general:name'),
    noRecordToDisplay: t('general:noRecordToDisplay'),
    pageTitle: t('general:pages.products.list.title'),
    quantity: t('general:quantity'),
    select: t('general:select'),
    rawMaterial: t('general:rawMaterial'),
    rawMaterials: t('general:rawMaterials'),
    remove: t('general:remove'),
    submit: t('general:filter'),
  },
  products: listProducts,
  rawMaterials: listRawMaterials,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteProduct,
  getProducts,
  getEmployees,
  getRawMaterials,
  onClickToCleanFilter,
  onSubmitFilter,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: FORM_FILTER,
  }),
)(Page);
