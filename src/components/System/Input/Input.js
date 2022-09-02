import React from "react";
import {SInput} from "./styles";

const Input = ({label, name, value, onChange}) => {
    return (
        <SInput>

            <input
                type="text"
                name={name}
                placeholder="&nbsp;"
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>

        </SInput>
    );
};

export default Input;