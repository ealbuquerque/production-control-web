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
  createWorkPeriod,
  getWorkPeriod,
  PATH_TO_GO_BACK,
  updateWorkPeriod,
} from './actions';

import Page from './page';
import validate from './validate';

const mapStateToProps = ({
  workPeriods: {
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
      pageTitle: t('general:pages.workPeriods.form.title'),
      submit: isAddPage ? t('general:add') : t('general:update'),
      value: t('general:value'),
    },
    pathToGoBack: PATH_TO_GO_BACK,
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
  const handleSubmit = isAddPage ? createWorkPeriod : updateWorkPeriod;

  return bindActionCreators({
    getWorkPeriod,
    onSubmit: handleSubmit(history, pathParamId),
  }, dispatch);
};

export default compose(
  withTranslation('general'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'WorkPeriodForm',
    validate,
  }),
)(Page);
