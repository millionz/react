import React from 'react';
import ReactDOM from 'react-dom';
import tool from '../Tool';
import { Link } from 'react-router-dom';

import '../assets/scss/index.scss'

class Index extends React.Component{


  componentWillMount(){
    console.log( this );
    this.state = {
      listData : []
    }
    let listData = [
      {
        'id' : 1,
        'type' : 1,
        'img' : './assets/img/1.png',
        'title' : '蒜蓉小龙虾',
        'price' : '288.00',
        'num' : 10,
        'explain' : '秘制调料，麻辣鲜香。虾肉Q弹饱满，瞬间唤醒食欲！',
      },
      {
        'id' : 2,
        'type' : 2,
        'img' : './assets/img/2.png',
        'title' : '香辣鸡丁',
        'price' : '62.00',
        'num' : 3,
        'explain' : '肉质鲜嫩，香辣入味，吃货的天堂。'
      },
      {
        'id' : 3,
        'type' : 3,
        'img' : './assets/img/3.png',
        'title' : '葩猪蹄',
        'price' : '122.00',
        'num' : 99,
        'explain' : '精选的上好农家猪蹄，鲜香麻辣，原汁醇厚，耙糯不腻。'
      }
    ];
    this.setState({ 'listData' : listData });
  }

  render(){
    let list = this.state.listData.map(( item , index ) => {
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
    return (
      <div className="p-index">
        <div className="m-foodList">{ list }</div>
      </div>
    );
  }


}
export default Index;
