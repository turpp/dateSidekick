import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/materia/bootstrap.min.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux'
import {Provider} from 'react-redux'

ReactDOM.render(
  <div>
    <Provider store={store}>
    <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
reportWebVitals();
