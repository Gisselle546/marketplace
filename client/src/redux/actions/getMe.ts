import customFetch from "@/utils/axios";

export async function getme(){
    const response = await customFetch.get('/profile')
    console.log(response);
    return response;
}