import React from "react";
import {SColorBlock} from "./styles";


const ColorBlock = ({name, rgba, color}) => {
    return (
        <SColorBlock background={rgba} color={color}>
            <h3>{name}</h3>
            <p>{rgba}</p>
        </SColorBlock>
    );
};

export default ColorBlock;