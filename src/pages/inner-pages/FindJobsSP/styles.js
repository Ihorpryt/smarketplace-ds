import styled from "styled-components";

export const SBackButton = styled.button`
    z-index: 100;
    position: absolute;
    right: 24px;
    top: 20px;
    cursor: pointer;
`;
export const SLogo = styled.a`
  display: flex;
  align-items: center;
`;

export const SFindJobsContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  padding-left: 120px;
  padding-right: 120px;
  gap: 24px;
`;
export const SCardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SDetailsAboveFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 38px;
  margin-bottom: 24px;
  
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
  }
`;

export const SJobsFound = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;