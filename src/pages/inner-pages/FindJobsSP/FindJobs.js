import React from "react";
import {useHistory} from "react-router-dom";
import {
    SBackButton
} from "./styles";
import Menu from "../../../components/System/Menu/Menu";


const FindJobs = () => {
    let history = useHistory();

    return (
        <>
            <SBackButton onClick={() => history.push("/pages")}>Back</SBackButton>
            <Menu />
        </>


    );


};

export default FindJobs;