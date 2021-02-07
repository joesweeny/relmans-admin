import axios from './axios-client';

export const getProducts = async (search) => {
  const response = await axios.get('/product', { params: { search } });
  return response.data.data.products;
};

export const updateProductStatus = async (id, status) => {
  await axios.patch(`/product/${id}`, { status });
};

export const updateProductPrice = async (id, price) => {
  await axios.patch(`/price/${id}`, { value: price });
};
