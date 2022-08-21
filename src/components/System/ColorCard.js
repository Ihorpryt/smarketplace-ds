import React from "react";
import {SColorCard, SColorOfCard} from "./styles";

const ColorCard = ({title, hex}) => {
    return (
        <SColorCard>
            <SColorOfCard color={hex} />
            <h4>{title}</h4>
            <p>{hex}</p>
        </SColorCard>
    );
};

export default ColorCard;