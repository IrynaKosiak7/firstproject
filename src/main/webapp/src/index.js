import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "react-oidc-context";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const oidcConfig = {
  authority: process.env.REACT_APP_AUTH_URL || "",
  client_id: process.env.REACT_APP_CLIENT_ID || "",
  redirect_uri: process.env.REACT_APP_REDIRECT_URI || "",
  post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT || "",
  port_back: process.env.REACT_APP_BACKEND || "",
};
root.render(
  <React.StrictMode>
  <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
