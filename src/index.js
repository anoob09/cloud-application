import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './utils/Store';
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
