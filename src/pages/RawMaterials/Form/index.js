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
  updateRawMaterial,
} from './actions';

import Page from './page';
import validate from './validate';

const mapStateToProps = ({
  rawMaterials: {
    error,
    selectedItem,
  },
}, {
  t,
}) => ({
  error,
  labels: {
    add: t('general:add'),
    cancel: t('general:cancel'),
    name: t('general:name'),
    pageTitle: t('general:pages.rawMaterials.form.title'),
    quantity: t('general:quantity'),
    update: t('general:update'),
  },
  rawMaterial: selectedItem,
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    history,
  } = ownProps;

  return bindActionCreators({
    handleSubmitCreate: data => createRawMaterial(data, history),
    handleSubmitUpdate: data => updateRawMaterial(data, history),
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
