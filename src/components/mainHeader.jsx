import React from 'react'
import { connect } from 'react-redux'


class MainHeader extends React.Component{

  constructor( props ){
    super( props );
    this.backLastPageMethod = this.backLastPageMethod.bind( this )
  }
  componentWillMount(){

  }
  backLastPageMethod(){

    window.history.back();
  }
  render(){
    let name = this.props.nowPage && this.props.nowPage.name ? this.props.nowPage.name : false
    return (
      <div className="m-mainHeader">
        {
          !name || name == '默认页面' || name == '工作台' ? null : <button className="m-backLastPageBtn" onClick={ this.backLastPageMethod }>返回</button>
        }
        {
          name ? <h3 className="m-pageTitle">{ name }</h3> : null
        }
      </div>
    );
  }
}




export default connect( state => state )( MainHeader )
