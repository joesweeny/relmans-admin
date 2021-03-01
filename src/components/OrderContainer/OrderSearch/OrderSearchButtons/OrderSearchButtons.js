import React, { useContext } from 'react';
import styled from 'styled-components';
import { instanceOf, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSearch } from '@fortawesome/free-solid-svg-icons';

import { OrderContext } from '../../../../context/OrderContext';

const OrderSearchButtonsWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-size: 12px;

  svg {
    margin: 5px 0 5px 0;
  }

  @media (min-width: 1025px) {
    flex-direction: row;

    svg {
      margin: 0 10px 0 10px;
    }
  }
`;

const OrderSearchButtons = (props) => {
  const { from, to } = props;
  const { dispatchOrderFetch } = useContext(OrderContext);

  return (
    <OrderSearchButtonsWrapper>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => dispatchOrderFetch(from, to)}
      />
      <FontAwesomeIcon icon={faCalculator} onClick={() => alert('Hello')} />
    </OrderSearchButtonsWrapper>
  );
};

OrderSearchButtons.propTypes = {
  from: instanceOf(Date),
  to: instanceOf(Date),
};

OrderSearchButtons.defaultProps = {
  from: null,
  to: null,
};

export default OrderSearchButtons;
