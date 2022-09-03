import styled from "styled-components";

export const SInteractiveIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 7px;
    background: ${({theme}) => theme.bg2};
    border-radius: 100px;
    transition: 0.3s;
    cursor: pointer;
  
    &:hover {
      background: #EAEBED;
    }
`;