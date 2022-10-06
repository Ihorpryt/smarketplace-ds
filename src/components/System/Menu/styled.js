import styled from "styled-components";

export const Header = styled.header`
  height: 72px;
  background-color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 99;
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
  margin-right: 120px;
`;