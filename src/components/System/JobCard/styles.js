import styled from "styled-components";

export const SJobCard = styled.div`
  position: relative;
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
    border: 1px solid #667085;
  }
`;

export const SJobCardTopPart = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eaecf0;
  
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
  gap: 16px;
  padding: 0px;
  list-style-type: none;
  margin-top: 24px;
  margin-bottom: 8px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #202121;
  
  span {
    font-weight: 400;
    color: #1EAAE2;
  }
`;

export const SDateInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 20px;
  
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #667085;
  }
  
  img {
    position: absolute;
    right: 24px;
  }
  
`;

export const SDecorationBarBlue = styled.div`
  background: linear-gradient(90deg, #1B3A6B 0%, #446EBD 100%);
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-right: 24px;
  margin-left: 24px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const SJobCardBottomPart = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
`;
export const SSmallInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  
  
  span {
    color: #202121;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
  }
`;