import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Label from "../../components/System/Labels/Label";

const Labels = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Labels</h1>
                <p>Lorem ipsum dolor sim amet</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <Label text="Label 1" variant="green"/>
                    <Label text="Label 2" variant="red"/>
                    <Label text="Label 3" variant="grey"/>
                    <Label text="Label 4" variant="blue"/>
                    <Label text="Label 5" variant="orange"/>
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Labels;