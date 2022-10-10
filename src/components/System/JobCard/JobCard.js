import React from "react";
import {
    SDateInfo,
    SDecorationBarBlue,
    SJobCard,
    SJobCardBottomPart,
    SJobCardDetails,
    SJobCardTopPart,
    SSmallInfoBlock
} from "./styles";
import CompanyLogo from "../../../assets/company-logo/jet-aviation.svg";
import TextTruncate from 'react-text-truncate';

const JobCard = ({title, bar}) => {

    return (
        <SJobCard>

            {bar}

            <SJobCardTopPart>
                <SDateInfo>
                    <p>Posted on 05/25/2022</p>
                    <img src={CompanyLogo} alt="React Logo" />
                </SDateInfo>

                <h2>{title}</h2>
                <SJobCardDetails>
                    <li>$800 — 1.2k per day</li>
                    <li><span>/</span></li>
                    <li>KPDX — Portland International Airports</li>
                    <li><span>/</span></li>
                    <li>5 years of experience</li>
                    <li><span>/</span></li>
                    <li>Full-time</li>
                </SJobCardDetails>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip ex ea commodo consequat.</p>
            </SJobCardTopPart>

            <SJobCardBottomPart>
                <SSmallInfoBlock>
                    <p>Starting point</p>
                    <span>KPDX — 04/20/2022</span>
                </SSmallInfoBlock>
                <SSmallInfoBlock>
                    <p>Ending point</p>
                    <span>KDAL — 04/20/2022</span>
                </SSmallInfoBlock>
                <SSmallInfoBlock>
                    <p>Route</p>
                    <span>KPDX ⇢ KDAL ⇢ KSTL</span>
                </SSmallInfoBlock>
                <SSmallInfoBlock>
                    <p>Aircraft type</p>
                    <TextTruncate
                        line={1}
                        element="span"
                        truncateText="…"
                        text="Cessna 525, Gulfstream G650, Gulfstream G700, Gulfstream G650"
                    />
                </SSmallInfoBlock>
            </SJobCardBottomPart>
        </SJobCard>
    );
};

export default JobCard;