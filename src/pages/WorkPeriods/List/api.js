import {
  handleRequest,
  options,
} from '../../../utils/http';

const deleteWorkPeriod = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/work-periods/${id}`,
  options('DELETE'),
));

const getWorkPeriods = () => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/work-periods`,
  options('GET'),
));

export default {
  deleteWorkPeriod,
  getWorkPeriods,
};
