import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , IndexRoute , hashHistory } from 'react-router';

import index from './view/index';
import order from './view/order';
import my from './view/my';
import Mainnav from './components/nav';

import './assets/scss/_reset.scss'
import './assets/scss/_components.scss'

class App extends React.Component{
    render(){
        return(
          <div>
            {this.props.children}
            <Mainnav/>
          </div>
        )
    }
}

ReactDOM.render((
  <div>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="index" component={index}/>
            <Route path="order" component={order}/>
            <Route path="my" component={my}/>
        </Route>
    </Router>
  </div>
), document.getElementById('app') )
