import axios from './axios-client';

export const getProducts = async () => {
  const response = await axios.get('/product');
  return response.data.data.products;
};

export const updateProductFeatured = async (id, featured) => {
  await axios.patch(`/product/${id}`, { featured });
};

export const updateProductStatus = async (id, status) => {
  await axios.patch(`/product/${id}`, { status });
};

export const updateProductPrice = async (id, price) => {
  await axios.patch(`/price/${id}`, { value: price });
};
