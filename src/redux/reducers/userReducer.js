const initialState = {
    user: null, 
    isLoggedIn: false, 
  };
  
  // Reducer function
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'USER_LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
 
      default:
        return state;
    }
  };
  
  export default userReducer;
  