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
  deleteEmployee,
  getEmployees,
} from './actions';

import Page from './page';

const mapStateToProps = ({
  employees: {
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
    pageTitle: t('general:pages.employees.list.title'),
    remove: t('general:remove'),
    workPeriod: t('general:workPeriod'),
  },
  employees: list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteEmployee,
  getEmployees,
}, dispatch);

export default compose(
  withTranslation('general'),
  connect(mapStateToProps, mapDispatchToProps),
)(Page);
