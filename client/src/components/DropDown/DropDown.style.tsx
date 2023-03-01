import styled, {css} from 'styled-components'


export const Wrapper = styled.div(
    ({ theme: {color} }) => css`
   
    display: inline-flex;
    position: relative;
    flex-direction: column;
`
)

export const HeaderContainer = styled.div(
    ({ theme: {color} }) => css`
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    border: 1px solid rgb(223, 223, 223)
    border-radius: 3px
    background-color: white
    line-height: 38px
    cursor: default


    `
)


export const DropToggler = styled.div`
    position: relative;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 14px;
    color: #607d8b;
    cursor: pointer;
  `;


export const Arrow = styled.span`
margin-left: 10px;
vertical-align: center;


`
  

  
 export const DisplayArea = styled.div`
 position: relative;
 `;

 export const Inner = styled.div`
  position: absolute;
  left: 1px;
  top: 12px;
  min-width: 240px;
  min-height: 240px;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px;
  z-index: 99999;
 
 `

 export const Label = styled.span`
 font-size: 1rem;
 
 `