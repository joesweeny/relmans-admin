export const addSortProduct = (products, newProduct) => {
  const newProducts = [...products, newProduct];

  return newProducts.sort((a, b) => a.name.localeCompare(b.name));
};

export const addSortPrice = (prices, newPrice) => {
  const newPrices = [...prices, newPrice];

  return newPrices.sort((a, b) => a.measurement.localeCompare(b.measurement));
};
