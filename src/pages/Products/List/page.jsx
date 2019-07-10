import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Page({
  deleteProduct,
  getProducts,
  labels: {
    actions: actionsLabel,
    add: addLabel,
    edit: editLabel,
    name: nameLabel,
    noRecordToDisplay: noRecordToDisplayLabel,
    pageTitle,
    quantity: quantityLabel,
    remove: removeLabel,
  },
  products,
}) {
  useEffect(() => {
    getProducts();
  }, [
    getProducts,
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
            <button
              type="button"
              className="button is-small"
              disabled
            >
              <span className="icon">
                <i className="fa fa-edit" />
              </span>
              <span>
                {editLabel}
              </span>
            </button>
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

  const showList = products && products.length;
  return (
    <div className="products__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <button
            type="button"
            className="button is-small"
            disabled
          >
            <span className="icon">
              <i className="fa fa-edit" />
            </span>
            <span>
              {addLabel}
            </span>
          </button>
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
  error: undefined,
  products: undefined,
};

Page.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getProducts: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    actions: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    noRecordToDisplay: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default Page;
