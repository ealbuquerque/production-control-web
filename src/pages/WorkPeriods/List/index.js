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
  deleteWorkPeriod,
  getWorkPeriods,
} from './actions';

import Page from './page';

const mapStateToProps = ({
  workPeriods: {
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
    pageTitle: t('general:pages.workPeriods.list.title'),
    quantity: t('general:quantity'),
    remove: t('general:remove'),
    value: t('general:value'),
  },
  workPeriods: list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteWorkPeriod,
  getWorkPeriods,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
)(Page);
