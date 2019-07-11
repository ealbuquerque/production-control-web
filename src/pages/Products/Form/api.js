import {
  handleRequest,
  options,
} from '../../../utils/http';

const parseProduct = ({
  name,
  employee: {
    id: idEmployee,
  },
  rawMaterials,
}) => ({
  name,
  idEmployee,
  rawMaterials: rawMaterials.map(item => item.id),
});

const createProduct = data => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/products`,
  options('POST', parseProduct(data)),
));

const getProduct = id => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/products/${id}`,
  options('GET'),
));

const updateProducts = (id, data) => handleRequest(fetch(
  `${process.env.REACT_APP__API_URL}/products/${id}`,
  options('PUT', parseProduct(data)),
));

export default {
  createProduct,
  getProduct,
  updateProducts,
};
