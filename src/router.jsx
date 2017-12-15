import React from 'react';
import { HashRouter  as Router , Route , Switch , Link } from 'react-router-dom';

import index from './view/index';
import order from './view/order';
import my from './view/my';
import foodDetail from './view/foodDetail';

const getRouter = () => (
    <Router>
      <div className="cp-pageWrap">
        <div className="m-mainNav">
          <Link to="/index" className="item">主页</Link>
          <Link to="/order" className="item">订单</Link>
          <Link to="/my" className="item">我的</Link>
        </div>
        <Switch>
            <Route exact path="/" component={ index }/>
            <Route path="/index" component={ index }/>
            <Route path="/order" component={ order }/>
            <Route path="/my" component={ my }/>
            <Route path="/foodDetail/:id" component={ foodDetail }/>
        </Switch>
      </div>
    </Router>
);

export default getRouter;
