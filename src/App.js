import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>

                    <meta name="title" content="Staffing Marketplace Design System" />
                        <meta name="description" content="Design system for digital experiences" />


                            <meta property="og:type" content="website" />
                                <meta property="og:url" content="https://smarketplace-ds.vercel.app/" />
                                    <meta property="og:title" content="Staffing Marketplace Design System" />
                                        <meta property="og:description" content="Design system for digital experiences" />
                                            <meta property="og:image" content="%PUBLIC_URL%/meta-min.jpg" />


                                                <meta property="twitter:card" content="summary_large_image" />
                                                    <meta property="twitter:url" content="https://smarketplace-ds.vercel.app/" />
                                                        <meta property="twitter:title" content="Staffing Marketplace Design System" />
                                                            <meta property="twitter:description" content="Design system for digital experiences" />
                                                                <meta property="twitter:image" content="%PUBLIC_URL%/meta-min.jpg" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                        rel="stylesheet" />
                </Helmet>
                <>
                    <Layout>
                        <Routes />
                    </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;
