import React from 'react';
import ReactDOM from 'react-dom';

class FoodDetail extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-foodDetail">
        详情页
      </div>
    );
  }
}

export default FoodDetail;
