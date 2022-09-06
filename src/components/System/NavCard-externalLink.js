import React from "react";
import {SLabel, SNavCard, SNavCardImage, SNavCardText} from "./styles";
import {Link} from "react-router-dom";


const NavCard = ({background, title, description, to, numberOfComponents}) => {


    return (
        <SNavCard>
            <a href={to} target="_blank" rel="noreferrer">
                    {numberOfComponents > 0 && <SLabel>{numberOfComponents} {numberOfComponents === 1 ? "component" : "components"}</SLabel>}
                <SNavCardImage src={background}  />
                <SNavCardText>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <span>Explore <span>{title}</span></span>
                </SNavCardText>
            </a>
        </SNavCard>
    );
};

export default NavCard;