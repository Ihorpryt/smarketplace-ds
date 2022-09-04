import styled from "styled-components";

export const PrimaryButton = styled.button `
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  font-weight: 600;
  padding: 12px 24px;
  //min-width: 300px;
  transition: 0.25s ease all;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &:hover {
    background: #0599D3;
  }

  &:active {
    background: ${({ theme }) => theme.primary};
  }
`;

export const SecondaryButton = styled.button `
  font-family: 'Inter', sans-serif;
  background: white;
  color: #344054;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #D0D5DD;
  font-weight: 600;
  padding: 12px 24px;
  //width: 300px;
  transition: 0.25s ease all;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &:hover {
    background: #F9FAFB;
  }

  &:active {
    background: white;
  }
`;