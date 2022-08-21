import React from "react";
import NavCard from "../components/System/NavCard";
import {SHeader, SRow} from "../components/Layout/styles";
import styleguideBg from "../assets/img/styleguideBg.jpg";
import componentsBg from "../assets/img/componentsBg.jpg";
import resourcesBg from "../assets/img/resourcesBg.jpg";

const Home = () => {

    const cardArray = [
        {
            id: 1,
            background: styleguideBg,
            title: "Styleguide",
            description: "Here you can find overarching style that guides the design of all features at Staffing Marketplace.",
            to: "/styleguide",
        },
        {
            id: 2,
            background: componentsBg,
            title: "Components",
            description: "Components are reusable building blocks of the UI, crafted with Styleguide.",
            to: "/components",
        },
        {
            id: 3,
            background: resourcesBg,
            title: "Resources",
            description: "Useful assets",
            to: "/resources",
        },
    ];

    return (
        <>
            <SHeader>
                <h5>Getting started with</h5>
                <h1>Staffing Marketplace Design System</h1>
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

export default Home;
