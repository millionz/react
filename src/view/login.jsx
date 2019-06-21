
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import actions from '@/redux/actions'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { request } from '@/Tool'

class Login extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind( this )
    this.sendLoginRequest = this.sendLoginRequest.bind( this )
    this.usernameHandleChange = this.usernameHandleChange.bind( this )
    this.passwordHandleChange = this.passwordHandleChange.bind( this )
    this.passwordHandleKeyPress = this.passwordHandleKeyPress.bind( this )
  }
  componentWillMount(){}

  usernameHandleChange( e ){
    this.setState({ username: e.target.value })
  }

  passwordHandleChange( e ){
    this.setState({ password: e.target.value })
  }

  passwordHandleKeyPress( e ){
    if( e.nativeEvent.keyCode == '13' ) this.handleSubmit()
  }

  sendLoginRequest(){

    request( 'post', 'sys/auth/login', {
      sysCode: [ '10080000', '10050000' ],
      type: 'PC',
      username: this.state.username,
      password: this.state.password
    }).then( res => {
      if( res.status == '200' ){
        message.success( '登录成功' )
        this.props.updateUserInfo( res.data )
        this.props.history.push( '/workbench' )
      }else{
        message.error( res.message )
      }
    })
  }

  handleSubmit( e ){
    this.sendLoginRequest()
  }

  render(){
    return (
      <div className="p-login">

      <img src="assets/img/logo.jpg" className="u-logo"/>

      <Form className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            value={ this.state.username }
            onChange={this.usernameHandleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={this.passwordHandleChange}
            onKeyPress={ this.passwordHandleKeyPress }
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot">
            Forgot password
          </a>
          <Button type="primary" className="login-form-button" onClick={ this.handleSubmit }>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>




      </div>
    );
  }
}

export default connect( state => state, actions )( Login )
