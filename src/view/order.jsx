import React from 'react';
import ReactDOM from 'react-dom';

class Order extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-order">
        订单页
      </div>
    );
  }
}

export default Order;
