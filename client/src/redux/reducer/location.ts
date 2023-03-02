import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";
import { getStorageLocal, setStorageLocal } from "../hooks/useSessionStorage";
import { getRealestate } from "../actions/getRealestate";
import { getDetails } from "../actions/getDetails";


export interface LocationState{
 params: {
    type: string;
    state_code: string;
    city: string;
 },
 geo: { lat: number, lng: number} | any
 status: 'idle' | 'loading' | 'failed',
 error?: null | any
 results: [] | any
 singlelocation : [] | any  
}
const initialState: LocationState = {
    params:{
        type: 'sale',
        state_code: 'NY',
        city: 'New York City',
    },
    geo:  getStorageLocal('geo')||{lat: 40.730610, lng: -73.935242},
    status: 'idle',
    error: null,
    //////
    //to be changed back to just null instead of getStorageLocal('details') || null
   ///////
    singlelocation: getStorageLocal('detail_location') || null,
    results: getStorageLocal('home_results') || []
    
}

export const getRealEstateData = createAsyncThunk(
    '../action/getRealestate',
    async({ type, data }: { type: string, data: any },  {rejectWithValue}) =>{
        setStorageLocal('geo', data.geo)
        console.log(data);
          try{
            
            const response = await getRealestate(data, type);
            console.log(response);
            setStorageLocal('home_results', response.data.data.home_search.results)
            return response.data.data.home_search.results;
           
        }catch(error){
            console.log(error)
            rejectWithValue(error)
        } 
    }
)

export const getDetailsData = createAsyncThunk(
    '../action/getDetails',
    async(data: any, {rejectWithValue}) => {
        console.log(data);
        try{
            const response = await getDetails(data)
            //////////
            // To be removed later after modal testing
            /////////
            setStorageLocal('detail_location', response.data.data.property_detail)
            return response.data.data.property_detail;
        }catch(error){
            rejectWithValue(error)
        }
    }
)




export const locationSlice = createSlice({
    name: 'location', 
    initialState,
    reducers:{
       nullDetail: (state)=>{
        state.singlelocation= null;
        
       }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getRealEstateData.pending, (state) => {
            state.status = 'loading'
           
          })
          .addCase(getRealEstateData.fulfilled, (state, action:any) => {
            console.log(state)
            state.status = 'idle'
            state.geo = getStorageLocal('geo')
            state.results = action.payload
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
            state.singlelocation =  action.payload
            state.error = null
          })
          .addCase(getDetailsData.rejected, (state, action)=>{
            state.status = 'failed'
            state.error =  action.payload
          })
    }
})

export const { nullDetail } = locationSlice.actions

export const paramsValue = (state: AppState) => state.location.params
export const geoValue = (state: AppState) => state.location.geo
export const detailsValue = (state: AppState) => state.location.singlelocation
export const resultsValue = (state: AppState) => state.location.results


export default locationSlice.reducer