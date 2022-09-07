import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Label from "../../components/System/Labels/Label";
import StarSmall from "../../assets/icons/StarSmall";
import AlertSmall from "../../assets/icons/AlertSmall";
import CircleSmall from "../../assets/icons/CircleSmall";
import CloseSmall from "../../assets/icons/CloseSmall";
import CheckSmall from "../../assets/icons/CheckSmall";
import DotsSmall from "../../assets/icons/DotsSmall";
import PlaneSmall from "../../assets/icons/PlaneSmall";


const labelsGreen = [
    {
        id: 1,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 2,
        icon: <CheckSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 3,
        icon: <DotsSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 4,
        icon: <PlaneSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 5,
        icon: <CircleSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 6,
        icon: <AlertSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 7,
        icon: <CloseSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },
    {
        id: 8,
        icon: <StarSmall color="#027A48" />,
        text: "Label 1",
        variant: "green",
    },

];


const labelsRed = [
    {
        id: 1,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 2,
        icon: <CheckSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 3,
        icon: <DotsSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 4,
        icon: <PlaneSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 5,
        icon: <CircleSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 6,
        icon: <AlertSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 7,
        icon: <CloseSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },
    {
        id: 8,
        icon: <StarSmall color="#B42318" />,
        text: "Label 2",
        variant: "red",
    },

];

const labelsGrey = [
    {
        id: 1,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 2,
        icon: <CheckSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 3,
        icon: <DotsSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 4,
        icon: <PlaneSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 5,
        icon: <CircleSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 6,
        icon: <AlertSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 7,
        icon: <CloseSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },
    {
        id: 8,
        icon: <StarSmall color="#344054" />,
        text: "Label 3",
        variant: "grey",
    },

];

const labelsBlue = [
    {
        id: 1,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 2,
        icon: <CheckSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 3,
        icon: <DotsSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 4,
        icon: <PlaneSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 5,
        icon: <CircleSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 6,
        icon: <AlertSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 7,
        icon: <CloseSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },
    {
        id: 8,
        icon: <StarSmall color="#1D5AC5" />,
        text: "Label 4",
        variant: "blue",
    },

];

const labelsOrange = [
    {
        id: 1,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 2,
        icon: <CheckSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 3,
        icon: <DotsSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 4,
        icon: <PlaneSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 5,
        icon: <CircleSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 6,
        icon: <AlertSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 7,
        icon: <CloseSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
    {
        id: 8,
        icon: <StarSmall color="#B54708" />,
        text: "Label 5",
        variant: "orange",
    },
];


const Labels = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Labels</h1>
                <p>The label component allows users to add specific element captions for user clarity and convenience.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    {labelsGreen.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    {labelsRed.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    {labelsGrey.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    {labelsBlue.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    {labelsOrange.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Labels;