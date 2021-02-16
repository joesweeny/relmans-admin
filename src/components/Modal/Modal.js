import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { bool, func, node } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../hoc/Aux/Aux';
import Backdrop from './Backdrop';
import ModalWrapper from './ModalWrapper';

const Header = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    color: white;

    &:hover {
      cursor: pointer;
      color: #f1943c;
      transform: scale(1.3);
    }
  }
`;

const Modal = (props) => {
  const { children, clicked, show } = props;

  if (!show) {
    return null;
  }

  return createPortal(
    <Aux>
      <Backdrop onClick={clicked} />
      <ModalWrapper>
        <Header>
          <FontAwesomeIcon icon={faTimesCircle} size="1x" onClick={clicked} />
        </Header>
        {children}
      </ModalWrapper>
    </Aux>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  children: node,
  clicked: func.isRequired,
  show: bool.isRequired,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
