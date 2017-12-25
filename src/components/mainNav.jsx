import React from 'react';
import { NavLink } from 'react-router-dom';
class MainNav extends React.Component{
    constructor( props ){
      super( props );
      console.log( this );
    }
    componentWillMount(){

    }
    render(){
      let navDom = (
        <div className="m-mainNav ">
          <NavLink to="/index" activeClassName="active" className="item">主页</NavLink>
          <NavLink to="/order" activeClassName="active" className="item">订单</NavLink>
          <NavLink to="/my" activeClassName="active" className="item">我的</NavLink>
        </div>
      )
      return navDom;
    }
}


export default MainNav;
