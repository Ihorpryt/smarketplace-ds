import React from "react";
import {Avatar, AvatarBorder, Header, IconHover, Nav, RightMenuBlock, SLogo, SMenuLinks} from "./styled";
import smLogoSVG from "../../../assets/sm-logo.svg";
import MenuLinks from "../MenuLinks/MenuLinks";
import User from "../../../assets/img/user.png"
import HomeIcon from "../../../assets/icons/HomeIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import JobsIcon from "../../../assets/icons/JobsIcon";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import MessagesIcon from "../../../assets/icons/MessagesIcon";
import DocumentsIcon from "../../../assets/icons/DocumentsIcon";
import BellIcon from "../../../assets/icons/BellIcon";


const Menu = () => {
    return (
        <Header>
            <Nav>
                <SLogo>
                    <img src={smLogoSVG} alt="logo" />
                </SLogo>
                <SMenuLinks>
                    <MenuLinks title="Home" icon={<HomeIcon />} />
                    <MenuLinks title="Find jobs" isActive={true} />
                    {/*<MenuLinks title="My jobs" icon={<JobsIcon />} />*/}
                    <MenuLinks title="Calendar" icon={<CalendarIcon />} />
                    <MenuLinks title="Messages" icon={<MessagesIcon />} />
                    <MenuLinks title="Documents" icon={<DocumentsIcon />} />
                </SMenuLinks>
            </Nav>
            <RightMenuBlock>
                <IconHover>
                    <BellIcon />
                </IconHover>
                <AvatarBorder>
                    <Avatar src={User} className="user" alt="Marketplace Logo"/>
                </AvatarBorder>
            </RightMenuBlock>
        </Header>
    );


};

export default Menu;