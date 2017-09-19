import React from 'react';
import { Link } from 'react-router';
class Nav extends React.Component{
    render(){
      let navBox = [
        { name : '主页' , link : 'index' },
        { name : '订单' , link : 'order' },
        { name : '我的' , link : 'my' }
      ]
      let navDom = navBox.map(function( res , index ){
        return <Link to={ res.link } key={index} className="item">{ res.name }</Link>
      })
      return(<div className="m-mainNav">{ navDom }</div>)
    }
}
export default Nav;
