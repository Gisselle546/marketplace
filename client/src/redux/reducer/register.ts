import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { register } from "../actions/register";
import { getStorageValue, setStorageValue} from "../hooks/useSessionStorage";

export interface AuthState  {
    token: string | {}
    status: 'idle' | 'loading' | 'failed'
}

const initialState: AuthState = {
    token: getStorageValue('token','') ||'',
    status: 'idle'
}

export const signupuser = createAsyncThunk(
    '../actions/register',
    async (data:{email:string, password:string}) =>{
        const response = await register(data);
        setStorageValue('token', response);
        return response;
    } 
)

export const signinuser = createAsyncThunk(
    '../actions/login',
    async(data:{email: string, password: string})=>{
        const response = await register(data);
        setStorageValue('token', response);
        return response;
    }
)

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
            state.token = action.payload.accesstoken
           
          })
          .addCase(signinuser.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(signinuser.fulfilled, (state, action) => {
            state.status = 'idle',
            state.token = action.payload.accesstoken
           
          })
      },
})

export const selectValue = (state: AppState) => state.auth.token

export default authSlice.reducer