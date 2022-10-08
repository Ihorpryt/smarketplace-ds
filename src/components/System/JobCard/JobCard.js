import React from "react";
import {SJobCard, SJobCardDetails, SJobCardTopPart} from "./styles";
import CircleJobDetails from "../../../assets/icons/CircleJobDetails";

const JobCard = ({title}) => {
    return (
        <SJobCard>
            <SJobCardTopPart>
                <h2>{title}</h2>
                <SJobCardDetails>
                    <li><span>$800 — 1.2k per day</span></li>
                    <CircleJobDetails />
                    <li>KPDX — Portland International Airports</li>
                    <CircleJobDetails />
                    <li>5 years of experience</li>
                    <CircleJobDetails />
                    <li>Full-time</li>
                </SJobCardDetails>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip ex ea commodo consequat.</p>
            </SJobCardTopPart>
        </SJobCard>
    );
};

export default JobCard;