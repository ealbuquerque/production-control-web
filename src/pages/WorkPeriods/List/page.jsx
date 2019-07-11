import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import './styles.scss';

function Page({
  deleteWorkPeriod,
  getWorkPeriods,
  labels: {
    actions: actionsLabel,
    add: addLabel,
    edit: editLabel,
    noRecordToDisplay: noRecordToDisplayLabel,
    pageTitle,
    remove: removeLabel,
    value: valueLabel,
  },
  workPeriods,
}) {
  useEffect(() => {
    getWorkPeriods();
  }, [
    getWorkPeriods,
  ]);

  function renderTableRows({
    id,
    value,
  }) {
    return (
      <tr key={id}>
        <th>
          {id}
        </th>
        <td>
          {value}
        </td>
        <td className="table_body--actions">
          <p className="buttons">
            <Link
              className="button is-small"
              to={`/work-periods/${id}`}
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
              onClick={() => deleteWorkPeriod(id)}
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

  const showList = Boolean(workPeriods && workPeriods.length);
  return (
    <div className="work-periods__container">
      <h1 className="title">
        {pageTitle}
      </h1>
      <div className="columns">
        <div className="column">
          <Link
            className="button is-small"
            to="/work-periods/new"
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
                    {valueLabel}
                  </th>
                  <th className="table_header--actions">
                    {actionsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {workPeriods.map(renderTableRows)}
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
  workPeriods: undefined,
};

Page.propTypes = {
  deleteWorkPeriod: PropTypes.func.isRequired,
  error: PropTypes.shape({
    details: PropTypes.shape({
    }),
  }),
  getWorkPeriods: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    actions: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    noRecordToDisplay: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  workPeriods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

export default Page;
