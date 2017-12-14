import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './router';

import './assets/scss/_reset.scss'
import './assets/scss/_components.scss'

ReactDom.render( getRouter() , document.getElementById('app') );


if( module.hot ) module.hot.accept();
