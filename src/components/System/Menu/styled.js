import styled from "styled-components";

export const Header = styled.header`
  height: 64px;
  background-color: white;
  width: 100vw;
  //position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 30;
  border-bottom: 1px solid #EAECF0;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  color: #333;
  margin-left: 120px;
  align-items: center;
`;
export const SMenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
export const SLogo = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  display: flex;
  width: 44px;
  border: 2px solid  white;
  border-radius: 100px;
  filter: drop-shadow(0px 2px 0px rgba(5, 45, 255, 0));
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0px 1px 0px rgba(30, 170, 226, 1));
  }
`;

export const AvatarBorder = styled.div`
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
  border-radius: 100px;
  width: 47px;
  height: 47px;
  margin-right: 120px;
  background: linear-gradient(180deg, #1EAAE2 0%, rgba(24, 164, 220, 0) 100%);
  cursor: pointer;
`;

export const IconHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #F0F3F9;
  }
`;
export const RightMenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;