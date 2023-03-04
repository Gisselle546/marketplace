import React, {useRef} from "react";
import styled,{css} from "styled-components";
import { GiTrafficLightsGreen, GiTrafficLightsRed } from 'react-icons/gi';
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { detailsValue, nullDetail, statusValue } from '@/redux/reducer/location';
import { ReactPhotoCollage } from "react-photo-collage";
import { InnerMainHeadingContainer, MainHeadingContainer, PriceHeader } from "./Modal.style";
import { Spinner } from "../Spinner/Spinner";

const Model = styled("div")<{show: any}>`
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`;

// Rendered popup - a positional demo confirmation box
const Container = styled.div(
({theme: {color} }) => css`

    position:fixed;
    width: 89vw;
    height: 89vh;
    display: flex;
    top:  5%;
    left: 8%;
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.9);  
    background: ${color.badgeBackground}
   
    
`
)
;

const Left = styled("div")`
display: flex; 
flex-direction: column; 
height: 100%;
width: 100%; 
justify-content:space-around;



`;

const Right = styled("div")`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 100%;
height: 100%;

`;



export const Heading = styled.div(
    ({ theme: {color, typography} }) => css`
     font-size: ${typography.fontSize.heading1};
     margin-left:1rem;
    `)

export const SubHeading = styled.div(
        ({ theme: {color, typography} }) => css`
         font-size: ${typography.fontSize.heading3};
         padding: 0.2rem;
         margin-left:1rem;
        `)

export const SmallHeading = styled.div(
({ theme: {color, typography} }) => css`
font-size: ${typography.fontSize.bodyS};
padding: 0.2rem;
margin-left:1rem;
margin-top: 1rem;
`)


const Slot = styled.div`
    font-size: 1.6rem;
    color: inherit;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 1rem;
    
`

const CloseContainer = styled.span(
    ({ theme: {color, typography} }) => css`
    font-size: ${typography.fontSize.heading2};
    font-weight: ${typography.fontWeight.bold};
    color: ${color.buttonSecondary};
    cursor: pointer;
    margin-right: 1rem;
   
`)

const Num = styled.strong(
    ({ theme: {color, typography} }) => css`
    font-size: ${typography.fontSize.heading3}
    `
)


type Props ={
    show?: boolean;
}

function Modal(props: Props) {
    const {
        show
    } = { ...props };
    const ref = useRef(null);
    const data = useAppSelector(detailsValue)
    const loading  = useAppSelector(statusValue)
    const dispatch = useAppDispatch();

    if(!data || loading==='loading'){
        return <Spinner/>
    }
    
    const setting = {
        width: "96%",
        height: ['100%'],
        
        layout: [1, 4, 2],
        rowHeight:[700, 200, 700],
        photos: data?.photos?.map((data:any)=>{
            return{ source: data.href}
        }),
        showNumOfRemainingPhotos: true
    }   
   
    const handleerSubmit = ()=>{

        dispatch(nullDetail())
        localStorage.removeItem('detail_location')
    }
  
   
   // let arr = [...data?.photos(5)].map((item, index) => console.log(item));
 console.log(data);
  return (
    <Model show={show}>
    <Container ref={ref}>
       <Left> 
           
            {    
               
                    
                  data.photos? <ReactPhotoCollage {...setting} />: null
                   
                    
            }
       </Left>
       <Right>
        {
            data.prop_status!=='for_rent'?
        (
            <>
                <MainHeadingContainer> 
                <InnerMainHeadingContainer>
                <PriceHeader>
                <Heading> ${data?.price_history.at(-1).price?.toLocaleString("en-US")? data?.price_history.at(-1).price?.toLocaleString("en-US") : data.mortgage.estimate.total_payment}</Heading><SubHeading> {data?.listings[0].beds} bd | {data?.listings[0].baths_full} ba | {data?.listings[0].sqft} sqft</SubHeading> 
                    
                </PriceHeader>
                    <SubHeading> {data.address.line}, {data.address.city}, {data.address.state_code} {data.address.postal_code}</SubHeading>
                    {data.client_display_flags.presentation_status ==='for_sale' ?
                        <SubHeading>
                        <GiTrafficLightsGreen  style={{backgroundColor:'green', borderRadius:'50%', marginTop:'5px'}}/> For Sale
                        </SubHeading>:<SubHeading><GiTrafficLightsRed style={{backgroundColor:'red', borderRadius:'50%', marginTop:'5px'}}/>Off Market</SubHeading>
                    }
                    <SmallHeading>Est. payment/mo: <Num style={{marginLeft: '0.5rem'}}>{data.mortgage.estimate.monthly_payment.toLocaleString("en-US")}</Num></SmallHeading> 
                    </InnerMainHeadingContainer>
                    <div>
                        <CloseContainer onClick={handleerSubmit}>X</CloseContainer>
                    </div>
                    </MainHeadingContainer>
                    <ButtonContainer><Button>Request a Tour</Button>  <Button>Contact Agent</Button></ButtonContainer>
                <Tabs/> 
           </>
            )
           : (
           <>
            <MainHeadingContainer>
                <InnerMainHeadingContainer>
                    <PriceHeader>
                    <Heading> ${data?.price?.toLocaleString("en-US")}</Heading>/mo<SubHeading> {data?.beds} bd | {data?.baths_full} ba | {data?.sqft} sqft</SubHeading> 
                    </PriceHeader>
                    <SubHeading> {data.address.line}, {data.address.city}, {data.address.state_code} {data.address.postal_code}</SubHeading>
                    {
                    data.prop_status==='for_rent'?
                    <SubHeading>
                         <GiTrafficLightsGreen  style={{backgroundColor:'dodgerblue', borderRadius:'50%', marginTop:'5px'}}/> For Rent
                    </SubHeading>:<SubHeading><GiTrafficLightsRed style={{backgroundColor:'red', borderRadius:'50%', marginTop:'5px'}}/>Off Market</SubHeading>
                    }
                </InnerMainHeadingContainer>
                <div>
                        <CloseContainer onClick={handleerSubmit}>X</CloseContainer>
                </div>
                </MainHeadingContainer>
                <ButtonContainer><Button>Request a Tour</Button></ButtonContainer>
                 <Tabs/>  
           </>
           )
        }
       </Right>
       
    </Container>
</Model>
  )
}

export default Modal