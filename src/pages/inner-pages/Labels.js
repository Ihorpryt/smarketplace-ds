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

];

const Labels = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Labels</h1>
                <p>Lorem ipsum dolor sim amet</p>
            </SHeader>

            <SComponentCage direction="column">

                <SSizeControl>
                    {labelsGreen.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>
                <SSizeControl>
                    {labelsGreen.map((card) => (
                        <Label
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SSizeControl>

                {/*<SSizeControl style={{maxWidth:'100%'}}>*/}
                {/*    <Label text="Label 2" variant="red" icon={<CloseSmall />} />*/}
                {/*    <Label text="Label 2" variant="red"/>*/}
                {/*</SSizeControl>*/}
                {/*<SSizeControl style={{maxWidth:'100%'}}>*/}
                {/*    <Label text="Label 2" variant="red" icon={<CloseSmall />} />*/}
                {/*    <Label text="Label 2" variant="red"/>*/}
                {/*    <Label text="Label 3" variant="grey" icon={<CircleSmall />} />*/}
                {/*    <Label text="Label 3" variant="grey"/>*/}
                {/*    <Label text="Label 4" variant="blue" icon={<StarSmall />} />*/}
                {/*    <Label text="Label 4" variant="blue"/>*/}
                {/*    <Label text="Label 5" variant="orange" icon={<AlertSmall />} />*/}
                {/*    <Label text="Label 5" variant="orange"/>*/}
                {/*</SSizeControl>*/}
            </SComponentCage>

        </>
    );


};

export default Labels;