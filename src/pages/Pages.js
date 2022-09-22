import React from "react";
import {SGrid, SHeader} from "../components/Layout/styles"; 
import buttonBg from "../assets/img/buttonBg.jpg";
import NavCard from "../components/System/NavCard";

const Resources = () => {

    const cardArray = [
        {
            id: 1,
            background: buttonBg,
            title: "Login",
            description: "Communicates and triggers user actions when clicked",
            to: "/pages/login",
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