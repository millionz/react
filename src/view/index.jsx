import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Tool from '@/Tool'
import '@/assets/scss/index'


class Index extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      foodListData : [],
      renderData : []
    }
  }

  componentWillMount(){
    this.getRenderData().then( res => {
      if( res.length > 0 ) this.setState({ 'renderData' : res })
    })
  }


  getFoodListData(){
    let data = Tool.get( './assets/json/foodList.json' );
    return data;

    //下面的代码对返回数据做了个延迟处理，可以用来用来测试 ES7的 async
    // return new Promise( resolve => {
    //   setTimeout(() => resolve( data ), 2000);
    // })
  }


  getFoodListDom( foodListData ){
    // <img src={ item.img }/>
    let FoodListDom = foodListData.map(( item , index ) => {
      return (
        <li className="item" key={ index }>
          <Link to={ '/foodDetail/' + item.id }>
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

  async getRenderData(){
     let data = await this.getFoodListData()
     this.setState({ 'foodListData' : data })
     let dom = await this.getFoodListDom( data )
     return dom;
  }

  render(){
    return (
      <div className="p-index">
        <div className="m-foodList">{ this.state.renderData }</div>
      </div>
    )
  }
}

export default Index;
