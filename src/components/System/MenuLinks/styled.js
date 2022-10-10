import styled from "styled-components";

export const SMenuItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #344054;
  
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    color: #202121;
    background-color: rgb(240 243 249);
  }
`;