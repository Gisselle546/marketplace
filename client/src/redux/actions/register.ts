import axios from 'axios';

export async function register(data:any){
    const response = await axios.post('http://localhost:8080/api/v1/register', data)
    return response.data;
}