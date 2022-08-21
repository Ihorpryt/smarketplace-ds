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
`;
