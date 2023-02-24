import axios from 'axios';
import { getStorageValue} from '@/redux/hooks/useSessionStorage';

const customFetch = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
  });

customFetch.interceptors.request.use((config:any) => {
    const user = getStorageValue("token");
    if (user) {
        config.headers['Authorization'] = `Bearer ${user}`;
      }
    
    return config;
  });
  
  export default customFetch