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
  createRawMaterial,
  getRawMaterial,
  updateRawMaterial,
} from './actions';

import Page from './page';
import validate from './validate';

const mapStateToProps = ({
  rawMaterials: {
    error,
    item,
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
    error,
    initialValues: isAddPage ? undefined : item,
    labels: {
      cancel: t('general:cancel'),
      name: t('general:name'),
      pageTitle: t('general:pages.rawMaterials.form.title'),
      quantity: t('general:quantity'),
      submit: isAddPage ? t('general:add') : t('general:update'),
    },
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
  const handleSubmit = isAddPage ? createRawMaterial : updateRawMaterial;

  return bindActionCreators({
    getRawMaterial,
    onSubmit: handleSubmit(history, pathParamId),
  }, dispatch);
};

export default compose(
  withTranslation('general'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'rawMaterialForm',
    validate,
  }),
)(Page);
