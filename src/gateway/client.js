import { Auth } from 'aws-amplify';
import axios from './axios-client';

export const getProducts = async () => {
  const response = await axios.get('/product');
  return response.data.data.products;
};

export const updateProduct = async (id, payload) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();

  await axios.patch(`/product/${id}`, payload, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const updatePrice = async (id, price) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();

  await axios.patch(
    `/price/${id}`,
    { value: price },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
};
