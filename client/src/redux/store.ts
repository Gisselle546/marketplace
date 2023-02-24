import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './reducer/register';
import locationReducer from './reducer/location'
import adReducer from './reducer/ad'

export function makeStore(){
    return configureStore({
        reducer: {auth: authReducer,location: locationReducer, ad: adReducer}
        
    })
}

const store = makeStore()
export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
  >
  
  export default store
  