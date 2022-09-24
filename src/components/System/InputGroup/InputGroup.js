import React from "react";
import {SInputGroup} from "./styles";
import Input from "../Input/Input";
import InputDropdownButton from "../Input/InputDropdownButton";

const InputGroup = ({label}) => {
    return (
        <SInputGroup>
            <Input label={label} />
            <InputDropdownButton />
        </SInputGroup>
    );
};

export default InputGroup;