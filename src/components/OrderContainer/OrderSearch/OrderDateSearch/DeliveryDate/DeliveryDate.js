import React from 'react';
import styled from 'styled-components';
import { instanceOf, func, string } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DeliveryDateWrapper = styled.div`
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  color: #3d604c;

  input {
    font-family: inherit;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    padding: 5px 5px 5px 10px;
    background: transparent;
    text-align: left;
    cursor: pointer;
    color: #757586;
    width: 100%;
    text-transform: uppercase;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__time-list-item--selected,
  .react-datepicker__day--selected {
    background: green !important;
  }

  .react-datepicker__close-icon {
    &:after {
      background-color: #3d604c;
    }
  }

  .react-datepicker-wrapper {
    width: 98%;
  }

  @media (min-width: 1025px) {
    width: 100%;
    margin: 10px 5px 10px 5px;
    font-size: 14px;
    color: #3d604c;
  }
`;

const DeliveryDate = (props) => {
  const { date, placeholder, setDate } = props;

  const minDate = new Date(Date.now() + 3600 * 1000 * 24);

  return (
    <DeliveryDateWrapper>
      <DatePicker
        selected={date}
        openToDate={minDate}
        onChange={(d) => setDate(d)}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        isClearable
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
