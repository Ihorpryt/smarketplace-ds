import React from "react";
import {SComponentCage, SHeader, SRow, SSizeControl} from "../../components/Layout/styles";
import Button from "../../components/System/Button/Button";

const Buttons = () => {
    return (
        <>


            <SHeader>
                <h5></h5>
                <h1>Buttons</h1>
                <p></p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <Button variant="primary" text="Primary" />
                    <Button variant="secondary" text="Secondary" />
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Buttons;