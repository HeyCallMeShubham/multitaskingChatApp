import { combineReducers, configureStore } from '@reduxjs/toolkit';
 
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userSlice from '../features/userSlice';
import notificationSlice from '../features/notificationSlice';
import selectedUserToChatSlice from '../features/selectedUserToChatSlice';



const rootReducer = combineReducers({

  user:userSlice,
  msgNotifications:notificationSlice,
  msgreceiver:selectedUserToChatSlice,

  
})

  const persistConfig = {
    
    key:'multitasker',
    version:1,
    blacklist:[],
    storage,
    
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export const store = configureStore({
    
    reducer:persistedReducer,

});






export const persistor = persistStore(store)