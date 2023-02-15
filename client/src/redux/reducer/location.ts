import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

export interface LocationState{
    location: { lat: number, lng: number },
    status: 'idle' | 'loading' | 'failed'
}

const initialState: LocationState = {
    location: { lat: 40.8054, lng:-74.0241},
    status: 'idle'
}



export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers:{
     addlocation: (state, action)=>{
       state.location = action.payload
       console.log(state.location);
     }
    },
})

export const { addlocation } = locationSlice.actions;

export const locationValue = (state: AppState) => state.location.location

export default locationSlice.reducer