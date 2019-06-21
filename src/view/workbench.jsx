import React from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'antd'
import { connect } from 'react-redux'
import actions from '@/redux/actions'
import { Descriptions, Button, message } from 'antd'
class Workbench extends React.Component{
  constructor( props ){
    super( props );
    this.loginOut = this.loginOut.bind( this )
  }
  componentWillMount(){
    // console.log( this.props.userInfo );
  }
  loginOut(){
    this.props.loginOut()
    this.props.history.push( '/login' )
    message.success( '成功退出' )

  }
  render(){
    let userInfo = this.props.userInfo
    return (
      <div className="p-workbench">
       <Divider>工牌信息</Divider>
        {
          userInfo ?
          <Descriptions title="欢迎您">
            <Descriptions.Item label="姓名">{ userInfo.username }</Descriptions.Item>
            <Descriptions.Item label="岗位">{ userInfo.postName }</Descriptions.Item>
            <Descriptions.Item label="部门">{ userInfo.depName }</Descriptions.Item>
            <Descriptions.Item label="公司">{ userInfo.orgName }</Descriptions.Item>
          </Descriptions>
          : null
        }
        {
          userInfo ? <Button type="danger" block onClick={ this.loginOut }>退出登录</Button> : null
        }
      </div>
    )
  }
}

export default connect( state => state , actions )( Workbench )
