import styled from "styled-components";

export const SMenuItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #344054;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 12px;
  text-decoration: none;
  &:hover {
    color: #1EAAE2;
  }
`;