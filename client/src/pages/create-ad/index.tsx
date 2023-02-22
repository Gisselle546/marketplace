import React, {useState} from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from '@/templates/PageTemplate';
import { CreateWrapper } from './index.style';
import Button from '@/components/Button/Button';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';

//import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';


const Content = styled.div`
display:flex;
background: linear-gradient(to top right,rgba(0,0,0, 0),rgba(28,44,91, 100)), url(https://actionseaze.com/wp-content/uploads/2020/02/sunset.jpg) no-repeat top/cover;
height: 100vh;
justify-content:center;
align-items:center;
width:100%;
`;

export const HeaderSign = styled.h2`
font-size:1.4rem;
margin-top:1.4rem;
text-align:center;
letter-spacing: 2px;

`;

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%; 
align-items: center;
justify-content: space-around;
height:55vh;

`;

const InputWrapper = styled.input(
    ({ theme: {color} }) => css`
  background-color: ${color.badgeBackground};
  border-radius: 4px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 305px;
  height: 3rem;
  padding: 0.5rem;
  border-style: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #1d686e;
`
)

const FileWrapper = styled.div`
display: flex;
justify-content: space-between;
`


function CreateAd() {

    const [image, setImage] = useState(" ");
    const [url, setUrl] = useState(" ");

    const formik = useFormik({
        initialValues: {
         address: '',
          url: url,
          bedrooms: 1,
          bath:1
        },
        validationSchema: Yup.object({
            
            address: Yup.string()
                         .required('address is required')
        }),
        onSubmit: values => {
        console.log(values)
        },
      });


   const handleOnChange = (e: any) =>{
        setImage(e.target.files[0])
   }

   const uploadImage = async () => {
    const datafile = new FormData();
 
    datafile.append("file", image!)
    datafile.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET!)
    datafile.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME!)
    
    try{
        const response =  await axios.post(`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload`, datafile);
        setUrl(response.data.secure_url);
        formik.values.url=response.data.secure_url;
    }catch(err){
        console.log(err)
    }

    
   }

   console.log(url)
  return (
   
    <PageTemplate>
        <Content>
            <CreateWrapper>
                <HeaderSign>Create Your Ad</HeaderSign>
                <FormWrapper onSubmit={formik.handleSubmit}>
                    <FileWrapper>
                        <p> Upload Pictures: </p>
                        <InputWrapper type="file" name="url"onChange={handleOnChange} />
                        <Button type={"button"} onClick={uploadImage}> Upload </Button>
                    </FileWrapper>
                    <InputWrapper type="text" name="address"placeholder="Enter Address" style={{alignItems:"flex-end"}} value={formik.values.address} onChange={formik.handleChange}required/>
                    <div style={{display:'flex'}}>
                        <p> Enter number of beds: </p>
                        <InputWrapper type="number" name="bedrooms" min="1" value={formik.values.bedrooms} onChange={formik.handleChange}required/>
                    </div>
                    <div style={{display:'flex'}}>
                        <p> Enter number of baths: </p>
                        <InputWrapper type="number" name="bath" min="1" value={formik.values.bath} onChange={formik.handleChange}required/>
                    </div>
                   
            
                    <Button disabled={false} type={"submit"} >Submit</Button>
                  
                </FormWrapper>
            </CreateWrapper>
        </Content>
    </PageTemplate>
   
  )
}

export default CreateAd

