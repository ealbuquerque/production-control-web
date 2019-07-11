import {
  handleRequest,
  options,
} from '../../../utils/http';

const deleteRawMaterial = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials/${id}`,
  options('DELETE'),
));

const getRawMaterials = () => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/raw-materials`,
  options('GET'),
));

export default {
  deleteRawMaterial,
  getRawMaterials,
};
