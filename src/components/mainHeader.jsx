import React from 'react'
import { connect } from 'react-redux'


class MainHeader extends React.Component{

  constructor( props ){
    super( props );
    this.backLastPageMethod = this.backLastPageMethod.bind( this );
  }
  componentWillMount(){
    console.log( this )
  }
  backLastPageMethod(){
    window.history.back();
  }
  render(){
    return (
      <div className="m-mainHeader">
        <button className="m-backLastPageBtn" onClick={ this.backLastPageMethod }>返回</button>
        <h3 className="m-pageTitle">{ this.props.nowPageData.name }</h3>
      </div>
    );
  }
}




export default MainHeader;
