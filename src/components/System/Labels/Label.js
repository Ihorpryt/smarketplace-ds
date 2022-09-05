import React from "react";
import {SLabelBlue, SLabelGreen, SLabelGrey, SLabelOrange, SLabelRed} from "./styles";

const Label = ({variant,text}) => {
    switch(variant) {
        case variant = 'green':
            return (
                <SLabelGreen>{text}</SLabelGreen>
            );
        case variant = 'red':
            return (
                <SLabelRed>{text}</SLabelRed>
            );
        case variant = 'grey':
            return (
                <SLabelGrey>{text}</SLabelGrey>
            );
        case variant = 'blue':
            return (
                <SLabelBlue>{text}</SLabelBlue>
            );
        case variant = 'orange':
            return (
                <SLabelOrange>{text}</SLabelOrange>
            );
        default:
            return (
                <SLabelGrey>{text}</SLabelGrey>
            );
    }
};

export default Label;