import {
  handleRequest,
  options,
} from '../../../utils/http';

const parseEmployee = ({
  name,
  workPeriod: {
    id: idWorkPeriod,
  },
}) => ({
  name,
  idWorkPeriod,
});

const createEmployee = data => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/employees`,
  options('POST', parseEmployee(data)),
));

const getEmployee = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/employees/${id}`,
  options('GET'),
));

const updateEmployees = (id, data) => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/employees/${id}`,
  options('PUT', parseEmployee(data)),
));

export default {
  createEmployee,
  getEmployee,
  updateEmployees,
};
