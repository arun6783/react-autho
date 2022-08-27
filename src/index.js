import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN||'dev-gl3nsqil.us.auth0.com'
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID ||'4Bt66dL9Fyvumzb378WTHnnhDlAcosse'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain={domain} clientId={clientid} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
