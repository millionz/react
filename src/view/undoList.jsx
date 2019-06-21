import React from 'react';
import ReactDOM from 'react-dom';

class UndoList extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-undoList">
        代办列表
      </div>
    );
  }
}

export default UndoList;
