import React from "react";
import {SGrid, SHeader} from "../components/Layout/styles"; 
import underDevBg from "../assets/img/underDevelopmentBg.jpg";
import NavCard from "../components/System/NavCard";

const Resources = () => {

    const cardArray = [
        {
            id: 1,
            background: underDevBg,
            title: "Login",
            description: "Authentication screen",
            to: "/pages/login",
            numberOfComponents: 0,
        },
        {
            id: 2,
            background: underDevBg,
            title: "Find Jobs",
            description: "Probably the most used page for candidate",
            to: "/pages/find-jobs",
            numberOfComponents: 0,
        },

    ];

    return (
        <>
            <SHeader>
                <h5>Bring everything together</h5>
                <h1>Pages</h1>
                <p>Something to test</p>
            </SHeader>

            <SGrid>
                {cardArray.map((card) => (
                    <NavCard
                        key={card.id}
                        {...card}
                    />
                ))}
            </SGrid>
        </>
    );


};

export default Resources;