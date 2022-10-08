import React from "react";
import {SFilterBlock, SFilterTitle} from "./styles";
import ButtonReset from "../Button/ButtonReset";

const Filter = () => {
    return (
        <SFilterBlock>
            <SFilterTitle>
                <h3>Filter by</h3>
                <ButtonReset
                    text="Reset all"
                />
            </SFilterTitle>
        </SFilterBlock>
    );
};

export default Filter;