import React from 'react';
import ReactDOM from 'react-dom';
import tool from '../Tool';

import '../assets/scss/index.scss'

class Index extends React.Component{
  constructor(){
		super();
		this.state = {
			listData : []
		};
	}

  componentDidMount(){
    tool.get( 'https://ggfe.herokuapp.com/interview/cart.json' ).then( res => {
      this.setState({ 'listData' : res });
    })
  }

  render(){
    let list = this.state.listData.map(( item , index ) => {
      return <li className="item" key={index}><img src={ item.dealImg}/><span className="name">{ item.dealTitle }</span></li>
    })
    return (
      <div className="p-index">
        <div className="m-foodList">{ list }</div>
      </div>
    );
  }


}
export default Index;
