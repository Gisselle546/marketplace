import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";
import { getStorageLocal, setStorageLocal } from "../hooks/useSessionStorage";
import { getRealestate } from "../actions/getRealestate";
import { getDetails } from "../actions/getDetails";

// US state name → abbreviation mapping
const STATE_ABBREVIATIONS: Record<string, string> = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
  "district of columbia": "DC",
};

export interface LocationState {
  params: {
    type: string;
    state_code: string;
    city: string;
    price_min?: any;
    price_max?: any;
    beds_min?: any;
    beds_max?: any;
    baths_min?: any;
    baths_max?: any;
  };
  geo: { lat: number; lng: number } | any;
  status: "idle" | "loading" | "failed";
  error?: null | any;
  results: [] | any;
  singlelocation: [] | any;
  hasSearched: boolean;
}
const initialState: LocationState = {
  params: getStorageLocal("params") || {
    type: "sale",
    state_code: "NY",
    city: "New York City",
  },
  geo: getStorageLocal("geo") || { lat: 40.73061, lng: -73.935242 },
  status: "idle",
  error: null,
  singlelocation: getStorageLocal("detail_location") || null,
  results: getStorageLocal("home_results") || [],
  hasSearched: (getStorageLocal("home_results") || []).length > 0,
};

export const geolocateUser = createAsyncThunk(
  "location/geolocate",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Geolocation failed");
      const data = await response.json();

      const city = data.city || "New York City";
      const region = (data.region || "").toLowerCase();
      const state_code =
        data.region_code || STATE_ABBREVIATIONS[region] || "NY";
      const lat = data.latitude || 40.73061;
      const lng = data.longitude || -73.935242;

      return { city, state_code, lat, lng };
    } catch {
      return rejectWithValue("Geolocation unavailable");
    }
  },
);

export const getRealEstateData = createAsyncThunk(
  "../action/getRealestate",
  async ({ type, data }: { type: string; data: any }, { rejectWithValue }) => {
    setStorageLocal("geo", data.geo);
    try {
      const response = await getRealestate(data, type);
      console.log("[getRealEstateData] full response:", Object.keys(response));
      console.log(
        "[getRealEstateData] response.data:",
        response.data ? Object.keys(response.data) : "undefined",
      );
      console.log(
        "[getRealEstateData] response.data.home_search?",
        response.data?.home_search,
      );
      console.log(
        "[getRealEstateData] response.data.data?.home_search?",
        response.data?.data?.home_search,
      );

      // fetch wrapper returns { data: parsedJSON }
      // If the API response itself has a "data" wrapper: response.data.data.home_search
      // If it doesn't: response.data.home_search
      const apiData = response.data?.data ?? response.data;
      const results = apiData?.home_search?.results ?? [];

      setStorageLocal("home_results", results);
      setStorageLocal("params", { ...data, type });

      return {
        results,
        params: { ...data, type },
      };
    } catch (error: any) {
      console.error(
        "[getRealEstateData] error:",
        error?.message,
        error?.response?.data,
      );
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Failed to fetch listings";
      return rejectWithValue(message);
    }
  },
);

export const getDetailsData = createAsyncThunk(
  "../action/getDetails",
  async (data: any, { rejectWithValue }) => {
    console.log("[getDetailsData] requesting property_id:", data);
    try {
      const response = await getDetails(data);
      console.log("[getDetailsData] full response:", Object.keys(response));
      console.log(
        "[getDetailsData] response.data:",
        response.data ? Object.keys(response.data) : "undefined",
      );
      console.log(
        "[getDetailsData] response.data.property_detail?",
        !!response.data?.property_detail,
      );
      console.log(
        "[getDetailsData] response.data.data?.property_detail?",
        !!response.data?.data?.property_detail,
      );

      // fetch wrapper returns { data: parsedJSON }
      // If the API response itself has a "data" wrapper: response.data.data.property_detail
      // If it doesn't: response.data.property_detail
      const apiData = response.data?.data ?? response.data;
      const detail = apiData?.property_detail ?? apiData;

      console.log(
        "[getDetailsData] resolved detail:",
        detail ? Object.keys(detail).slice(0, 10) : "null",
      );

      setStorageLocal("detail_location", detail);
      return detail;
    } catch (error: any) {
      console.error(
        "[getDetailsData] error:",
        error?.message,
        error?.response?.data,
      );
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Failed to fetch details";
      return rejectWithValue(message);
    }
  },
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    nullDetail: (state) => {
      state.singlelocation = null;
    },
    setDetail: (state, action) => {
      state.singlelocation = action.payload;
      setStorageLocal("detail_location", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(geolocateUser.fulfilled, (state, action) => {
        const { city, state_code, lat, lng } = action.payload;
        state.params = { ...state.params, city, state_code };
        state.geo = { lat, lng };
        setStorageLocal("params", state.params);
        setStorageLocal("geo", state.geo);
      })
      .addCase(getRealEstateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRealEstateData.fulfilled, (state, action: any) => {
        state.status = "idle";
        state.geo = getStorageLocal("geo");
        state.results = action.payload.results;
        state.params = action.payload.params;
        state.hasSearched = true;
        state.error = null;
      })
      .addCase(getRealEstateData.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(getDetailsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDetailsData.fulfilled, (state, action) => {
        state.status = "idle";
        state.singlelocation = action.payload;
        state.error = null;
      })
      .addCase(getDetailsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { nullDetail, setDetail } = locationSlice.actions;

export const paramsValue = (state: AppState) => state.location.params;
export const geoValue = (state: AppState) => state.location.geo;
export const detailsValue = (state: AppState) => state.location.singlelocation;
export const resultsValue = (state: AppState) => state.location.results;
export const statusValue = (state: AppState) => state.location.status;
export const hasSearchedValue = (state: AppState) => state.location.hasSearched;

export default locationSlice.reducer;
