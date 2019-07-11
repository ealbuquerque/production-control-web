import {
  handleRequest,
  options,
} from '../../../utils/http';

const deleteEmployee = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/employees/${id}`,
  options('DELETE'),
));

const getEmployees = () => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/employees`,
  options('GET'),
));

export default {
  deleteEmployee,
  getEmployees,
};
