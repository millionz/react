export default {
  updateNowPage( data ){
    return { type: 'UPDATE_NOWPAGE' , data }
  },
  updateUserInfo( data ){
    return { type: 'UPDATE_USERINFO' , data }
  },
  loginOut(){
    return { type: 'LOGIN_OUT' }
  }
}
