import styled from "styled-components";

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
  width: 100%;
  justify-content: center;
  align-items: center;
  
  background: #F9FAFB;
`;

export const SBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  max-width: 400px;
  
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #202121;
  }
  
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    
    margin-top: 8px;
    margin-bottom: 24px;
  }
  a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #1EAAE2;
    text-decoration: none;
  }

`;


export const SInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ScheckLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;
export const SSignUp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 24px;
  justify-content: center;
  
  p {
    color: #667085;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
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
  display: flex;
  position: absolute;
  
  gap:8px;
  bottom: 145px;
  left: 80px;
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 480px;
  
  z-index: 50;
  
  
  h1 {
    font-size: 64px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;

    background-image: radial-gradient(circle closest-corner at 35% -75%,#ffdc7a,rgba(255,220,122,0) 62%),radial-gradient(circle closest-corner at 60% -120%,#d9ff7a,rgba(217,255,122,0) 68%),linear-gradient(95deg,#9ee8fa,hsla(0,0%,100%,0) 16%),linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0)),linear-gradient(135deg,#a088ff,#4CF8EC 14%,#37d7ff 81%,#37d7ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    overflow: hidden;
    padding-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    opacity: 0.9;
  }
  button {
    position: absolute;
    top:24px;
    right: 24px;
  }
`;

export const SFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;

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

export const SGrad = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

export const SBackButton = styled.button`
    z-index: 100;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
`;