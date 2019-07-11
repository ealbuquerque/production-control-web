import React from 'react';
import PropTypes from 'prop-types';

function Input({
  id,
  autoComplete,
  disabled,
  input,
  inputClass,
  label,
  maxLength,
  meta: {
    error,
    touched,
  },
  minLength,
  placeholder,
  type,
}) {
  const showError = touched && error;
  const properties = {
    ...input,
    id,
    autoComplete,
    className: `input ${inputClass} ${showError ? 'is-danger' : ''}`,
    disabled,
    maxLength,
    minLength,
    placeholder,
    type,
  };

  return (
    <div className="field">
      <label
        htmlFor={id}
        className="label"
      >
        {label}
        <div className="control">
          <input {...properties} />
        </div>
        {showError && (
          <p
            className="help is-danger"
          >
            {error}
          </p>
        )}
      </label>
    </div>
  );
}

Input.defaultProps = {
  autoComplete: 'new-password',
  disabled: false,
  inputClass: '',
  label: undefined,
  maxLength: null,
  meta: {
  },
  minLength: null,
  normalize: undefined,
  placeholder: undefined,
  type: 'text',
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  inputClass: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  minLength: PropTypes.number,
  normalize: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'number',
    'password',
    'radio',
    'text',
  ]),
};

export default Input;
