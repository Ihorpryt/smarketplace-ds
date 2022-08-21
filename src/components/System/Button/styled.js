import styled from "styled-components";

export const SButton = styled.button `
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  font-weight: 600;
  padding: 12px 24px;
  width: 300px;
  transition: 0.25s ease all;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &:hover {
    background: #0599D3;
  }
`;