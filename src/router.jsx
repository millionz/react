import React from 'react'
import { connect } from 'react-redux'
import { Prompt , Redirect } from 'react-router'
import { HashRouter as Router , Route , Link , Switch  } from 'react-router-dom'
import MainNav from './components/mainNav'
import MainHeader from './components/MainHeader'
import Login from './view/login'
import Index from './view/index'
import Order from './view/order'
import My from './view/my'
import FoodDetail from './view/foodDetail'


let action = dispatch => {
  return {
    updateNowPageData : data => {
      //此处应有获取当前页面路由信息，并赋值给下面action的逻辑
      dispatch({
        type : 'UPDATE_NOWPAGE',
        data : data
      })
    }
  }
}


 class AppRouter extends React.Component{
  constructor( props ){
    super( props );
    this.routerChange = this.routerChange.bind( this );
    this.state = {
      routerConfig : [
        { path : '/index' , component : Index , isExact : true , name : '首页' , reg : /^\/index$/g },
        { path : '/login' , component : Login , isExact : false , name : '登录页' , reg : /^\/login/g },
        { path : '/order' , component : Order , isExact : false , name : '订单页' , reg : /^\/order/g },
        { path : '/my' , component : My , isExact : false , name : '个人首页' , reg : /^\/my/g },
        { path : '/foodDetail/:id' , component : FoodDetail , isExact : false , name : '美食详情' , reg : /^\/foodDetail\/\d+$/g },
      ],
      nowPageData : { path : '/xxxx' , component : false , isExact : false , name : '默认页面' , reg : false }
    }
  }

  routerChange( location ){
    //利用Prompt组件监听到路由切换事件，再根据routerConfig配置信息中的正则来判断当前路由的位置，从而得到相应路由数据
    let routerData = false;
    this.state.routerConfig.forEach( item => {
      if( item.reg.test( location.pathname) ) routerData = Object.assign( item , { pathname : location.pathname });
    })
    if( !routerData ) return;
    this.props.updateNowPageData( routerData )
    this.setState({ 'nowPageData' : routerData });
  }
  render(){
    return(
      <Router>
        <div className="g-main">
          <Prompt message={ this.routerChange }/>
          <MainHeader nowPageData={ this.state.nowPageData }/>
          <Switch>
            {
              this.state.routerConfig.map( item => {
                let routeItem1 = <Route exact path={ item.path } component={ item.component } key={ item.name }/>
                let routeItem2 = <Route path={ item.path } component={ item.component } key={ item.name }/>
                return item.isExact ? routeItem1 : routeItem2
              })
            }
            <Route path="/" render={() => {
              return <Redirect to="/index"/>
            }} />
            </Switch>
          <MainNav/>
        </div>
      </Router>
    )
  }
}

export default connect( state => state , action )( AppRouter );
