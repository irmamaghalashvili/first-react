export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export const userLogin = (userData) => {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
