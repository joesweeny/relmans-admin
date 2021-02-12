import React, { useState } from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

import Loader from '../Loader/Loader';
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
  text-align: center;

  p {
    color: #ff4826;
  }
`;

const FormWrapper = styled.form`
  width: 80%;
  margin-bottom: 40px;

  input {
    margin: 10px;
    text-align: center;
    background-color: #ffffff;
    border: solid 2px #1c1c1c;
    font-size: 18px;
    color: #000000;
    border-radius: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }

  button {
    width: 60%;
    cursor: pointer;
    border: solid 2px #1c1c1c;
    border-radius: 10px;
    padding: 5px;
    background-color: #f1943c;
    font-size: 16px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0 10px 0;
  }

  @media (min-width: 758px) {
    width: 60%;
    margin-bottom: 20px;
  }

  @media (min-width: 959px) {
    width: 20%;
    margin-bottom: 100px;
  }
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Login = (props) => {
  const { login, loading, error } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <LoginWrapper>
      <Loader loading={loading}>
        <Logo />
        <FormWrapper>
          <LabelWrapper htmlFor="username">
            Email
            <input
              id="username"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelWrapper>
          <LabelWrapper htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelWrapper>
          <p>{error ?? null}</p>
          <div>
            <button type="submit" onClick={(e) => onSubmit(e)}>
              Submit
            </button>
          </div>
        </FormWrapper>
      </Loader>
    </LoginWrapper>
  );
};

Login.propTypes = {
  loading: bool.isRequired,
  login: func.isRequired,
  error: string,
};

Login.defaultProps = {
  error: null,
};

export default Login;
