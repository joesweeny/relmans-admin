import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  background-color: #3d604c;
  width: 450px;
  height: fit-content;
  text-align: center;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  z-index: 1050;
  color: #f1943c;

  p {
    font-size: 16px;
  }
`;

export default ModalWrapper;
