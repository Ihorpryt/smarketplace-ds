import styled from "styled-components";

export const SInputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  gap:0;
  transition: gap 0.3s;

  &:focus, &:focus-within {
    gap: 2px;
    border-right: 1px;
    
  }
  
  input:first-of-type {
    border-radius: 10px 0 0 10px;
    border-right: none;
    z-index: 90;
  }
`;

