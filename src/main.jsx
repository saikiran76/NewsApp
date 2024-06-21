import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import MainApp from './mainApp.jsx';
import { Provider } from 'react-redux';
import store from './utils/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <MainApp/>
  </Provider>
 
  
)
