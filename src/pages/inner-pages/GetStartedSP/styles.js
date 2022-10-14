import styled, {keyframes} from "styled-components";

export const SWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  
  background: #091031;
  padding-left: 120px;
  padding-right: 120px;
`;




export const SRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: left;
  align-items: end;
  
  background: #091031;
  color: white;
  position: relative;
  
  
`;

export const STextRight = styled.div`
  width: 400px;
  display: flex;
  
  gap:8px;
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  z-index: 50;
  
  
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 58px;
    letter-spacing: -0.04em;

    background-image: radial-gradient(circle closest-corner at 35% -75%,#ffdc7a,rgba(255,220,122,0) 62%),radial-gradient(circle closest-corner at 60% -120%,#d9ff7a,rgba(217,255,122,0) 68%),linear-gradient(95deg,#9ee8fa,hsla(0,0%,100%,0) 16%),linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0)),linear-gradient(135deg,#a088ff,#4CF8EC 14%,#37d7ff 81%,#37d7ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    overflow: hidden;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
  
  button {
    position: absolute;
    top:24px;
    right: 24px;
  }
`;

export const SLines = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  gap: 16px;
`;

export const SCheckLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    margin-left: 12px;
  }
`;



export const SFooter = styled.div`
  display: flex;
  position: absolute;
  left: 120px;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #667085;
`;

export const SVideo = styled.video`
  position: absolute;
  top:-50px;
`;

const cloudAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`
export const SBlueGlow = styled.div`
  position: absolute;
  bottom: -100px;
  right: 0px;
  width: 855px;
  height: 346px;
  border-radius: 100%;
  filter: blur(314px) saturate(2.2);
  background-color: #0373B7;
  z-index: 9;
`;
export const SGreenGlow = styled.div`
  position: absolute;
  bottom: 0px;
  right: -800px;
  width: 873px;
  height: 652px;
  border-radius: 100%;
  filter: blur(314px) saturate(2);
  background-color: #00FFC2;
  z-index: 9;
`;
export const SGrad = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
  animation-name: ${cloudAnimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
`;

export const SBackButton = styled.button`
    z-index: 100;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
`;