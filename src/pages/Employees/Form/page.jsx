import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Field,
} from 'redux-form';
import {
  Link,
} from 'react-router-dom';

import Input from '../../../components/Input';
import Select from '../../../components/Select';

function Page({
  getEmployee,
  getWorkPeriods,
  handleSubmit,
  onSubmit,
  match: {
    params: {
      id: pathParamId,
    },
  },
  labels: {
    cancel: cancelLabel,
    name: nameLabel,
    pageTitle,
    select: selectLabel,
    submit: submitLabel,
    workPeriod: workPeriodLabel,
  },
  pathToGoBack,
  submitting,
  workPeriods,
}) {
  useEffect(() => {
    getWorkPeriods();
  }, [
    getWorkPeriods,
  ]);

  useEffect(() => {
    if (pathParamId !== undefined) getEmployee(pathParamId);
  }, [
    getEmployee,
    pathParamId,
  ]);

  return (
    <div className="raw-material__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Field
                id="name"
                component={Input}
                label={`${nameLabel} *`}
                maxLength={100}
                minLength={0}
                name="name"
                type="text"
              />
              <Field
                id="workPeriod"
                component={Select}
                label={`${workPeriodLabel} *`}
                name="workPeriod"
                getOptionLabel={option => option.value}
                getOptionValue={option => option.value}
                options={workPeriods}
                type="text"
                placeholder={selectLabel}
              />
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="button is-link"
                  >
                    <span className="icon">
                      <i className="fa fa-save" />
                    </span>
                    <span>
                      {submitLabel}
                    </span>
                  </button>
                </div>
                <div className="control">
                  <Link
                    className="button is-light"
                    to={pathToGoBack}
                  >
                    <span className="icon">
                      <i className="fa fa-window-close" />
                    </span>
                    <span>
                      {cancelLabel}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Page.defaultProps = {
  error: undefined,
  initialValues: undefined,
  workPeriods: undefined,
};

const workPeriodShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
});

Page.propTypes = {
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getEmployee: PropTypes.func.isRequired,
  getWorkPeriods: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    workPeriod: workPeriodShape,
  }),
  labels: PropTypes.shape({
    cancel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
    workPeriod: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  pathToGoBack: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
  workPeriods: PropTypes.arrayOf(workPeriodShape),
};

export default Page;
