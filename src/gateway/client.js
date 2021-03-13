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

export const getOrders = async (deliveryFrom, deliveryTo, status) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();

  const response = await axios.get('/order', {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      orderBy: 'created_at_desc',
      deliveryFrom,
      deliveryTo,
      status: status !== '' ? status : null,
    },
  });

  return response.data.data.orders;
};

export const updateOrder = async (id, payload) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();

  await axios.patch(`/order/${id}`, payload, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
