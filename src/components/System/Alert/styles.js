import styled from "styled-components";


export const SAlert = styled.div`
    width: 100%;
    max-width: 470px;
    background: white;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.bg3};
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    overflow: hidden;
    margin-bottom: 12px;
    transition: 0.3s;
    opacity: ${props => props.animate ? "0" : "1"};
    margin-left: ${props => props.animate ? "100px" : ""};
    
  
    
  p {
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    padding: 16px;
  }
  
    
    
`;
export const SAlertTop = styled.div`
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.bg3};
  
      img {
        margin-right: 10px;
      }
    
      h4 {
        font-size: 14px;
        line-height: 20px;
        width: 100%;
      }
`;

export const SNotificationWrapper = styled.div`
    width: 100%;
    max-width: 470px;
    position: fixed;
    top:24px;
    right: 24px;
`;