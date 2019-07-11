import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import './styles.scss';

function Page({
  deleteEmployee,
  getEmployees,
  labels: {
    actions: actionsLabel,
    add: addLabel,
    edit: editLabel,
    name: nameLabel,
    noRecordToDisplay: noRecordToDisplayLabel,
    pageTitle,
    remove: removeLabel,
    workPeriod: workPeriodLabel,
  },
  employees,
}) {
  useEffect(() => {
    getEmployees();
  }, [
    getEmployees,
  ]);

  function renderTableRows({
    id,
    name,
    workPeriod: {
      value,
    },
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
          {value}
        </td>
        <td className="table_body--actions">
          <p className="buttons">
            <Link
              className="button is-small"
              to={`/employees/${id}`}
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
              onClick={() => deleteEmployee(id)}
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

  const showList = Boolean(employees && employees.length);
  return (
    <div className="raw-materials__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <Link
            className="button is-small"
            to="/employees/new"
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
          {showList && (
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    {nameLabel}
                  </th>
                  <th>
                    {workPeriodLabel}
                  </th>
                  <th className="table_header--actions">
                    {actionsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map(renderTableRows)}
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
  employees: undefined,
};

Page.propTypes = {
  deleteEmployee: PropTypes.func.isRequired,
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
  labels: PropTypes.shape({
    actions: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    noRecordToDisplay: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    workPeriod: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page;
