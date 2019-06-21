import { setLocal , getLocal, removeLocal } from '@/Tool'

const initState = {
  nowPage: {},
  userInfo : getLocal( 'userInfo' ) || false
}

export default ( state = initState , action ) => {

  switch( action.type ){

    case 'UPDATE_NOWPAGE':
      var { nowpage } = state
      nowpage = action.data
      return {
        ...state,
        nowPage: { ...nowpage }
      }
    break

    case 'UPDATE_USERINFO':
      var { userInfo } = state
      userInfo = action.data
      setLocal( 'userInfo' , userInfo )
      return {
        ...state,
        userInfo: { ...userInfo }
      }
    break

    case 'LOGIN_OUT':
      var { userInfo } = state
      userInfo = false
      removeLocal( 'userInfo' )
      return false
    break

    default: return state

  }
}
