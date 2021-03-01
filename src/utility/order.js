export const addSortOrder = (orders, newOrder) => {
  const newOrders = [...orders, newOrder];

  return newOrders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const aggregateOrders = (orders) => {
  const count = [];

  orders.forEach((order) => {
    order.items.forEach((item) => {
      count.push({
        productId: item.productId,
        name: item.name,
        quantity: item.quantity,
      });
    });
  });

  return count
    .reduce((p, n) => {
      const o = p
        .filter((obj) => {
          return obj.name === n.name;
        })
        .pop() || { name: n.name, quantity: 0 };

      o.quantity += n.quantity;
      p.push(o);
      return p;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((itm, i, a) => i === a.indexOf(itm));
};
