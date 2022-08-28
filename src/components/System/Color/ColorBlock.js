import React, {useContext} from "react";
import {SColorBlock} from "./styles";
import {NotificationContext, useNotification} from "../../Notifications/NotificationProvider";
import {v4} from "uuid";



const ColorBlock = ({name, rgba, color}) => {

    const dispatch = useNotification();

    function copyText(rgba) {
        navigator.clipboard.writeText(rgba);

        dispatch({
                type: "WARNING",
                title: "Copied",
                description: "RGBA value of " + name + " in your clipboard.",
        })
    }


    return (
        <>
            <SColorBlock background={rgba} color={color} onClick={() => copyText(rgba)}>
                <h3>{name}</h3>
                <p>{rgba}</p>
            </SColorBlock>
        </>
    );
};

export default ColorBlock;