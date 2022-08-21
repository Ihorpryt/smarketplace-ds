import React from "react";
import {SInput} from "./styles";

const Input = ({label}) => {
    return (
        <SInput>

            <input
                type="text"
                name="bottom-text"
                placeholder="&nbsp;"
            />
            <label htmlFor="bottom-text">{label}</label>

        </SInput>
    );
};

export default Input;