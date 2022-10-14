import styled from "styled-components";

export const PrimaryButton = styled.button `
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  font-weight: 600;
  padding: 10px 24px;
  //min-width: 300px;
  transition: 0.25s ease all;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  opacity: ${({isDisabled}) => (isDisabled ? ".5" : "1")};
  pointer-events: ${({isDisabled}) => (isDisabled ? "none" : "auto")};

  &:hover {
    background: #0599D3;
  }

  &:active {
    background: ${({ theme }) => theme.primary};
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  background: white;
  color: #344054;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #D0D5DD;
  font-weight: 600;
  padding: 10px 24px;
  //width: 300px;
  transition: 0.25s ease all;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  opacity: ${({isDisabled}) => (isDisabled ? ".5" : "1")};
  pointer-events: ${({isDisabled}) => (isDisabled ? "none" : "auto")};

  &:hover {
    background: #F9FAFB;
  }

  &:active {
    background: white;
  }
`;


export const SButtonReset = styled(SecondaryButton)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 8px;
`;