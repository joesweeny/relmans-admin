const products = [
  {
    id: '1d38394c-02d2-4688-98f4-58e8c33ba952',
    name: 'Cauliflower',
    categoryId: '893cf1e6-6751-4aa1-b8fe-7a22dad0b4e1',
    status: 'IN_STOCK',
    prices: [
      {
        id: '7ef146d2-db7f-41c3-a9aa-bfae8306a3d2',
        value: 200,
        size: 1,
        measurement: 'EACH',
      },
      {
        id: '7b607394-ceda-4ee4-8762-0c85841c7a95',
        value: 150,
        size: 1,
        measurement: 'HALF',
      },
    ],
  },
  {
    id: '5e4988d6-09f3-4d30-8be9-1006aa50ff53',
    name: 'Golden Delicious Apples',
    categoryId: '85334e9f-338b-48f5-af00-782cb383a2d1',
    status: 'IN_STOCK',
    prices: [
      {
        id: '29b0587f-8df5-496f-a60f-a7f25a97225d',
        value: 100,
        size: 1,
        measurement: 'BAG',
      },
    ],
  },
  {
    id: '71d582f9-cf71-48b6-bed1-30e0cf46823b',
    name: 'Cucumber',
    categoryId: '95e45a45-0bbd-455d-8575-5a4f00f857ce',
    status: 'OUT_OF_STOCK',
    prices: [
      {
        id: '29b0587f-8df5-496f-a60f-a7f25a97225d',
        value: 100,
        size: 1,
        measurement: 'EACH',
      },
      {
        id: 'c03e8e6b-9b80-4b97-bd38-51068900d911',
        value: 50,
        size: 1,
        measurement: 'HALF',
      },
    ],
  },
];

export default products;
