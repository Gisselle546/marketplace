import axios from 'axios';

const customFetchRealEstate = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REAL_ESTATE
  });

  customFetchRealEstate.interceptors.request.use((config:any) => {
   
        config.headers['X-RapidAPI-Key'] = process.env.NEXT_PUBLIC_RAPIDAPIKEY
        config.headers['X-RapidAPI-Host'] = process.env.NEXT_PUBLIC_RAPIDAPIHOST
    
    return config;
  });

export default customFetchRealEstate