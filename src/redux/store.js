
  import { configureStore,combineReducers } from "@reduxjs/toolkit";
  import { persistStore, persistReducer } from 'redux-persist'
  import storage from 'redux-persist/lib/storage' 

   import employerReducer from "../redux/slice"
   import userReducer from "../redux/userSlice"

   const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer=combineReducers({
    user:userReducer,
    employer:employerReducer
  })
  const persistedReducer = persistReducer(persistConfig,rootReducer )

  export const store = configureStore({
    reducer: persistedReducer,
  });


  export const persistor=persistStore(store)