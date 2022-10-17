import styled from "styled-components";


export const SInput = styled.div`
  position: relative;
  width: 100%;
  
  
  label {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #667085;
    position: absolute;
    pointer-events: none;
    left: 42px;
    top: 10px;
    opacity: 1;
    transition: 0.3s ease all;
    -moz-transition: 0.3s ease all;
    -webkit-transition: 0.3s ease all;

    &::placeholder {
      color: transparent;
    }
  }
  
`;

export const SInputField = styled.input`
  padding-left: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 1px solid #D0D5DD;
  border-radius: 10px;
  height: 44px;
  transition: 0.3s ease all;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  background: white;

  &:hover {
    border: 1px solid #667085;
  }
  
  font-family: 'Inter', sans-serif;
  color: #202121;
  //padding: 24px 14px 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  
  &:hover ${SInput} {
    outline: none;
    border: 1px solid ${({theme}) => theme.primary};
    box-shadow:0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 2px ${({theme}) => theme.primary};
  }
  

  &:focus, &:focus-visible {
    outline: none;
    border: 1px solid ${({theme}) => theme.primary};
    box-shadow:0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 2px ${({theme}) => theme.primary};
  }

  &:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label {
    opacity: 0;
  }
  
`;

export const SCSearch = styled.div `
    position: absolute;
    margin-left: 14px;
    margin-top: 12px;
`;