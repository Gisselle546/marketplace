import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { create_ad } from "../actions/ad";

export interface Members {
    address?: any
    url?: string,
    bedrooms?: number,
    bath?: number
}

export interface Ad {
   ad: Members,
   status: 'idle' | 'loading' | 'failed'
}

const initialState: Ad = {
   ad: {
        address: { formatted_address: '' },
        url: '',
        bedrooms: 1,
        bath: 1
   },
   status: 'idle'
}



export const create_add = createAsyncThunk(
    '../actions/ad',
    async(data: any)=>{
        const response = await create_ad(data);
        return response;
    }
)

export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(create_add.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(create_add.fulfilled, (state, action) => {
            state.status = 'idle',
            state.ad = action.payload
           
          })
         
      },
})

export const adValue = (state: AppState) => state.ad

export default adSlice.reducer