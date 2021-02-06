import axios from './axios-client';

const getProducts = async () => {
  const response = await axios.get('/product');
  return response.data.data.products;
};

export default getProducts;
