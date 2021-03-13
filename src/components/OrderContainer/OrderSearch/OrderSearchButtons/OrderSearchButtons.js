import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { instanceOf, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSearch } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';

import OrderAggregatePdf from '../../OrderAggregatePdf/OrderAggregatePdf';
import { OrderContext } from '../../../../context/OrderContext';
import { aggregateOrders } from '../../../../utility/order';

const OrderSearchButtonsWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 150px;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  background-color: #ffffff;

  svg {
    margin: 5px 0 5px 0;
    color: #f1943c;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    font-size: 24px;
    height: 100%;

    svg {
      margin: 0 10px 0 10px;
    }
  }
`;

const OrderSearchButtons = (props) => {
  const { from, to, status } = props;
  const { orders, dispatchOrderFetch } = useContext(OrderContext);
  const [isReady, setIsReady] = useState(false);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    const items = aggregateOrders(orders);
    setPdf(<OrderAggregatePdf items={items} />);

    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, [orders]);

  return (
    <OrderSearchButtonsWrapper>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => dispatchOrderFetch(from, to, status)}
      />
      {pdf !== null && isReady ? (
        <PDFDownloadLink document={pdf} fileName="ordertotals.pdf">
          <FontAwesomeIcon icon={faCalculator} />
        </PDFDownloadLink>
      ) : null}
    </OrderSearchButtonsWrapper>
  );
};

OrderSearchButtons.propTypes = {
  from: instanceOf(Date),
  to: instanceOf(Date),
  status: string,
};

OrderSearchButtons.defaultProps = {
  from: null,
  to: null,
  status: null,
};

export default OrderSearchButtons;
