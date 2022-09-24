import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG, textLogoSVG } from "../../assets";

import {
    TbBrush,
    TbBoxMultiple,
    TbHome2,
    TbArchive,
    TbSearch,
    TbChevronLeft,
    TbSlideshow,
    TbBrowser,
} from "react-icons/tb";

import { ThemeContext } from "../../App";
import {Link, matchPath, useLocation} from "react-router-dom";

const Sidebar = () => {
    // const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();


    // const searchClickHandler = () => {
    //     if (!sidebarOpen) {
    //         setSidebarOpen(true);
    //         searchRef.current.focus();
    //     } else {
    //         // search functionality
    //     }
    // };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <TbChevronLeft />
                </SSidebarButton>
            </>

            <Link to={"/"}>
                <SLogo>
                    <img src={logoSVG} alt="logo" />
                    {sidebarOpen ? <img src={textLogoSVG} alt="logo" /> : ""}
                </SLogo>
            </Link>

            {/*<SSearch*/}
            {/*    onClick={searchClickHandler}*/}
            {/*    style={!sidebarOpen ? { width: `fit-content` } : {}}*/}
            {/*>*/}
            {/*    <SSearchIcon>*/}
            {/*        <TbSearch />*/}
            {/*    </SSearchIcon>*/}
            {/*    <input*/}
            {/*        ref={searchRef}*/}
            {/*        placeholder="Search"*/}
            {/*        style={!sidebarOpen ? { width: 0, padding: 0 } : {}}*/}
            {/*    />*/}
            {/*</SSearch>*/}

            {/*<SDivider />*/}
            {linksArray.map(({ icon, label, notification, to }) => (
                //<SLinkContainer key={label} isActive={pathname === to}>
                <SLinkContainer key={label} isActive={matchPath(pathname, {
                    path: to,
                    exact: to.length === 1,
                    strict: false
                })}>

                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label,to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};


const linksArray = [
    {
        label: "Home",
        icon: <TbHome2 />,
        to: "/",
        notification: 0,
    },
    {
        label: "Styleguide",
        icon: <TbBrush />,
        to: "/styleguide",
        notification: 0,
    },
    {
        label: "Components",
        icon: <TbBoxMultiple />,
        to: "/components",
        notification: 0,
    },
    {
        label: "Pages",
        icon: <TbBrowser />,
        to: "/pages",
        notification: 0,
    },
    {
        label: "Resources",
        icon: <TbArchive />,
        to: "/resources",
        notification: 0,
    },
];

const secondaryLinksArray = [
    {
        label: "Slide generator",
        icon: <TbSlideshow />,
        to: "/slide-generator",
    },
    // {
    //     label: "Logout",
    //     icon: <MdLogout />,
    // },
];

export default Sidebar;
