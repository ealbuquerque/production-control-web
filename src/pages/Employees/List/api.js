import {
  handleResponse,
  options,
} from '../../../utils/http';

const deleteEmployee = id => fetch(
  `${process.env.REACT_APP__API_URL}/employees/${id}`,
  options('DELETE'),
).then(handleResponse);

const getEmployees = () => fetch(
  `${process.env.REACT_APP__API_URL}/employees`,
  options('GET'),
).then(handleResponse);

export default {
  deleteEmployee,
  getEmployees,
};
