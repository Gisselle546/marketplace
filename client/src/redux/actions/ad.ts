import customFetch from '../../utils/axios';

export async function create_ad(data:any){
    const response = await customFetch.post('/createad', data)
    return response.data;
}
