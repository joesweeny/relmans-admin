import axiosMock from '../axios-client';

import getProducts from '../client';

describe('getProducts', () => {
  const products = [
    {
      id: '1e2bbdd0-b3e8-45cc-bdaf-fecd21c4e23b',
      name: 'Maris Piper',
      categoryId: '3dd61e25-502e-4050-9bcc-ad3ee24eb081',
      status: 'IN_STOCK',
      prices: [],
      createdAt: '2020-03-12T12:00:00+00:00',
      updatedAt: '2020-03-12T12:00:00+00:00',
    },
  ];

  const data = {
    data: {
      data: {
        products,
      },
    },
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches product data successfully from the API', async () => {
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(data));
    const response = await getProducts();

    await expect(response).toEqual(products);
  });

  it('fetches product data using expected url', async () => {
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(data));
    await getProducts();

    await expect(axiosMock.get).toHaveBeenCalledTimes(1);
    await expect(axiosMock.get).toHaveBeenCalledWith('/product');
  });

  it('throws error if error thrown from API', async () => {
    const error = 'Not found';
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error(error)));

    await expect(getProducts()).rejects.toThrow(error);
  });
});
