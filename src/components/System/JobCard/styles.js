import styled from "styled-components";

export const SJobCard = styled.div`
  height: 300px;
  width: 100%;
  background: white;
  border-radius: 10px;
  border: 1px solid #EAECF0;
  //box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1);
  margin-bottom: 16px;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  }
`;

export const SJobCardTopPart = styled.div`
  padding: 24px;
  
  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #202121;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #202121;
  }
`;

export const SJobCardDetails = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0px;
  list-style-type: none;
  
  span {
    font-weight: 600;
  }
`;