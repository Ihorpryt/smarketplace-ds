    import React from "react";
import {PrimaryButton, SecondaryButton} from "./styled";
import ArrowRight from "../../../assets/icons/ArrowRight";

const Button = ({text, variant, onClick, icon, isDisabled, trailingIcon}) => {

    switch(variant) {
        case variant = 'primary':
            return (
                <PrimaryButton onClick={onClick} isDisabled={isDisabled}>
                    {icon}{text}
                    {trailingIcon &&
                        <ArrowRight />
                    }
                </PrimaryButton>
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