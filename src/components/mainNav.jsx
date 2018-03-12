import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MainNav extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){
    let NavConfig = [
      { link : '/index' , name : '主页' },
      { link : '/order' , name : '订单' },
      { link : '/my' , name : '我的' }
    ]
    this.setState({ 'NavConfig' : NavConfig })
  }
  render(){
    let NavLinkDom = this.state.NavConfig.map( item => {
      return( <Link key={ item.name } className="item" to={ item.link} >{ item.name }</Link> )
    })
    let navDom = (
      <div className="m-mainNav">{ NavLinkDom }</div>
    )
    return navDom;
  }
}


export default connect( state => state )( MainNav );
