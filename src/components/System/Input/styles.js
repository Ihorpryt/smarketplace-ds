import styled from "styled-components";

export const SInput = styled.div`
  position: relative;
  flex: 1;
  
  input {
    font-family: 'Inter', sans-serif;
    color: #202121;
    padding: 24px 14px 8px;
    display: block;
    width: 100%;
    border: 1px solid #D0D5DD;
    border-radius: 10px;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    transition: 0.3s ease all;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    
    
    &::placeholder {
      color: transparent;
    }
    
    &:hover {
      border: 1px solid #667085;
    }

    &:focus, &:focus-visible {
      outline: none;
      border: 1px solid ${({theme}) => theme.primary};
      box-shadow:0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 2px ${({theme}) => theme.primary};
    }

    
    &:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label {
      font-size: 12px;
      line-height: 12px;
      top: 12px;
      color: #667085;
    }
  }
  
  label {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #667085;
    position: absolute;
    pointer-events: none;
    left: 14px;
    top: 16px;
    transition: 0.3s ease all;
    -moz-transition: 0.3s ease all;
    -webkit-transition: 0.3s ease all;
  }
  
`;