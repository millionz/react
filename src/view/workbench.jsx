import React from 'react';
import ReactDOM from 'react-dom';

class Workbench extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-workbench">
        工作台
      </div>
    );
  }
}

export default Workbench;
