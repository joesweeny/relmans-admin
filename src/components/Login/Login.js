import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import Logo from '../Logo/Logo';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3d604c;
  color: #f1943c;
  height: 100vh;
  max-width: 100vw;
`;

const FormWrapper = styled.form`
  width: 80%;

  input {
    margin: 10px;
    text-align: center;
  }

  button {
    width: 60%;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0 10px 0;
  }

  @media (min-width: 758px) {
    width: 60%;
  }

  @media (min-width: 959px) {
    width: 30%;
  }
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Login = (props) => {
  const { login } = props;

  return (
    <LoginWrapper>
      <Logo />
      <FormWrapper>
        <LabelWrapper htmlFor="username">
          Email
          <input id="username" type="text" />
        </LabelWrapper>
        <LabelWrapper htmlFor="password">
          Password
          <input id="password" type="password" />
        </LabelWrapper>
        <div>
          <button type="submit" onClick={() => login(true)}>
            Submit
          </button>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
};

Login.propTypes = {
  login: func.isRequired,
};

export default Login;
