import React from "react";
import {Avatar, Header, Nav, SLogo, SMenuLinks} from "./styled";
import smLogoSVG from "../../../assets/sm-logo.svg";
import MenuLinks from "../MenuLinks/MenuLinks";
import User from "../../../assets/img/user.png"


const Menu = () => {
    return (
        <Header>
            <Nav>
                <SLogo>
                    <img src={smLogoSVG} alt="logo" />
                </SLogo>
                <SMenuLinks>
                    <MenuLinks title="Home" />
                    <MenuLinks title="Find jobs" />
                    <MenuLinks title="My jobs" />
                    <MenuLinks title="Calendar" />
                    <MenuLinks title="Messages" />
                    <MenuLinks title="Documents" />
                </SMenuLinks>
            </Nav>
            <Avatar src={User} className="user" alt="Marketplace Logo"/>
        </Header>
    );


};

export default Menu;