import React from 'react';
import { HashRouter as Router , Route , Switch , Link , Redirect } from 'react-router-dom';

import MainNav from './components/mainNav';

import Login from './view/login';
import Index from './view/index';
import Order from './view/order';
import My from './view/my';
import FoodDetail from './view/foodDetail';


class AppRouter extends React.Component{
  constructor( props ){
    super( props );
    this.mainNavConfig = [
      { path : '/index' , component : <Index/> , name : 'index' },
      { path : '/login' , component : <Login/> , name : 'login' , showNav : false },
      { path : '/order' , component : <Order/> , name : 'order' },
      { path : '/my' , component : <My/> , name : 'my' },
      { path : '/foodDetail/:id' , component : <FoodDetail/> , name : 'foodDetail' },
    ];
    this.getUserInfo = this.getUserInfo.bind( this );
    this.xxxx = this.xxxx.bind( this );
  }
  xxxx(){

    //

  }
  getUserInfo(){
    let userName = 'millionz';
    let phone = 15310000470;
    let sex = '男';
    return { userName , phone , sex }
  }
  render(){
      let routeList = this.mainNavConfig.map(( item , index ) => {
        let routeDom = (
          <div className={ item.showNav !== undefined && !item.showNav ? 'g-pageWrap hideNav' : 'g-pageWrap' }>
            <Switch>{ item.component }</Switch>
            { item.showNav !== undefined && !item.showNav ? '' : <MainNav/> }
          </div>
        );
        return ( <Route key={ index } path={ item.path } children={ routeDom }/> )
      })
      return(
        <Router>
            <Switch>
              { routeList }
            </Switch>
        </Router>
      );
  }
}


export default AppRouter;
