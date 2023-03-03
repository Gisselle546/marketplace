import styled,{css} from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownHeader = styled.div`
  padding: 10px;
  background-color: #FFFAFA;
  border: 1px solid #1E90FF;
  border-radius: 4px;
  min-width:100px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 2px;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 5px;
  min-width:100px;
  background-color: #FFFAFA;
  border: 1px solid #1E90FF;
  border-top: none;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:first-child {
    border-top: 1px solid #ccc;
  }

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;