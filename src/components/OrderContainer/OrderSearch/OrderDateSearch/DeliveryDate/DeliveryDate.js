import React from 'react';
import styled from 'styled-components';
import { instanceOf, func, string } from 'prop-types';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';

const DeliveryDateWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-shrink: 0
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  cursor: pointer;
  font-size: 16px;

  input {
    font-family: inherit;
    width: 95%;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    background: transparent;
    text-align: center;
    cursor: pointer;
    color: #3d604c;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__time-list-item--selected,
  .react-datepicker__day--selected {
    background: green !important;
  }
  
  svg {
    margin: 0 15px 0 0;
  }
  
  @media (min-width: 1025px) {
    width: 100%;
    margin: 10px 0 10px 0;
    font-size: 20px;
  }
`;

const DeliveryDate = (props) => {
  const { date, placeholder, setDate } = props;

  const minDate = new Date(Date.now() + 3600 * 1000 * 24);

  return (
    <DeliveryDateWrapper>
      <FontAwesomeIcon icon={faTimes} size="1x" onClick={() => setDate(null)} />
      <DatePicker
        selected={date}
        minDate={minDate}
        openToDate={minDate}
        onChange={(d) => setDate(d)}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
      />
    </DeliveryDateWrapper>
  );
};

DeliveryDate.propTypes = {
  date: instanceOf(Date),
  placeholder: string.isRequired,
  setDate: func.isRequired,
};

DeliveryDate.defaultProps = {
  date: null,
};

export default DeliveryDate;
