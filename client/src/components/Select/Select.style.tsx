import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const DropdownHeader = styled.div`
  padding: 0.45rem 0.65rem;
  background: #f8f8fa;
  border: 1px solid #e0e0e8;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1a1a2e;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: #6c63ff;
  }

  span {
    color: #9d9daa;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 4px 0 0;
  padding: 0.25rem 0;
  list-style: none;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e0e0e8;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const DropdownItem = styled.li`
  padding: 0.45rem 0.65rem;
  cursor: pointer;
  font-size: 0.8rem;
  color: #1a1a2e;
  transition: background 0.12s ease;

  &:hover {
    background: #f4f3ff;
    color: #6c63ff;
  }
`;
