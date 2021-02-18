import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';

import './index.css';
import "antd/dist/antd.css";

import "react-image-gallery/styles/css/image-gallery.css";


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);