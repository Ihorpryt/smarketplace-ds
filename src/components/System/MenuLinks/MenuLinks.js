import React from "react";
import {SMenuItem} from "./styled";
import Home from "../../../assets/icons/Home";



const MenuLinks = ({title}) => {
    return (
        <SMenuItem href="#">
            <Home />
            {title.toUpperCase()}
        </SMenuItem>
    );


};

export default MenuLinks;