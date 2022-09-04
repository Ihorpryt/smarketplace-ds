import styled from "styled-components";
import {SRow} from "../../components/Layout/styles";

export const SMeme = styled.main`
  
  button {
    display: block;
  }
  
  img {
    width: 100%;
  }
  
`;

export const SmallRow = styled(SRow)`
    width: 650px;
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin: ${props => props.margin};
    
    h2 {
      font-size: 35px;
      color: white;
      text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
      text-transform: uppercase;
      text-align: center;
    }
`;

export const TopText = styled.h2`
    position: absolute;
    top: 20px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 650px;
      
`;

export const BottomText = styled.h2`
    position: absolute;
    bottom: 20px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 650px;
`;