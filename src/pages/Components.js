import React from "react";
import NavCard from "../components/System/NavCard";
import {SHeader, SGrid} from "../components/Layout/styles";
import inputBg from "../assets/img/inputBg.jpg";
import buttonBg from "../assets/img/buttonBg.jpg"
import alertBg from "../assets/img/alertBg.jpg"

const Components = () => {

    const cardArray = [
        {
            id: 1,
            background: buttonBg,
            title: "Buttons",
            description: "Nice component",
            to: "/components/buttons",
            numberOfComponents: 2,
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
        {
            id: 4,
            background: inputBg,
            title: "Inputs",
            description: "Form field that a user can type a line of text into",
            to: "/components/inputs",
            numberOfComponents: 1,
        },
        {
            id: 5,
            background: "https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg",
            title: "Checkbox",
            description: "Nice component",
            to: "/components/checkbox",
            numberOfComponents: 1,
        },
        {
            id: 6,
            background: alertBg,
            title: "Alert",
            description: "Nice component",
            to: "/components/alerts",
            numberOfComponents: 1,
        },

    ];

    return (
        <>
            <SHeader>
                <h5>Powerful blocks</h5>
                <h1>Components</h1>
                <p>Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.</p>
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

export default Components;