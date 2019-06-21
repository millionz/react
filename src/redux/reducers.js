import { setLocal , getLocal } from '@/Tool'

console.log( getLocal( 'userInfo' ) )
const initState = {
  nowPage: {},
  userInfo : getLocal( 'userInfo' ) || false
}

export default ( state = initState , action ) => {

  switch( action.type ){

    case 'UPDATE_NOWPAGE':
      let { nowpage } = state
      nowpage = action.data
      return {
        ...state,
        nowPage: { ...nowpage }
      }

    case 'UPDATE_USERINFO':
      let { userInfo } = state
      userInfo = action.data
      setLocal( 'userInfo' , userInfo )
      return {
        ...state,
        userInfo: { ...userInfo }
      }

    default: return state

  }
}
