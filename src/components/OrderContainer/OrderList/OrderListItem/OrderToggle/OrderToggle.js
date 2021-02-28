import React, { useContext } from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import OrderPdf from '../OrderPdf/OrderPdf';
import { OrderContext } from '../../../../../context/OrderContext';

const OrderToggleWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 1025px) {
    font-size: 34px;
  }
`;

const OrderToggle = (props) => {
  const { id, open, toggle } = props;
  const { orders } = useContext(OrderContext);

  const order = orders.find((o) => o.id === id);

  return (
    <OrderToggleWrapper>
      <PDFDownloadLink
        document={<OrderPdf order={order} />}
        fileName={`${id}.pdf`}
        style={{ color: '#f1943c' }}
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          size="1x"
          style={{ marginRight: 20 }}
        />
      </PDFDownloadLink>
      <FontAwesomeIcon
        icon={faEye}
        size="1x"
        onClick={() => toggle(!open)}
        style={{ color: open ? 'green' : '#f1943c' }}
      />
    </OrderToggleWrapper>
  );
};

OrderToggle.propTypes = {
  id: string.isRequired,
  open: bool.isRequired,
  toggle: func.isRequired,
};

export default OrderToggle;
