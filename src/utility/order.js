const addSortOrder = (orders, newOrder) => {
  const newOrders = [...orders, newOrder];

  return newOrders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export default addSortOrder;
