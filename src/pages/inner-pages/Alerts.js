import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import {SAlert, SAlertTop} from "../../components/System/Alert/styles";
import AlertOrange from "../../assets/smallIllustrationsGradient/AlertOrange";
import Close from "../../assets/icons/Close";


const Alerts = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Alerts</h1>
                <p>An Input is a form field that a user can type a line of text into</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>

                    <SAlert>
                        <SAlertTop>
                            <AlertOrange/>
                            <h4>Test title</h4>
                            <Close />
                        </SAlertTop>
                        <p>Test description</p>
                    </SAlert>

                </SSizeControl>
            </SComponentCage>


        </>
    );


};

export default Alerts;