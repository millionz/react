import React from 'react';
import ReactDOM from 'react-dom';

class MessageList extends React.Component{
  constructor( props ){
    super( props );
  }
  componentWillMount(){}
  render(){
    return (
      <div className="p-messageList">
        通知消息列表
      </div>
    );
  }
}

export default MessageList;
