import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/inner-pages/Colors";
import Components from "./pages/Components";
import Resources from "./pages/Resources";
import Styleguide from "./pages/Styleguide";
import Shadows from "./pages/inner-pages/Shadows";
import Typography from "./pages/inner-pages/Typography";
import Buttons from "./pages/inner-pages/Buttons";
import SlideGenerator from "./pages/SlideGenerator";
import Inputs from "./pages/inner-pages/Inputs";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/styleguide">
                <Styleguide />
            </Route>

            <Route path="/styleguide/colors" >
                <Colors />
            </Route>

            <Route path="/styleguide/typography">
                <Typography />
            </Route>

            <Route path="/styleguide/shadows">
                <Shadows />
            </Route>



            <Route exact path="/components">
                <Components />
            </Route>
            <Route path="/components/buttons">
                <Buttons />
            </Route>
            <Route path="/components/inputs">
                <Inputs />
            </Route>


            <Route exact path="/resources">
                <Resources />
            </Route>

            <Route exact path="/slide-generator">
                <SlideGenerator />
            </Route>
        </Switch>
    );
};

export default Routes;
