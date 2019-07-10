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
  deleteRawMaterial,
  getRawMaterials,
} from './actions';

import Page from './page';

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
    edit: t('general:edit'),
    name: t('general:name'),
    noRecordToDisplay: t('general:noRecordToDisplay'),
    pageTitle: t('general:pages.rawMaterials.title'),
    quantity: t('general:quantity'),
    remove: t('general:remove'),
  },
  rawMaterials: list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteRawMaterial,
  getRawMaterials,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
)(Page);
