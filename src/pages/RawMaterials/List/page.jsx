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

function Page({
  deleteRawMaterial,
  getRawMaterials,
  handleSubmit,
  labels: {
    actions: actionsLabel,
    add: addLabel,
    clean: cleanLabel,
    edit: editLabel,
    name: nameLabel,
    noRecordToDisplay: noRecordToDisplayLabel,
    operation: operationLabel,
    pageTitle,
    quantity: quantityLabel,
    remove: removeLabel,
    select: selectLabel,
    submit: submitLabel,
  },
  onClickToCleanFilter,
  onSubmitFilter,
  operations,
  quantities,
  rawMaterials,
  submitting,
}) {
  useEffect(() => {
    getRawMaterials();
  }, [
    getRawMaterials,
  ]);

  function renderTableRows({
    id,
    name,
    quantity,
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
          {quantity}
        </td>
        <td className="table_body--actions">
          <p className="buttons">
            <Link
              className="button is-small"
              to={`/raw-materials/${id}`}
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
              onClick={() => deleteRawMaterial(id)}
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

  const showList = Boolean(rawMaterials && rawMaterials.length);
  return (
    <>
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <Link
            className="button is-small"
            to="/raw-materials/new"
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
      <div className="page__filter">
        <div className="columns">
          <div className="column">
            <form onSubmit={handleSubmit(onSubmitFilter)}>
              <div className="columns">
                <div className="column">
                  <Field
                    id="quantity"
                    component={Select}
                    label={`${quantityLabel} *`}
                    name="quantity"
                    getOptionLabel={option => option.value}
                    getOptionValue={option => option.value}
                    options={quantities}
                    type="text"
                    placeholder={selectLabel}
                  />
                </div>
                <div className="column">
                  <Field
                    id="operation"
                    component={Select}
                    label={`${operationLabel} *`}
                    name="operation"
                    getOptionLabel={option => option.label}
                    getOptionValue={option => option.label}
                    options={operations}
                    type="text"
                    placeholder={selectLabel}
                  />
                </div>
                <div className="buttons">
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
                  <button
                    type="button"
                    onClick={onClickToCleanFilter}
                    className="button is-light"
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
                    {quantityLabel}
                  </th>
                  <th className="table_header--actions">
                    {actionsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rawMaterials.map(renderTableRows)}
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
    </>
  );
}

Page.defaultProps = {
  error: undefined,
  operations: undefined,
  rawMaterials: undefined,
};

Page.propTypes = {
  deleteRawMaterial: PropTypes.func.isRequired,
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getRawMaterials: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    actions: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    clean: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    noRecordToDisplay: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
  operations: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
    }),
  ),
  onClickToCleanFilter: PropTypes.func.isRequired,
  onSubmitFilter: PropTypes.func.isRequired,
  quantities: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  submitting: PropTypes.bool.isRequired,
  rawMaterials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default Page;
