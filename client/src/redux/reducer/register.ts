import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { register } from "../actions/register";
import { login } from "../actions/login";
import { getStorageValue, setStorageValue, deleteStorageValue } from "../hooks/useSessionStorage";

export interface AuthState  {
    token: string | {}
    status: 'idle' | 'loading' | 'failed',
    error?: null | any
}

const initialState: AuthState = {
    token: getStorageValue('token','') ||'',
    status: 'idle',
    error: null
}

export const signupuser = createAsyncThunk(
    '../actions/register',
    async (data:{email:string, password:string}, {rejectWithValue}) =>{
      try{  
        const response = await register(data);
        setStorageValue('token', response.data.accesstoken);
        return response.data.accesstoken;
      }catch(error){
        return rejectWithValue(error)
      }
    } 
)

export const signinuser = createAsyncThunk(
    '../actions/login',
    async(data:{email: string, password: string}, { rejectWithValue })=>{
      try{
          const response = await login(data);
          setStorageValue('token', response.data.accesstoken);
          return response.data.accesstoken;
      }catch(error){
        
        return rejectWithValue(error)
      }
          
    }
)

export const logout = () =>{
   deleteStorageValue('token')
}

export const authSlice = createSlice({
  
    name: 'auth',
    initialState,
    reducers:{
    
    },
    extraReducers: (builder) => {
        builder
          .addCase(signupuser.pending, (state) => {
            state.status = 'loading'
           
          })
          .addCase(signupuser.fulfilled, (state, action) => {
            state.status = 'idle',
            state.token = action.payload
            state.error = null
            
          })
          .addCase(signupuser.rejected, (state, action) => {
            
            state.error = action.payload
          })
         
          .addCase(signinuser.pending, (state) => {
            state.status = 'loading'
           

          })
          .addCase(signinuser.fulfilled, (state, action) => {
            state.status = 'idle',
            state.token = action.payload
            state.error = null
           
          })
          .addCase(signinuser.rejected, (state, action) => {
            
            state.error = action.payload
          })
         
      },
})

export const selectValue = (state: AppState) => state.auth.token
export const errorValue = (state: AppState) => state.auth.error
export const loadingValue = (state: AppState) => state.auth.status



export default authSlice.reducer