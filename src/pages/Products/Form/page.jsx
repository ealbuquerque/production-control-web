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
  getEmployees,
  getProduct,
  getRawMaterials,
  handleSubmit,
  onSubmit,
  match: {
    params: {
      id: pathParamId,
    },
  },
  labels: {
    cancel: cancelLabel,
    employee: employeeLabel,
    name: nameLabel,
    pageTitle,
    select: selectLabel,
    submit: submitLabel,
    rawMaterials: rawMaterialsLabel,
  },
  pathToGoBack,
  rawMaterials,
  submitting,
  employees,
}) {
  useEffect(() => {
    getEmployees();
    getRawMaterials();
  }, [
    getEmployees,
    getRawMaterials,
  ]);

  useEffect(() => {
    if (pathParamId !== undefined) getProduct(pathParamId);
  }, [
    getProduct,
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
                id="employee"
                component={Select}
                label={`${employeeLabel} *`}
                name="employee"
                getOptionLabel={option => option.name}
                getOptionValue={option => option.id}
                options={employees}
                type="text"
                placeholder={selectLabel}
              />
              <Field
                id="rawMaterials"
                component={Select}
                label={`${rawMaterialsLabel} *`}
                name="rawMaterials"
                getOptionLabel={option => option.name}
                getOptionValue={option => option.id}
                isMulti
                options={rawMaterials}
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
  employees: undefined,
  rawMaterials: undefined,
};

const employeeShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  workPeriod: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }),
});

const rawMaterialsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

Page.propTypes = {
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getEmployees: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  getRawMaterials: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    employee: employeeShape,
    rawMaterials: PropTypes.arrayOf(rawMaterialsShape),
  }),
  labels: PropTypes.shape({
    cancel: PropTypes.string.isRequired,
    employee: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
    rawMaterials: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  pathToGoBack: PropTypes.string.isRequired,
  rawMaterials: PropTypes.arrayOf(rawMaterialsShape),
  submitting: PropTypes.bool.isRequired,
  employees: PropTypes.arrayOf(employeeShape),
};

export default Page;
