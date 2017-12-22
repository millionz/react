import React from 'react';
import { HashRouter as Router , Route , Switch , Link , Redirect } from 'react-router-dom';

import MainNav from './components/mainNav';

import login from './view/login';
import index from './view/index';
import order from './view/order';
import my from './view/my';
import foodDetail from './view/foodDetail';


class AppRouter extends React.Component{
  constructor( props ){
    super( props );
    this.mainNavConfig = [
      { path : '/index' , component : index },
      { path : '/login' , component : login },
      { path : '/order' , component : order },
      { path : '/my' , component : my },
      { path : '/foodDetail/:id' , component : foodDetail },
    ];
    this.getUserInfo = this.getUserInfo.bind( this );
    this.showMainNav = this.showMainNav.bind( this );
    this.enterRoute = this.enterRoute.bind( this );
    this.xxxx = this.xxxx.bind( this );
  }
  xxxx(){

    //

  }
  enterRoute(){
    console.log( 1 );
  }
  showMainNav( nowPath ){
    console.log( nowPath )
    return false;
  }
  getUserInfo(){
    let userName = 'millionz';
    let phone = 15310000470;
    let sex = '男';
    return { userName , phone , sex }
  }
  render(){
      let navList = this.mainNavConfig.map(( item , index ) => {
        return ( <Route key={ index } path={ item.path } component={ item.component } onEnter={ this.enterRoute }/> )
      })
      return(
        <Router>
          <div className="g-pageWrap">
            <Switch>
              <MainNav isShow={ this.showMainNav }/>
            </Switch>
            <Switch>
              <Route exact path="/" component={ index }/>
              { navList }
            </Switch>
          </div>
        </Router>
      );
  }
}


export default AppRouter;
