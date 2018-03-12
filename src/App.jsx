import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router.jsx';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import '@/assets/scss/_reset'
import '@/assets/scss/_components'
import '@/assets/scss/_common'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('app')
);

if( module.hot ) module.hot.accept();
