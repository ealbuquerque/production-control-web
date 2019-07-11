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

import Select from '../../../components/Select';

import './styles.scss';

function Page({
  deleteProduct,
  employees,
  getEmployees,
  getProducts,
  getRawMaterials,
  handleSubmit,
  labels: {
    actions: actionsLabel,
    add: addLabel,
    edit: editLabel,
    clean: cleanLabel,
    employee: employeeLabel,
    name: nameLabel,
    noRecordToDisplay: noRecordToDisplayLabel,
    pageTitle,
    rawMaterial: rawMaterialLabel,
    rawMaterials: rawMaterialsLabel,
    remove: removeLabel,
    select: selectLabel,
    submit: submitLabel,
  },
  onClickToCleanFilter,
  onSubmitFilter,
  products,
  rawMaterials,
  submitting,
}) {
  useEffect(() => {
    getEmployees();
    getProducts();
    getRawMaterials();
  }, [
    getEmployees,
    getProducts,
    getRawMaterials,
  ]);

  function renderTableRows({
    id,
    name,
    employee: {
      name: employeeName,
    },
    rawMaterials: productRawMaterials,
  }) {
    return (
      <tr key={id}>
        <th>
          {id}
        </th>
        <td>
          {name}
        </td>
        <td>
          {employeeName}
        </td>
        <td>
          {productRawMaterials.map(({
            name: rawMaterialName,
          }) => rawMaterialName).join(', ')}
        </td>
        <td className="table_body--actions">
          <p className="buttons">
            <Link
              className="button is-small"
              to={`/products/${id}`}
            >
              <span className="icon">
                <i className="fa fa-edit" />
              </span>
              <span>
                {editLabel}
              </span>
            </Link>
            <button
              type="button"
              className="button is-small"
              onClick={() => deleteProduct(id)}
            >
              <span className="icon">
                <i className="fa fa-trash" />
              </span>
              <span>
                {removeLabel}
              </span>
            </button>
          </p>
        </td>
      </tr>
    );
  }

  const showList = Boolean(products && products.length);
  return (
    <div className="products__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <Link
            className="button is-small"
            to="/products/new"
          >
            <span className="icon">
              <i className="fa fa-plus" />
            </span>
            <span>
              {addLabel}
            </span>
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit(onSubmitFilter)}>
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
              id="rawMaterial"
              component={Select}
              label={`${rawMaterialLabel} *`}
              name="rawMaterial"
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
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
                    <i className="fa fa-filter" />
                  </span>
                  <span>
                    {submitLabel}
                  </span>
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  onClick={onClickToCleanFilter}
                  className="button is-lightk"
                >
                  <span className="icon">
                    <i className="fa fa-eraser" />
                  </span>
                  <span>
                    {cleanLabel}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {showList && (
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    {nameLabel}
                  </th>
                  <th>
                    {employeeLabel}
                  </th>
                  <th>
                    {rawMaterialsLabel}
                  </th>
                  <th className="table_header--actions">
                    {actionsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map(renderTableRows)}
              </tbody>
            </table>
          )}
          {!showList && (
            <span>
              {noRecordToDisplayLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

Page.defaultProps = {
  employees: undefined,
  error: undefined,
  products: undefined,
  rawMaterials: undefined,
};

Page.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    workPeriod: PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  })),
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getEmployees: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getRawMaterials: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    actions: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    employee: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    noRecordToDisplay: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    rawMaterial: PropTypes.string.isRequired,
    rawMaterials: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    employee: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    rawMaterials: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  })),
  rawMaterials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  submitting: PropTypes.bool.isRequired,
};

export default Page;
