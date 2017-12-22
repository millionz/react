import React from 'react';
import { Link } from 'react-router-dom';
class MainNav extends React.Component{
    constructor( props ){
      super( props );
    }
    componentWillMount(){
      console.log( this );
      // this.isShow = this.props.isShow( this.props.location.pathname );
    }
    render(){
        return (
          <div className="m-mainNav">
            <Link to="/index" className="item">主页</Link>
            <Link to="/order" className="item">订单</Link>
            <Link to="/my" className="item">我的</Link>
          </div>
        );
    }
}
export default MainNav;
