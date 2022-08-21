import React from "react";
import {SInput} from "./styles";

const Input = () => {
    return (
        <SInput>

            <input
                type="text"
                name="bottom-text"
                placeholder="&nbsp;"
            />
            <label htmlFor="bottom-text">Text on bottom</label>

        </SInput>
    );
};

export default Input;