import {
  handleResponse,
  options,
} from '../../../utils/http';

const deleteProduct = id => fetch(
  `${process.env.REACT_APP__API_URL}/products/${id}`,
  options('DELETE'),
).then(handleResponse);

const getProducts = () => fetch(
  `${process.env.REACT_APP__API_URL}/products`,
  options('GET'),
).then(handleResponse);

export default {
  deleteProduct,
  getProducts,
};
