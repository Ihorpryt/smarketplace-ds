import styled from "styled-components";
import { components } from "react-select";

export const MultiControl = (props: any) => {
    return (
        <>
            <Label isFloating={props.isFocused || props.hasValue}>Multi select</Label>
            <components.Control {...props} />
    </>
);
};

const Label = styled.label<{ isFloating?: boolean }>`
  left: 14px;
  pointer-events: none;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  z-index: 1;
  color: #667085;
  
  top: ${(props) => (props.isFloating ? `7px` : `18px`)};
  font-size: ${(props) => (props.isFloating ? `12px` : `16px`)};
`;