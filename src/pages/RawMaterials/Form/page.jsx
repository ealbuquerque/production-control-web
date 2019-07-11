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

import './styles.scss';

function Page({
  handleSubmit,
  handleSubmitCreate,
  handleSubmitUpdate,
  labels: {
    add: addLabel,
    cancel: cancelLabel,
    name: nameLabel,
    pageTitle,
    quantity: quantityLabel,
    update: updateLabel,
  },
  pristine,
  rawMaterial,
  submitting,
}) {
  // useEffect(() => {
  //   getRawMaterials();
  // }, [
  //   getRawMaterials,
  // ]);

  // const isDisabledSubmitButton = pristine || submitting;
  const isDisabledSubmitButton = submitting;
  return (
    <div className="raw-material__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit(handleSubmitCreate)}>
            <div>
              <Field
                id="name"
                component={Input}
                minLength={0}
                maxLength={100}
                label={`${nameLabel} *`}
                name="name"
                type="text"
              />
              <Field
                id="quantity"
                component={Input}
                label={quantityLabel}
                name="quantity"
                type="text"
              />
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="submit"
                    disabled={isDisabledSubmitButton}
                    className="button is-link"
                  >
                    <span className="icon">
                      <i className="fa fa-save" />
                    </span>
                    <span>
                      {addLabel}
                    </span>
                  </button>
                </div>
                <div className="control">
                  <Link
                    className="button is-light"
                    to="/raw-materials"
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
  rawMaterial: undefined,
};

Page.propTypes = {
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  handleSubmit: PropTypes.func.isRequired,
  handleSubmitCreate: PropTypes.func.isRequired,
  handleSubmitUpdate: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    add: PropTypes.string.isRequired,
    cancel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    update: PropTypes.string.isRequired,
  }).isRequired,
  pristine: PropTypes.bool.isRequired,
  rawMaterial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  submitting: PropTypes.bool.isRequired,
};

export default Page;
