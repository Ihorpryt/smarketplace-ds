import React from "react";
import NavCard from "../components/System/NavCard";
import {SHeader, SRow} from "../components/Layout/styles";
import styleguideBg from "../assets/img/styleguideBg.jpg";

const Components = () => {

    const cardArray = [
        {
            id: 1,
            background: styleguideBg,
            title: "Buttons",
            description: "Nice component",
            to: "/components/buttons",
            numberOfComponents: 3,
        },
        {
            id: 2,
            background: "https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg",
            title: "Dropdowns",
            description: "Nice component",
            to: "/components/dropdowns",
            numberOfComponents: 1,
        },
        {
            id: 3,
            background: "https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg",
            title: "Labels",
            description: "Nice component",
            to: "/components/labels",
            numberOfComponents: 0,
        },
    ];

    return (
        <>
            <SHeader>
                <h5>Powerful blocks</h5>
                <h1>Components</h1>
                <p>Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.</p>
            </SHeader>

            <SRow>
                {cardArray.map((card) => (
                    <NavCard
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>

        </>
    );


};

export default Components;