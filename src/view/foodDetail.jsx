import React from 'react';
import ReactDOM from 'react-dom';
import Tool from '@/Tool'
import '@/assets/scss/foodDetail'

class FoodDetail extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      id : false,
      foodDetailData : {},
      renderData : []
    }
  }
  componentWillMount(){
    this.setState({ id : this.props.match.params.id })
    this.getRenderData();
  }
  getFoodDetailData(){
    let id = this.props.match.params.id;
    return new Promise( resolve => {
      let data = Tool.get(`./assets/json/foodDetail-${id}.json`);
      return resolve( data )
    })
  }
  getFoodDetailDom( foodDetailData ){
    // <img className="food-pic" src={ foodDetailData.img }/>
    return (
      <div className="m-foodDetail">
        <div className="m-foodDetail-baseInfo">
          <span className="name">{ foodDetailData.title }</span>
          <span className="price">{ foodDetailData.price }</span>
          <span className="number">{ foodDetailData.num }</span>
          <p className="explain">{ foodDetailData.explain }</p>
        </div>
        <div className="m-foodDetail-detailedInfo" dangerouslySetInnerHTML={{ __html : foodDetailData.detail }}></div>
      </div>
    )


  }
  async getRenderData(){
    let data = await this.getFoodDetailData();
    let dom = await this.getFoodDetailDom( data );
    this.setState({ foodDetailData : data })
    this.setState({ renderData : dom })
  }
  render(){
    return (
      <div className="p-foodDetail">
        { this.state.renderData }
      </div>
    );
  }
}

export default FoodDetail;
