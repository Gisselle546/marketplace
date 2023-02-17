import React, {useRef} from "react";
import styled,{css} from "styled-components";

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
    top:  5%;
    left: 8%;
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.9);  
    background: ${color.badgeBackground}
    
`
)
;





const Slot = styled.div`
    font-size: 1.6rem;
    color: inherit;
`;

type Props ={
    show?: boolean;
    detailText?: any;
    children?:any;
}

function Modal(props: Props) {
    const {
        show, // boolean - visible/invisible
        detailText, // html / inner text
    } = { ...props };
    const ref = useRef(null);
    


  return (
    <Model show={show}>
    <Container ref={ref}>
        <Slot>{detailText}</Slot>
       
    </Container>
</Model>
  )
}

export default Modal