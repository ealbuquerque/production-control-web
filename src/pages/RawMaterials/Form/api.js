import {
  handleRequest,
  options,
} from '../../../utils/http';

const createRawMaterial = data => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials`,
  options('POST', data),
));

const getRawMaterial = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('GET'),
));

const updateRawMaterials = (id, data) => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('PUT', data),
));

export default {
  createRawMaterial,
  getRawMaterial,
  updateRawMaterials,
};
