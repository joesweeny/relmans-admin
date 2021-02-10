import axios from './axios-client';

export const getProducts = async () => {
  const response = await axios.get('/product');
  return response.data.data.products;
};

export const updateProduct = async (id, payload) => {
  await axios.patch(`/product/${id}`, payload);
};

export const updatePrice = async (id, price) => {
  await axios.patch(`/price/${id}`, { value: price });
};
