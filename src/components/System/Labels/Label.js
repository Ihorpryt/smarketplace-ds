import React from "react";
import {SLabelBlue, SLabelGreen, SLabelGrey, SLabelOrange, SLabelRed} from "./styles";

const Label = ({variant,text,icon}) => {
    switch(variant) {
        case variant = 'green':
            return (
                <SLabelGreen>{icon}{text}</SLabelGreen>
            );
        case variant = 'red':
            return (
                <SLabelRed>{icon}{text}</SLabelRed>
            );
        case variant = 'grey':
            return (
                <SLabelGrey>{icon}{text}</SLabelGrey>
            );
        case variant = 'blue':
            return (
                <SLabelBlue>{icon}{text}</SLabelBlue>
            );
        case variant = 'orange':
            return (
                <SLabelOrange>{icon}{text}</SLabelOrange>
            );
        default:
            return (
                <SLabelGrey>{text}</SLabelGrey>
            );
    }
};

export default Label;