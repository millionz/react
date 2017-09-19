import React from 'react';
import ReactDOM from 'react-dom';

import tool from '../Tool';

class Index extends React.Component{
  componentDidMount(){

    console.log( tool );

    tool.fetch( 'https://ggfe.herokuapp.com/interview/cart.json' , {
      method : 'get'
    },{
      'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }).then( res => {
      console.log( res )
    })
  }

  render(){
      return (
        <div>这是index页</div>
      );
  }
}
export default Index;
