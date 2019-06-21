import React from 'react';
import ReactDOM from 'react-dom';

class DoneList extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-doneList">
        已办列表
      </div>
    );
  }
}

export default DoneList;
