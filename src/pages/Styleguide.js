import React from "react";
import {SGrid, SHeader} from "../components/Layout/styles";
import NavCard from "../components/System/NavCard";

const Styleguide = () => {

    const cardArray = [
        {
            id: 1,
            background: "https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Colors",
            description: "The following colors provide the foundation as we strive to achieve balance and harmony through our User Interface design.",
            to: "/styleguide/colors",
        },
        {
            id: 2,
            background: "https://images.pexels.com/photos/6045366/pexels-photo-6045366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Typography",
            description: "Our approach to the typographic system uses Inter as its typeface. It has been carefully engineered with suitable scales, styles, and weights.",
            to: "/styleguide/typography",
        },
        {
            id: 3,
            background: "https://images.pexels.com/photos/48828/pexels-photo-48828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shadows",
            description: "Shadows help us create hierarchies and emphasis. They improve understanding & user interactions.",
            to: "/styleguide/shadows",
        },
    ];

    return (
        <>
            <SHeader>
                <h5>Digital identity</h5>
                <h1>Styleguide</h1>
                <p>Visual, atomic elements that bring together a UI.</p>
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

export default Styleguide;
