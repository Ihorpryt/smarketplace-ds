import React from "react";
import {PrimaryButton, SecondaryButton} from "./styled";

const Button = ({text, variant, onClick, icon, isDisabled}) => {

    switch(variant) {
        case variant = 'primary':
            return (
                <PrimaryButton onClick={onClick} isDisabled={isDisabled}>{icon}{text}</PrimaryButton>
            );
        case variant = 'secondary':
            return (
                <SecondaryButton onClick={onClick} isDisabled={isDisabled}>{icon}{text}</SecondaryButton>
            );
        default:
            return (
                <PrimaryButton onClick={onClick} isDisabled={isDisabled}>{icon}{text}</PrimaryButton>
            );
    }


};

export default Button;