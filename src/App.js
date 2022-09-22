import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import {matchPath, useLocation} from "react-router-dom";

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;


    const location = useLocation();
    console.log(location.pathname)

    const singlePageArray = ["/pages/login", "/pages/else"]

    const test = matchPath(location.pathname, {
        path: singlePageArray,
        exact: false,
        strict: false
    })

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                        rel="stylesheet" />
                </Helmet>
                <>
                    { test
                        ?
                            <Routes/>
                        :
                        <Layout>
                            <Routes/>
                        </Layout>
                    }
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};



export default App;
