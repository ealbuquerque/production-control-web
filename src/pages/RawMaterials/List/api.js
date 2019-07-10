import {
  handleResponse,
  options,
} from '../../../utils/http';

const deleteRawMaterial = (id) => fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('DELETE'),
).then(handleResponse);

const getRawMaterials = () => fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials`,
  options('GET'),
).then(handleResponse);

export default {
  deleteRawMaterial,
  getRawMaterials,
};
