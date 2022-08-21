import React from "react";
import {SButton} from "./styled";

const Button = ({text, onClick}) => {

    // function handleCLick() {
    //     console.log("I was clicked!")
    // }

    return (
        <SButton onClick={onClick}>{text}</SButton>
    );
};

export default Button;