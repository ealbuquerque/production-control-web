import {
  handleRequest,
  options,
} from '../../../utils/http';

const deleteProduct = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/products/${id}`,
  options('DELETE'),
));

const getProducts = () => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/products`,
  options('GET'),
));

export default {
  deleteProduct,
  getProducts,
};
