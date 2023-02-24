import React from 'react'
import { useRouter } from 'next/router';
import { selectValue } from '@/redux/reducer/register';
import { useAppSelector } from '@/redux/hooks';

function ProtectedRoute({children}:any) {
    const router = useRouter();  
    const data = useAppSelector(selectValue);
   
 
    React.useEffect(()=>{
        if(!data){
            router?.push('/signin');
        }
    },[data,router])
    
      return children;
    
}

export default ProtectedRoute


