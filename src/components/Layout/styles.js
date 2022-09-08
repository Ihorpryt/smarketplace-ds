import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
    height: 100%;
  
    
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 12);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    
`;

export const SHeader = styled.div`
  
      margin-bottom: 24px;
  
      h5 {
        color: ${({ theme }) => theme.primary};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 38px;
        margin-bottom: 16px;
        margin-top: 24px;
        color: ${({ theme }) => theme.text};
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
      }
`;

export const SRow = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: flex-start;
      margin-top: 24px;
      margin-bottom: 24px;
      flex-flow: wrap;
`;
export const SComponentCage = styled.div`
      display: flex;
      flex-direction: ${props => props.direction || "row"};
      gap: 24px;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      //background: ${({ theme }) => theme.bg};
      padding: 48px 48px;
      border-radius: 10px;
      border: 1px solid ${({theme}) => theme.bg3};
      background-color: ${({theme}) => theme.bg};
      background-image: radial-gradient(rgba(162, 162, 162, 0.45) 0.5px, ${({theme}) => theme.bg} 0.5px);
      background-size: 14px 14px;
      box-shadow: inset 0px 0px 50px 10px ${({theme}) => theme.bg};
  
`;

export const SSizeControl = styled.div`
      width: 100%;
      max-width: 700px;
      display: flex;
      justify-content: center;
      gap: 12px;
`;

export const SGrid = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 24px;
      grid-row-gap: 24px;
`;
