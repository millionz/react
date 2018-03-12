const initState = {
  nowPage : { path : '/xxxx' , component : false , isExact : false , name : '默认页面' , reg : false },
  userInfo : false,
  shoppingCart : []
}
export default ( state = initState , action ) => {
  switch( action.type ){

    case 'UPDATE_NOWPAGE':

      Object.assign( state.nowPage , action.data )
      return { nowPage : state.nowPage };

    case 'UPDATE_USERINFO':
      Object.assign( state.userInfo , action.data );
      return { userInfo : state.userInfo };

    case 'ADD_TO_CART':
      state.shoppingCart = [ ...state.shoppingCart , action.data ];
      return { shoppingCart : state.shoppingCart };

    case 'DELETE_TO_CART':
      state.shoppingCart = [...state.shoppingCart].splice( action.data , 1 );
      return { shoppingCart : state.shoppingCart };

    default: return state;

  }
}
