import React from 'react';
import tool from '../Tool';

import BackLastPageBtn from '../components/backLastPageBtn';

import '../assets/scss/foodDetail.scss'

class FoodDetail extends React.Component{
    constructor( props ){
      super( props );
      this.state = {
          id : this.props.match.params.id,
          detailData : {}
      };
    }
    componentWillMount(){ //在渲染之前调用一次
      tool.get( 'http://localhost:8080/assets/json/foodDetail-' + this.state.id + '.json' ).then( res => {
        this.setState({ 'detailData' : res })
      })
    }

    componentDidMount(){  //在渲染之后调用一次。

    }
    componentWillUnmount(){ //在卸载组件之前调用

    }
    render(){
      let detailData = this.state.detailData;
      let foodDetail = (
        <div className="m-foodDetail">
          <img className="food-pic" src={ detailData.img }/>
          <div className="m-foodDetail-baseInfo">
            <span className="name">{ detailData.title }</span>
            <span className="price">{ detailData.price }</span>
            <span className="number">{ detailData.num }</span>
            <p className="explain">{ detailData.explain }</p>
          </div>
          <div className="m-foodDetail-detailedInfo" dangerouslySetInnerHTML={{ __html: detailData.detail }}></div>
        </div>
      )
      return (
        <div className="p-foodDetail">
          <BackLastPageBtn/>
          { foodDetail }
        </div>
      );
    }
}
export default FoodDetail;
