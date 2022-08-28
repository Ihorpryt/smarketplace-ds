import styled  from "styled-components";

export const SColorBlock = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: row;
    gap: 100px;
    background: ${(props) => props.background};
    border-radius: 10px;
    width: 100%;
    color: ${(props) => props.color};
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.bg3};
    transition: 0.3s all ease-in-out;
    cursor: pointer;
  
  
    h3  {
      width: 150px;
    }
`;