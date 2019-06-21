import { merge } from 'lodash'

const initState = {
  
  nowPage: {},
  userInfo : false
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
      return {
        ...state,
        userInfo: { ...userInfo }
      }

    default: return state

  }
}
