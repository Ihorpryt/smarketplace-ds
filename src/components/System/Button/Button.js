import React from "react";
import {PrimaryButton, SecondaryButton} from "./styled";

const Button = ({text, variant, onClick}) => {

    switch(variant) {
        case variant = 'primary':
            return (
                <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
            );
        case variant = 'secondary':
            return (
                <SecondaryButton onClick={onClick}>{text}</SecondaryButton>
            );
        default:
            return (
                <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
            );
    }


};

export default Button;