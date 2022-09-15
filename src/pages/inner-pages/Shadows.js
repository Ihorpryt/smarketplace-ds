import React from "react";
import {SComponentCage, SHeader, SRow, SSizeControl} from "../../components/Layout/styles";
import {SBtnInput, SCard, SFrame, SShadowPopup} from "../../components/System/styles";

const Shadows = () => {
    return (
        <>
            <SHeader>
                <h5>Styleguide</h5>
                <h1>Shadows</h1>
                <p>We using shadows to create sense of depth for design.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <SShadowPopup>Pop-up</SShadowPopup>
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <SBtnInput>Button/Input</SBtnInput>
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <SCard>Card</SCard>
                </SSizeControl>
            </SComponentCage>


        </>
    );


};

export default Shadows;