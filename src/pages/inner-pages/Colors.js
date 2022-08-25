import React from "react";
import {SHeader, SRow} from "../../components/Layout/styles";
import ColorBlock from "../../components/System/Color/ColorBlock";

const Colors = () => {

    const blueArray = [
        {
            id: 1,
            rgba: "rgba(29, 90, 197, 1)",
            name: "blue-900",
            color: "white"
        },
        {
            id: 2,
            rgba: "rgba(30, 170, 226, 1)",
            name: "blue-800",
            color: "white"
        },
        {
            id: 3,
            rgba: "rgba(239, 248, 255, 1)",
            name: "blue-200",
            color: "black"
        },
        {
            id: 4,
            rgba: "rgba(244, 247, 252, 1)",
            name: "blue-100",
            color: "black"
        },
    ]

    const greenArray = [
        {
            id: 1,
            rgba: "rgba(10, 180, 58, 1)",
            name: "green-900",
            color: "white"
        },
        {
            id: 2,
            rgba: "rgba(2, 122, 72, 1)",
            name: "green-800",
            color: "white"
        },
        {
            id: 3,
            rgba: "rgba(236, 253, 243, 1)",
            name: "green-100",
            color: "black"
        },
    ]

    const redArray = [
        {
            id: 1,
            rgba: "rgba(253, 31, 31, 1)",
            name: "red-900",
            color: "white"
        },
        {
            id: 2,
            rgba: "rgba(180, 35, 24, 1)",
            name: "red-800",
            color: "white"
        },
        {
            id: 3,
            rgba: "rgba(254, 243, 242, 1)",
            name: "red-100",
            color: "black"
        },
    ]

    const orangeArray = [
        {
            id: 1,
            rgba: "rgba(251, 115, 38, 1)",
            name: "orange-900",
            color: "white"
        },
        {
            id: 2,
            rgba: "rgba(181, 71, 8, 1)",
            name: "orange-800",
            color: "white"
        },
        {
            id: 3,
            rgba: "rgba(255, 250, 235, 1)",
            name: "orange-100",
            color: "black"
        },
    ]

    const greyArray = [
        {
            id: 1,
            rgba: "rgba(32, 33, 33, 1)",
            name: "grey-900",
            color: "white"
        },
        {
            id: 2,
            rgba: "rgba(52, 64, 84, 1)",
            name: "grey-700",
            color: "white"
        },
        {
            id: 3,
            rgba: "rgba(102, 112, 133, 1)",
            name: "grey-500",
            color: "white"
        },
        {
            id: 4,
            rgba: "rgba(208, 213, 221, 1)",
            name: "grey-300",
            color: "black"
        },
        {
            id: 5,
            rgba: "rgba(234, 236, 240, 1)",
            name: "grey-200",
            color: "black"
        },
        {
            id: 6,
            rgba: "rgba(234, 235, 237, 1)",
            name: "grey-150",
            color: "black"
        },
        {
            id: 7,
            rgba: "rgba(249, 250, 251, 1)",
            name: "grey-100",
            color: "black"
        },
    ]

    return (
        <>
            <SHeader>
                <h5></h5>
                <h1>Colors</h1>
                <p></p>
            </SHeader>

            <SRow>
                {blueArray.map((card) => (
                    <ColorBlock
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>
            <SRow>
                {greenArray.map((card) => (
                    <ColorBlock
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>
            <SRow>
                {redArray.map((card) => (
                    <ColorBlock
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>
            <SRow>
                {orangeArray.map((card) => (
                    <ColorBlock
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>
            <SRow>
                {greyArray.map((card) => (
                    <ColorBlock
                        key={card.id}
                        {...card}
                    />
                ))}
            </SRow>


        </>
    );


};

export default Colors;