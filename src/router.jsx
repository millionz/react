import React from 'react';
import { HashRouter  as Router , Route , Switch , Link } from 'react-router-dom';

import index from './view/index';
import order from './view/order';
import my from './view/my';

const getRouter = () => (
    <Router>
      <div>
        <div className="m-mainNav">
          <Link to="/index" className="item">主页</Link>
          <Link to="/order" className="item">订单</Link>
          <Link to="/my" className="item">我的</Link>
        </div>
        <Switch>
            <Route  path="/index" component={index}/>
            <Route path="/order" component={order}/>
            <Route path="/my" component={my}/>
        </Switch>
      </div>
    </Router>
);

export default getRouter;
