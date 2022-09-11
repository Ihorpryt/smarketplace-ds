import React from "react";
import NavCard from "../components/System/NavCard";
import {SHeader, SGrid} from "../components/Layout/styles";
import inputBg from "../assets/img/inputBg.jpg";
import buttonBg from "../assets/img/buttonBg.jpg"
import alertBg from "../assets/img/alertBg.webp"
import labelBg from "../assets/img/labelBg.jpg"
import checkboxBg from "../assets/img/checkboxBg.jpg"

const Components = () => {

    const cardArray = [
        {
            id: 1,
            background: buttonBg,
            title: "Buttons",
            description: "Communicates and triggers user actions when clicked",
            to: "/components/buttons",
            numberOfComponents: 2,
        },
        {
            id: 2,
            background: inputBg,
            title: "Inputs",
            description: "Form field that a user can type a line of text into",
            to: "/components/inputs",
            numberOfComponents: 1,
        },
        {
            id: 3,
            background: alertBg,
            title: "Alert",
            description: "Provides brief information without blocking workflow",
            to: "/components/alerts",
            numberOfComponents: 1,
        },
        {
            id: 4,
            background: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
            title: "Select",
            description: "Select one or more items from a list",
            to: "/components/selects",
            numberOfComponents: 1,
        },
        {
            id: 5,
            background: checkboxBg,
            title: "Checkbox",
            description: "Used to select a single item or multiple items",
            to: "/components/checkboxes",
            numberOfComponents: 1,
        },
        {
            id: 6,
            background: labelBg,
            title: "Labels",
            description: "Nice component",
            to: "/components/labels",
            numberOfComponents: 5,
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