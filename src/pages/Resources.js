import React from "react";
import {SGrid, SHeader} from "../components/Layout/styles";
import styleguideBg from "../assets/img/figmabg.jpg";
import NavCardExternalLink from "../components/System/NavCard-externalLink";

const Resources = () => {

    const cardArray = [
        {
            id: 1,
            background: styleguideBg,
            title: "Figma Files",
            description: "Set of designed pages",
            to: "https://www.figma.com/files/project/51605246/Staffing-Marketplace?fuid=959324611498166412",
        },

    ];

    return (
        <>
            <SHeader>
                <h5>At hand</h5>
                <h1>Resources</h1>
                <p>Useful assets.</p>
            </SHeader>

            <SGrid>
                {cardArray.map((card) => (
                    <NavCardExternalLink
                        key={card.id}
                        {...card}
                    />
                ))}
            </SGrid>
        </>
    );


};

export default Resources;