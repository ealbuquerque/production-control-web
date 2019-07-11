/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Select from 'react-select';

export default (props) => {
  const showError = props.meta.touched && props.meta.error;

  return (
    <div className="field">
      <label
        htmlFor={props.id}
        className="label"
      >
        {props.label}
        <div className="control">
          <Select
            {...props}
            id={props.id}
            value={props.input.value}
            onChange={value => props.input.onChange(value)}
            onBlur={() => props.input.onBlur(props.input.value)}
            options={props.options}
          />
        </div>
        {showError && (
          <p
            className="help is-danger"
          >
            {props.meta.error}
          </p>
        )}
      </label>
    </div>
  );
};
