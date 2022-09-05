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
                    <Label />
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Labels;