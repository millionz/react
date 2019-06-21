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
  }

  componentWillMount() {
    this.routerChange()
  }

  routerChange( nowPageData ){
    nowPageData = nowPageData ? nowPageData : {
      pathname :  window.location.hash.replace( '#' , '' )
    }
    let _nowPageData = find( routerConfig, item => item.path == nowPageData.pathname )
    this.props.updateNowPage( _nowPageData )
  }

  render(){
    return(
      <HashRouter>
        <div className="g-main">
          <Prompt message={ this.routerChange }/>
          <MainHeader/>
          <Switch>
            {
              routerConfig.map( route => {
                return <Route exact key={ route.name } path={ route.path } component={ route.component }/>
              })
            }
          </Switch>
          <MainNav/>
        </div>
      </HashRouter>
    )
  }
}

export default connect( state => state , actions )( AppRouter )
