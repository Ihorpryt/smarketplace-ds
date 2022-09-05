import styled, {keyframes} from "styled-components";




//Animation
const flicker = keyframes`
 0% { margin: 0 8px; opacity:1; }
 50% { margin: 0 50px; opacity:0;}
 51% { margin: 0 -15px; opacity:0;}
 100% { margin: 0 8px; opacity:1;}
`;
//Animation


//Nav Card


export const SNavCard = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.1);
  flex: 0 0 32.1%;
  background: ${({theme}) => theme.bg};
  transition: 0.3s box-shadow ease-in-out;
  
  &:hover  {
    box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  }
      
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
  }
`;

export const SNavCardImage = styled.div`
    height: 160px;
    background: ${props => `url(${props.background}) no-repeat center center`};
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    filter: saturate(3);
      
`;

export const SLabel = styled.div`
    color: #344054;
    font-weight: 500;
    position: absolute;
    font-size: 12px;
    line-height: 18px;
    background: rgba(242, 244, 247, 1);
    padding: 2px 8px;
    top: 8px;
    right: 8px;  
    z-index: 10;  
    border-radius: 20px;
`;

export const SNavCardText = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.text};
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #667085;
  margin-bottom: 16px;
  margin-top: 4px;
  flex-grow: 1;
}
      
span {
  color: ${({theme}) => theme.primary};
      
  span {

    text-transform: lowercase;

    &::after {
      content: '->';
      margin: 0 8px;
      transition: margin 0.25s;
      
      ${SNavCard}:hover & {
        animation: 0.7s ${flicker} ease-in-out;
      }
    }
        
  }
}
`;

export const SFrame = styled.iframe`
      border: 1px solid ${({theme}) => theme.bg3};
`;
