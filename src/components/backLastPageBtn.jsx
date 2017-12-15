import React from 'react';
class BackLastPageBtn extends React.Component{
    constructor( props ){
      super( props );
      this.backLastPageMethod = this.backLastPageMethod.bind( this );
    }
    backLastPageMethod(){
      window.history.back();
    }
    render(){
        return (
          <div className="m-backLastPageBtn" onClick={ this.backLastPageMethod }>返回</div>
        );
    }
}
export default BackLastPageBtn;
