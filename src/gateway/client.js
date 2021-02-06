import axios from './axios-client';

const getProducts = async (search) => {
  const response = await axios.get('/product', { params: { search } });
  return response.data.data.products;
};

export default getProducts;
