import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

let action = dispatch => {
  return {
    //删除商品
    deleteGoods : data => {
      dispatch({
        type : 'DELETE_TO_CART',
        data : data
      })
    }
  }
}

class ShopingCar extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      shopListIsShow : false
    }
    this.showShopList = this.showShopList.bind( this )
    this.hideShopList = this.hideShopList.bind( this )
  }
  componentWillMount(){

  }
  showShopList(){
    this.setState({ shopListIsShow : true })
  }
  hideShopList(){
    this.setState({ shopListIsShow : false })
  }
  render(){

    let shopList = null;
    let shopListLength = this.props.shoppingCart || 0
    if( shopListLength > 0 ){
      shopList = this.props.shoppingCart.map(( item , index ) => {
        return (
          <li>
            <span className="name">{ item.name }</span>
            <span className="price">{ item.price }</span>
            <span className="number">
              <span className="number-reduceBtn">-</span>
              { item.number }
              <span className="number-addBtn">+</span>
            </span>
          </li>
        )
      })
    }



    return (
      <div className={ this.state.shopListIsShow ? 'm-shopingCar showShopList' : 'm-shopingCar' }>
        <div className="m-shopingCar-mask" onClick={ this.hideShopList }></div>
        <div className="m-shopingCar-content">
          <ul className="m-shopingCar-shopList">
          { shopList }
          </ul>
          <div className="m-shopingCar-ft">
            <span className="showShopListBtn" onClick={ this.showShopList }>{ shopListLength > 0 ? '查看' : '空' }</span>
            {
              shopListLength > 0 ?
              <span className="allCost">￥888.88</span> :
              <span className="nothing">什么都还没有噢</span>
            }
            <span className="checkBtn">去结算</span>
          </div>
        </div>
      </div>
    )
  }
}


export default connect( state => state , action )( ShopingCar );
