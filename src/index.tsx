import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
// import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store';
import Layouts from './Layout';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layouts>
        <Router />
      </Layouts>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
