import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Loader from '../../../../Loader/Loader';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderItemList from './OrderDetails/OrderItemList/OrderItemList';
import { getOrder } from '../../../../../gateway/client';
import { OrderContext } from '../../../../../context/OrderContext';

const OrderInformationWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  border-top: 2px solid #cecbcbee;
  margin-top: 10px;
`;

const OrderInformation = (props) => {
  const { id } = props;
  const { dispatchOrderStatus } = useContext(OrderContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (i) => {
    const o = await getOrder(i);
    setItems(o.items);
  };

  const updateStatus = (status) => {
    setLoading(true);
    dispatchOrderStatus(id, status);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(id).then(() => setLoading(false));
  }, [id]);

  return (
    <OrderInformationWrapper>
      <Loader loading={loading}>
        <OrderItemList items={items} />
        <OrderDetails id={id} items={items} updateStatus={updateStatus} />
      </Loader>
    </OrderInformationWrapper>
  );
};

OrderInformation.propTypes = {
  id: string.isRequired,
};

export default OrderInformation;
