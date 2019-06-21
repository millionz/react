import Login from 'view/login'
import Workbench from 'view/workbench'
import UndoList from 'view/undoList'
import DoneList from 'view/doneList'
import MessageList from 'view/messageList'

export default [
  { path: '/', name: '默认路由', component: Workbench },
  { path: '/login', name: '登录', component: Login },
  { path: '/workbench', name: '工作台', component: Workbench },
  { path: '/undoList', name: '代办列表', component: UndoList },
  { path: '/doneList', name: '已办列表', component: DoneList },
  { path: '/messageList', name: '通知消息列表', component: MessageList }

]
