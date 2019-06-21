import React from 'react'
import { connect } from 'react-redux'
import actions from '@/redux/actions'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Prompt , Redirect } from 'react-router'
import routerConfig from 'config/routerConfig'
import MainNav from 'components/mainNav'
import MainHeader from 'components/mainHeader'
import { map, find, merge } from 'lodash'


 class AppRouter extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      routerConfig,
      nowPageData: {}
    }
    this.routerChange = this.routerChange.bind( this )
    this.showHeader = this.showHeader.bind( this )
    this.showNav = this.showNav.bind( this )

  }

  componentWillMount(){

    this.routerChange()
  }

  routerChange( nowPageData ){

    if( !this.props.userInfo ) return window.location.href = '#/login'

    nowPageData = nowPageData ? nowPageData : {
      pathname :  window.location.hash.replace( '#' , '' )
    }
    let _nowPageData = find( routerConfig, item => item.path == nowPageData.pathname )
    this.props.updateNowPage( _nowPageData )
  }

  showHeader(){
    return !this.props.nowPage.hideHeader
  }

  showNav(){
    return !this.props.nowPage.hideNav
  }

  render(){
    let mainClassName = 'g-main'
    if( !this.showHeader() ) mainClassName += ' hideHeader'
    if( !this.showNav() ) mainClassName += ' hideNav'
    return(
      <HashRouter>
        <div className={ mainClassName }>
          <Prompt message={ this.routerChange }/>
          { this.showHeader() ? <MainHeader/> : null }
          <div className="g-pagewrap">
            <Switch>
              {
                routerConfig.map( route => {
                  return <Route exact key={ route.name } path={ route.path } component={ route.component }/>
                })
              }
            </Switch>
          </div>
          { this.showNav() ? <MainNav/> : null }
        </div>
      </HashRouter>
    )
  }
}

export default connect( state => state , actions )( AppRouter )
