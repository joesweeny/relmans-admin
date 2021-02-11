import React, { useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

import Logo from '../Logo/Logo';
import UserPool from '../../config/user';

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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess', data);
      },

      onFailure: (error) => {
        console.log('onFailure', error);
      },

      newPasswordRequired: (data) => {
        console.log('newPasswordRequired', data);
      },
    });
  };

  return (
    <LoginWrapper>
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
        <div>
          <button type="submit" onClick={(e) => onSubmit(e)}>
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
