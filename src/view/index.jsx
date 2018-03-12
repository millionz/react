import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Tool from '@/Tool'
import '@/assets/scss/index'


class Index extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      foodListData : []
    }
  }
  componentWillMount(){
    this.getHomeListData();
  }
  getHomeListData(){
    Tool.get( './assets/json/foodList.json' ).then( res => {
      this.setState({ foodListData : res })
      this.getFoodListDom();
    })
  }
  getFoodListDom(){
    let FoodListDom = this.state.foodListData.map(( item , index ) => {
      return (
        <li className="item" key={ index }>
          <Link to={ '/foodDetail/' + item.id }>
            <img src={ item.img }/>
            <div className="info-wrap">
              <span className="name">{ item.title }</span>
              <span className="price">￥{ item.price }</span>
              <p className="explain">{ item.explain }</p>
            </div>
          </Link>
        </li>
      )
    })
    return FoodListDom;
  }
  render(){
    let FoodListDom = this.getFoodListDom();
    return (
      <div className="p-index">
        <div className="m-foodList">{ FoodListDom }</div>
      </div>
    );
  }
}

export default Index;
