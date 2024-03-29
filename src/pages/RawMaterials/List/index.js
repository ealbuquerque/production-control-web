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
  deleteRawMaterial,
  FORM_FILTER,
  getRawMaterials,
  onClickToCleanFilter,
  onSubmitFilter,
} from './actions';

import Page from './page';
import validate from './validate';

import {
  operations,
} from '../../../utils/filters/rawMaterials';

const mapStateToProps = ({
  rawMaterials: {
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
    clean: t('general:clean'),
    edit: t('general:edit'),
    name: t('general:name'),
    noRecordToDisplay: t('general:noRecordToDisplay'),
    operation: t('general:operation'),
    pageTitle: t('general:pages.rawMaterials.list.title'),
    quantity: t('general:quantity'),
    remove: t('general:remove'),
    select: t('general:select'),
    submit: t('general:filter'),
  },
  operations,
  quantities: [
    {
      value: 5,
    },
    {
      value: 10,
    },
    {
      value: 15,
    },
  ],
  rawMaterials: list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteRawMaterial,
  getRawMaterials,
  onClickToCleanFilter,
  onSubmitFilter,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: FORM_FILTER,
    validate,
  }),
)(Page);
