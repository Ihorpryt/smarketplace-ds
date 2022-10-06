import React from "react";
import {SMenuItem} from "./styled";



const MenuLinks = ({title, isActive}) => {
    return (
        <SMenuItem href="#" style={{
            color: isActive ? '#202121': '',
            backgroundColor: isActive ? '#F0F3F9': '',
        }}>
            {/*{icon}*/}
            {title.toUpperCase()}
        </SMenuItem>
    );


};

export default MenuLinks;