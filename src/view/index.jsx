import React from 'react';
import ReactDOM from 'react-dom';
import tool from '../Tool';
import { listData } from '../assets/json/cart'
import '../assets/scss/index.scss'

class Index extends React.Component{
  constructor(){
		super();
		this.state = {
			listData : []
		};
	}

  componentDidMount(){

    let listData = [
      {
        'dealId' : 1,
        'dealType' : 1,
        'dealTimeType' : 1,
        'dealImg' : './assets/img/a.jpg',
        'dealTitle' : '好吃的菜菜',
        'dealPrice' : '288.00',
        'dealNum' : 10,
        'dealDetail' : '芋头:5:5-海带:3:8-藕:2:10',
        'dealStar' : 5,
        'dealSell' :  312
      },
      {
        'dealId' : 2,
        'dealType' : 2,
        'dealTimeType' : 2,
        'dealImg' : './assets/img/b.jpg',
        'dealTitle' : '好吃的饭',
        'dealPrice' : '688.00',
        'dealNum' : 10,
        'dealDetail' : '牛肉:1:3',
        'dealStar' : 5,
        'dealSell' :  112
      }
    ];
    this.setState({ 'listData' : listData });
    // console.log( listData );
    // tool.get( 'https://ggfe.herokuapp.com/interview/cart.json' ).then( res => {
    //   this.setState({ 'listData' : res });
    // })
  }

  render(){
    let list = this.state.listData.map(( item , index ) => {
      return <li className="item" key={ index }><img src={ item.dealImg }/><span className="name">{ item.dealTitle }</span></li>
    })
    return (
      <div className="p-index">
        <div className="m-foodList">{ list }</div>
      </div>
    );
  }


}
export default Index;
