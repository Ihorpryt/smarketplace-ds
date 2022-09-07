import React from "react";
import {PrimaryButton, SecondaryButton} from "./styled";

const Button = ({text, variant, onClick, icon}) => {

    switch(variant) {
        case variant = 'primary':
            return (
                <PrimaryButton onClick={onClick}>{icon}{text}</PrimaryButton>
            );
        case variant = 'secondary':
            return (
                <SecondaryButton onClick={onClick}>{icon}{text}</SecondaryButton>
            );
        default:
            return (
                <PrimaryButton onClick={onClick}>{icon}{text}</PrimaryButton>
            );
    }


};

export default Button;