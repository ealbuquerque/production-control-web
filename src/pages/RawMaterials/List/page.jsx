import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import './styles.scss';

function Page({
  deleteRawMaterial,
  getRawMaterials,
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
  rawMaterials,
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
    <div className="raw-materials__container">
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
              <i className="fa fa-edit" />
            </span>
            <span>
              {addLabel}
            </span>
          </Link>
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
    </div>
  );
}

Page.defaultProps = {
  error: undefined,
  rawMaterials: undefined,
};

Page.propTypes = {
  deleteRawMaterial: PropTypes.func.isRequired,
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getRawMaterials: PropTypes.func.isRequired,
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
  rawMaterials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default Page;
