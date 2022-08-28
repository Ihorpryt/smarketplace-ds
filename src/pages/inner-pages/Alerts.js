import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Alert from "../../components/System/Alert/Alert";


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
                    <Alert
                        title={"Test"}
                        description={"Lorem ipsum dolor"}
                    />
                </SSizeControl>
            </SComponentCage>


        </>
    );


};

export default Alerts;