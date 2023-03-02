import styled,{css} from 'styled-components'

const color1 = '#f4f4f4';
const color2 = '#3197EE';


export const RentSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
  justify-content: center;

`
export const Radio = styled.div`
    margin: 0.5rem;

`

export const RadioLabel = styled.label``

export const RadioInput = styled.input.attrs(props => ({

  type: "radio"
}))`
    position: absolute;
    opacity: 0;
    & +${RadioLabel}{
        &:before {
            content: '';
            background: ${color1};
            border-radius: 100%;
            border: 1px solid darken(${color1}, 25%);
            display: inline-block;
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: -0.2em;
            margin-right: 1em; 
            vertical-align: top;
            cursor: pointer;
            text-align: center;
            transition: all 250ms ease;
           
           
          }
    }
    &:checked + ${RadioLabel} {
        &:before {
            background-color: ${color2};
            box-shadow: inset 0 0 0 4px ${color1};
        }
      }
    &:focus + ${RadioLabel}{
        &:before {
          outline: none;
          border-color: ${color1};
        }
    }
   

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const RangeHeader = styled.div(
    ({ theme: {color} }) => css`
    background-color: ${color.badgeBackground};
    height: 2.2rem;
    `
)

export const Heading = styled.h2(
({ theme: {color} }) => css`
    font-size: 1rem;
    margin-left: 1rem;
`)

export const ButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding:1rem;
`

export const SmallButton = styled.button(
    ({ theme: {color} }) => css`
    background-color: ${color.buttonSecondary};
    color: #fff;
    padding: 1rem;
    text-decoration: none;
    min-width: 50px;
    border: none;
    margin-left:15px;
    cursor: pointer;
 `   
)