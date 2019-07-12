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

import normalizeNumber from '../../../utils/normalize/number';

function Page({
  getRawMaterial,
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
    quantity: quantityLabel,
    submit: submitLabel,
  },
  pathToGoBack,
  submitting,
}) {
  useEffect(() => {
    if (pathParamId !== undefined) getRawMaterial(pathParamId);
  }, [
    getRawMaterial,
    pathParamId,
  ]);

  return (
    <div className="raw-material__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column is-half">
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
                id="quantity"
                component={Input}
                label={quantityLabel}
                name="quantity"
                normalize={normalizeNumber}
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
  getRawMaterial: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  labels: PropTypes.shape({
    cancel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
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
