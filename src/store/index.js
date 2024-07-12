import { configureStore } from '@reduxjs/toolkit';
import tweetsReducer from './tweetsSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
      tweets: tweetsReducer,
      user: userReducer
    }
  });
  
  export default store;