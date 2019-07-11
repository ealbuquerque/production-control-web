import {
  handleRequest,
  options,
} from '../../../utils/http';

const createWorkPeriod = data => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/work-periods`,
  options('POST', data),
));

const getWorkPeriod = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/work-periods/${id}`,
  options('GET'),
));

const updateWorkPeriods = (id, data) => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/work-periods/${id}`,
  options('PUT', data),
));

export default {
  createWorkPeriod,
  getWorkPeriod,
  updateWorkPeriods,
};
