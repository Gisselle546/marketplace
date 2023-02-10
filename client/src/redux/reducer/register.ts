import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { register } from "../actions/register";


export interface AuthState  {
    token: string
    status: 'idle' | 'loading' | 'failed'
}

const initialState: AuthState = {
    token: '',
    status: 'idle'
}

export const signupuser = createAsyncThunk(
    '../actions/register',
    async (data:{email:string, password:string}) =>{
        const response = await register(data);
        return response
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
      },
})

export const selectValue = (state: AppState) => state.auth.token

export default authSlice.reducer