import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import aws from './config/aws';

Amplify.configure({
  Auth: {
    region: aws.Region,
    userPoolId: aws.UserPoolId,
    userPoolWebClientId: aws.ClientId,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
