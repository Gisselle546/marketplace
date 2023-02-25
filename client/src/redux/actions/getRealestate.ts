import customFetchRealEstate from '../../utils/realestate';


export async function getRealestate(params: any){
    const options = {
        method: 'GET',
        params: {offset: '0', limit: '10', state_code: params.state_code, city: params.city, sort: 'newest'},
      
      };

    const response = await customFetchRealEstate.get('/for-sale',options)
   
    return response;
}

