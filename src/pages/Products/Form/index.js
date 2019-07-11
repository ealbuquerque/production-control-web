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
  withRouter,
} from 'react-router-dom';

import {
  createProduct,
  getProduct,
  PATH_TO_GO_BACK,
  updateProduct,
} from './actions';
import {
  getEmployees,
} from '../../Employees/List/actions';
import {
  getRawMaterials,
} from '../../RawMaterials/List/actions';

import Page from './page';
import validate from './validate';

const mapStateToProps = ({
  products: {
    error,
    item,
  },
  employees: {
    list: listEmployees,
  },
  rawMaterials: {
    list: listRawMaterials,
  },
}, {
  match: {
    params: {
      id: pathParamId,
    },
  },
  t,
}) => {
  const isAddPage = pathParamId === undefined;

  return {
    employees: listEmployees,
    error,
    initialValues: isAddPage ? undefined : item,
    labels: {
      cancel: t('general:cancel'),
      employee: t('general:employee'),
      name: t('general:name'),
      pageTitle: t('general:pages.products.form.title'),
      select: t('general:select'),
      submit: isAddPage ? t('general:add') : t('general:update'),
      rawMaterials: t('general:rawMaterials'),
    },
    pathToGoBack: PATH_TO_GO_BACK,
    rawMaterials: listRawMaterials,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    history,
    match: {
      params: {
        id: pathParamId,
      },
    },
  } = ownProps;

  const isAddPage = pathParamId === undefined;
  const handleSubmit = isAddPage ? createProduct : updateProduct;

  return bindActionCreators({
    getEmployees,
    getProduct,
    getRawMaterials,
    onSubmit: handleSubmit(history, pathParamId),
  }, dispatch);
};

export default compose(
  withTranslation('general'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ProductForm',
    validate,
  }),
)(Page);
