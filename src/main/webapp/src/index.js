 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "react-oidc-context";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const oidcConfig = {
  authority: "http://localhost:8080/realms/quarkus",
  client_id: "quarkus-react-rest-api",
  redirect_uri: "http://localhost:9090",
  post_logout_redirect_uri: "http://localhost:9090",
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
