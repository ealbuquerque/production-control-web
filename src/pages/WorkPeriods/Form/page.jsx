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

import normalizeWorkPeriod from '../../../utils/normalize/workPeriod';

function Page({
  getWorkPeriod,
  handleSubmit,
  onSubmit,
  match: {
    params: {
      id: pathParamId,
    },
  },
  labels: {
    cancel: cancelLabel,
    pageTitle,
    value: valueLabel,
    submit: submitLabel,
  },
  pathToGoBack,
  submitting,
}) {
  useEffect(() => {
    if (pathParamId !== undefined) getWorkPeriod(pathParamId);
  }, [
    getWorkPeriod,
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
                id="value"
                component={Input}
                label={`${valueLabel} *`}
                maxLength={2}
                minLength={0}
                name="value"
                normalize={normalizeWorkPeriod}
                placeholder="8h"
                type="text"
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
};

Page.propTypes = {
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getWorkPeriod: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }),
  labels: PropTypes.shape({
    cancel: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  pathToGoBack: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Page;
