import axios from 'axios';
import { getStorageValue} from '@/redux/hooks/useSessionStorage';

const customFetch = axios.create({
    baseURL: 'https://marketplace-production-c427.up.railway.app/api/v1',
  });

customFetch.interceptors.request.use((config:any) => {
    const user = getStorageValue("token");
    if (user) {
        config.headers['Authorization'] = `Bearer ${user}`;
      }
    
    return config;
  });
  
  export default customFetch