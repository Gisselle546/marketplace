import React, {useRef} from "react";
import styled,{css} from "styled-components";
import { dummy_data } from "@/dummydata/data";
import { GiTrafficLightsGreen, GiTrafficLightsRed } from 'react-icons/gi';
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import { useAppSelector  } from '@/redux/hooks';
import { detailsValue, getDetailsData } from '@/redux/reducer/location';

const Model = styled("div")<{show: any}>`
    z-index: 9999;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
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

const ImageContainer = styled("div")<{img: any}>`
background: url(${(props: any) => props.img}) center/cover;
height: 100%;
width: 90%;
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


const Slot = styled.div`
    font-size: 1.6rem;
    color: inherit;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 1rem;
    
`


type Props ={
    show?: boolean;
}

function Modal(props: Props) {
    const {
        show
    } = { ...props };
    const ref = useRef(null);
    const data = useAppSelector(detailsValue)
   
    if(!data){
        return <div>...</div>
    }
    console.log(data)
  return (
    <Model show={show}>
    <Container ref={ref}>
       <Left> 
{/*             
            {    
                data?.photos.map((df:any)=>{
                    console.log(df);
                return <>
                    
                    <ImageContainer img={df.href}/>
                    </>
                })
            } */}
       </Left>
       <Right>
         {/* <div style={{height: '15rem', padding:'1rem', flexDirection:'column', justifyContent:'space-evenly'}}>
          <div style={{display:'flex', alignItems:'center'}}>
            <Heading> ${data.price_history[0].price?.toLocaleString("en-US")}</Heading><SubHeading> {data.listings[0].beds} bd | {data.listings[0].baths_full} ba | {data.listings[0].sqft} sqft</SubHeading>
          </div>
            <SubHeading> {data.address.line}, {data.address.city}, {data.address.state_code} {data.address.postal_code}</SubHeading>
            {data.client_display_flags.presentation_status ==='for_sale' ?
                <SubHeading>
                   <GiTrafficLightsGreen  style={{backgroundColor:'green', borderRadius:'50%', marginTop:'5px'}}/> For Sale
                </SubHeading>:<SubHeading><GiTrafficLightsRed style={{backgroundColor:'red', borderRadius:'50%', marginTop:'5px'}}/>Off Market</SubHeading>
            }
            </div>
            
            <ButtonContainer><Button>Request a Tour</Button>  <Button>Contact Agent</Button></ButtonContainer>
           <Tabs/> */}
           x
       </Right>
       
    </Container>
</Model>
  )
}

export default Modal