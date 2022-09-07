import React from "react";
import {SComponentCage, SHeader, SRow, SSizeControl} from "../../components/Layout/styles";
import Button from "../../components/System/Button/Button";
import Plus from "../../assets/icons/Plus";
import ButtonReset from "../../components/System/Button/ButtonReset";

const Buttons = () => {
    return (
        <>


            <SHeader>
                <h5>Components</h5>
                <h1>Buttons</h1>
                <p>A button is a box area or text that communicates and triggers user actions when clicked.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <Button
                        variant="primary"
                        text="Primary w icon"
                        isIcon={true}
                        icon={<Plus color="white" />}
                    />
                    <Button
                        variant="primary"
                        text="Primary"
                        isIcon={false}
                    />

                    <Button
                        variant="secondary"
                        text="Secondary w icon"
                        isIcon={true}
                        icon={<Plus color="#344054" />}
                    />
                    <Button
                        variant="secondary"
                        text="Secondary"
                    />
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <ButtonReset
                        text="Reset all"
                    />
                    <ButtonReset
                        text="Clear"
                    />
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Buttons;