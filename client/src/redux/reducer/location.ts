import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";
import { getStorageLocal, setStorageLocal } from "../hooks/useSessionStorage";
import { getRealestate } from "../actions/getRealestate";
import { getDetails } from "../actions/getDetails";


export interface LocationState{
    location: {} | any
    details: {} | any
    geo: { lat: number, lng: number} | any
    status: 'idle' | 'loading' | 'failed',
    error?: null | any
}

const initialState: LocationState = {
    location: getStorageLocal('data') || [],
    details: null,
    status: 'idle',
    geo: getStorageLocal('location') || {lat: 40.8054, lng: -74.0241},
    error: null
    
}

export const getRealEstateData = createAsyncThunk(
    '../action/getRealestate',
    async(data: any, {rejectWithValue}) =>{
       let params = { ...data.dataDrive};

        try{
          
            const response = await getRealestate(data);
            setStorageLocal('data', response.data.data.home_search.results)
            setStorageLocal('location', params)
            return response.data.data.home_search.results
           
        }catch(error){
            console.log(error)
            rejectWithValue(error)
        }
    }
)

export const getDetailsData = createAsyncThunk(
    '../action/getDetails',
    async(data: any, {rejectWithValue}) => {
        try{
            const response = await getDetails(data)
            console.log(response.data.data.property_detail);
            return response.data.data.property_detail;
        }catch(error){
            rejectWithValue(error)
        }
    }
)


export const locationSlice = createSlice({
    name: 'location', 
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getRealEstateData.pending, (state) => {
            state.status = 'loading'
           
          })
          .addCase(getRealEstateData.fulfilled, (state, action:any) => {
            
            state.status = 'idle'
            state.location = action.payload
            state.geo = getStorageLocal('location'),
            state.error = null
            
          })
          .addCase(getRealEstateData.rejected, (state, action) => {
            
            state.error = action.payload
          })
          
          .addCase(getDetailsData.pending, (state)=>{
            state.status = 'loading'
          })
          .addCase(getDetailsData.fulfilled, (state, action)=>{
            state.status = 'idle'
            state.details =  action.payload
            state.error = null
          })
          .addCase(getDetailsData.rejected, (state, action)=>{
            state.status = 'failed'
            state.error =  action.payload
          })
    }
})



export const locationValue = (state: AppState) => state.location.location
export const geoValue = (state: AppState) => state.location.geo
export const detailsValue = (state: AppState) => state.location.details


export default locationSlice.reducer