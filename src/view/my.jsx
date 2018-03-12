import React from 'react';
import ReactDOM from 'react-dom';

class My extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-my">
        个人主页
      </div>
    );
  }
}

export default My;
