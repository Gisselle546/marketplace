import customFetchRealEstate from '../../utils/realestate';

export async function getDetails(params: any){
    const options = {
        method: 'GET',
        params: {property_id: params}
      
      };
      const response = await customFetchRealEstate.get('/property-detail', options)
     
      return response;
}