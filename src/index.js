import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App'
import store from './redux/store.js'

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

