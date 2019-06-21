import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class MainNav extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){
    let NavConfig = [
      { path : '/workbench' , name : '工作台' },
      { path : '/undoList' , name : '代办' },
      { path : '/doneList' , name : '已办' },
      { path : '/messageList' , name : '通知' },
    ]
    this.setState({ 'NavConfig' : NavConfig })
  }
  render(){

    let NavLinkDom
    let path = this.props.nowPage && this.props.nowPage.path ? this.props.nowPage.path : false

    if( path ){
      NavLinkDom = this.state.NavConfig.map( item => {
       return( <Link key={ item.name } className={[ path == item.path ? 'item active' : 'item' ]} to={ item.path} >{ item.name }</Link> )
     })
    }

    let navDom = (
      <div className="m-mainNav">{ NavLinkDom }</div>
    )
    return navDom
  }
}
 
export default connect( state => state )( MainNav );
