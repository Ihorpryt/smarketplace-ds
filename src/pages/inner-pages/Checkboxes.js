import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Checkbox from "../../components/System/Checkbox/Checkbox";

const Checkboxes = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Checkboxes</h1>
                <p>You can click on color block to copy it's RGBA value to clipboard</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl style={{gap: '48px'}}>
                    <Checkbox
                        label="Checked"
                        checked={true}
                    />
                    <Checkbox
                        label="Unchecked"
                    />
                    <Checkbox
                        label="Disabled"
                        checked={true}
                        disabled
                    />
                </SSizeControl>
            </SComponentCage>


        </>
    );


};

export default Checkboxes;