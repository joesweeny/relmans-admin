import { renderHook } from '@testing-library/react-hooks';
import useAsyncError from '../useAsyncError';

import { getProducts } from '../../gateway/client';
import useFetchesProducts from '../useFetchesProducts';

jest.mock('../../gateway/client');
jest.mock('../useAsyncError');

describe('useFetchesProducts', () => {
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns fetched products', async () => {
    getProducts.mockImplementationOnce(() => Promise.resolve(products));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesProducts(null)
    );

    await waitForNextUpdate();

    expect(result.current.products).toBe(products);
    expect(result.current.loading).toBe(false);
  });

  it('returns loading as true on first render', async () => {
    getProducts.mockImplementationOnce(() => Promise.resolve([]));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesProducts(null)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.products).toEqual([]);
    expect(result.current.loading).toBe(false);
  });

  it('throws an error if thrown by client', async () => {
    const error = new Error('Not found');
    getProducts.mockImplementationOnce(() => Promise.reject(error));
    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesProducts(null));

    expect(result.error).toEqual(error);
  });
});
