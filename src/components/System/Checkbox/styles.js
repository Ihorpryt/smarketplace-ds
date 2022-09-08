import styled from "styled-components";

export const SMark = styled.div`
  position: absolute;
  left: 1.8px;
  bottom: -2.5px;
  opacity: 0;
  pointer-events: none;
`;
export const Icon = styled.svg`
  width: 17px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;


export const SCheckbox = styled.div`

  span {
    cursor: pointer;
  }
  
  
  input[type="checkbox"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-right: 10px;
    border: 1px solid #D0D5DD;
    outline: none;
    cursor: pointer;
    transition: 0.15s;
    background-color: white;
    
    
    &:hover {
      border: 1px solid #667085;
    }

    &:focus {
      outline: 3px solid rgba(29, 120, 176, 0.25);
    }
    &:checked {
      background-color: ${({theme}) => theme.primary};
      border-color: ${({theme}) => theme.primary};
      position: relative;
    }
    &:checked + ${SMark} {
      opacity: 1;
    }
    
    &:disabled {
      border-color: #c0c0c0;
      background-color: #c0c0c0;
      cursor: default;
    }
    
    &:disabled ~ span {
      color: #c0c0c0;
      cursor: default;
    }
    
  }
  
  
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  
`;


