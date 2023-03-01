import customFetchRealEstate from '../../utils/realestate';


export async function getRealestate(params: any, type: string){
  (type==='sale')? type = '/for-sale': type= '/for-rent'
    const options = {
        method: 'GET',
        params: {offset: '0', limit: '10', state_code: params.state_code, city: params.city, sort: 'newest'},
      
      };

      console.log(type, 'type')
    const response = await customFetchRealEstate.get(type,options)
      console.log(response)
    return response;
}

