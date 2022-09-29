import React from "react";
import NavCard from "../components/System/NavCard";
import {SHeader, SGrid} from "../components/Layout/styles";
import inputBg from "../assets/img/inputBg.jpg";
import buttonBg from "../assets/img/buttonBg.jpg"
import alertBg from "../assets/img/alertBg.webp"
import labelBg from "../assets/img/labelBg.jpg"
import checkboxBg from "../assets/img/checkboxBg.jpg"
import selectBg from "../assets/img/selectBg.jpg"
import toggleBg from "../assets/img/toggleBg.jpg"
import tabsBg from "../assets/img/tabsBg.jpg"

const Components = () => {

    const cardArray = [
        {
            id: 1,
            background: buttonBg,
            title: "Buttons",
            description: "Communicates and triggers user actions when clicked.",
            to: "/components/buttons",
            numberOfComponents: 3,
        },
        {
            id: 2,
            background: inputBg,
            title: "Inputs",
            description: "Form field that a user can type a line of text into.",
            to: "/components/inputs",
            numberOfComponents: 2,
        },
        {
            id: 3,
            background: alertBg,
            title: "Alert",
            description: "Provides brief information without blocking workflow.",
            to: "/components/alerts",
            numberOfComponents: 1,
        },
        {
            id: 4,
            background: selectBg,
            title: "Select",
            description: "Select one or more items from a list.",
            to: "/components/selects",
            numberOfComponents: 2,
        },
        {
            id: 5,
            background: checkboxBg,
            title: "Checkbox",
            description: "Used to select a single item or multiple items.",
            to: "/components/checkboxes",
            numberOfComponents: 1,
        },
        {
            id: 6,
            background: labelBg,
            title: "Labels",
            description: "Allows users to add specific element captions.",
            to: "/components/labels",
            numberOfComponents: 5,
        },
        {
            id: 6,
            background: toggleBg,
            title: "Toggle",
            description: "Displays a boolean value.",
            to: "/components/toggle",
            numberOfComponents: 1,
        },
        {
            id: 7,
            background: tabsBg,
            title: "Tabs",
            description: "Organize content by grouping similar information.",
            to: "/components/tabs",
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