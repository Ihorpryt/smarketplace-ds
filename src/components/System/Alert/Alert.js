import React from "react";
import {SAlert, SAlertTop} from "./styles";
import AlertOrange from "../../../assets/smallIllustrationsGradient/AlertOrange";

const Alert = props => {

    const[exit, setExit] = React.useState(false);

    const handleCloseNotification = () => {
        setExit(true)
        setTimeout(() => {
            setExit(true)
            props.dispatch({
                type:"REMOVE_NOTIFICATION",
                id: props.id,
            })
        }, 300);
    }

    setTimeout(() => {
            handleCloseNotification();
        }, 3000);



    return (
            <SAlert animate={exit}>
                <SAlertTop>
                    <AlertOrange/>
                    <h4>{props.title}</h4>
                    <button onClick={() => handleCloseNotification(setExit(true))}>Exit</button>
                </SAlertTop>
                <p>{props.description}</p>

            </SAlert>

    );


};

export default Alert;