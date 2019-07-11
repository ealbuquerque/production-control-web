import {
  handleRequest,
  options,
} from '../../../utils/http';

const createRawMaterial = data => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials`,
  options('POST', data),
));

const updateRawMaterials = (id, data) => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('PUT', data),
));

export default {
  createRawMaterial,
  updateRawMaterials,
};
