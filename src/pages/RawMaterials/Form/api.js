import {
  handleResponse,
  options,
} from '../../../utils/http';

const createRawMaterial = data => fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials`,
  options('POST', data),
).then(handleResponse);

const updateRawMaterials = (id, data) => fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('PUT', data),
).then(handleResponse);

export default {
  createRawMaterial,
  updateRawMaterials,
};
