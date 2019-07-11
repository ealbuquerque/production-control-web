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
  createEmployee,
  getEmployee,
  PATH_TO_GO_BACK,
  updateEmployee,
} from './actions';

import {
  getWorkPeriods,
} from '../../WorkPeriods/List/actions';

import Page from './page';
import validate from './validate';

const mapStateToProps = ({
  employees: {
    error,
    item,
  },
  workPeriods: {
    list,
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
      pageTitle: t('general:pages.employees.form.title'),
      select: t('general:select'),
      submit: isAddPage ? t('general:add') : t('general:update'),
      workPeriod: t('general:workPeriod'),
    },
    pathToGoBack: PATH_TO_GO_BACK,
    workPeriods: list,
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
  const handleSubmit = isAddPage ? createEmployee : updateEmployee;

  return bindActionCreators({
    getEmployee,
    getWorkPeriods,
    onSubmit: handleSubmit(history, pathParamId),
  }, dispatch);
};

export default compose(
  withTranslation('general'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'EmployeeForm',
    validate,
  }),
)(Page);
