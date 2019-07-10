import {
  handleResponse,
  options,
} from '../../../utils/http';

const deleteWorkPeriod = id => fetch(
  `${process.env.REACT_APP__API_URL}/work-periods/${id}`,
  options('DELETE'),
).then(handleResponse);

const getWorkPeriods = () => fetch(
  `${process.env.REACT_APP__API_URL}/work-periods`,
  options('GET'),
).then(handleResponse);

export default {
  deleteWorkPeriod,
  getWorkPeriods,
};
