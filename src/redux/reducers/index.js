import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer'; 
import dataReducer from './dataReducer'; 

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});

export default rootReducer;
