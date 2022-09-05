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
import Alerts from "./pages/inner-pages/Alerts";
import Labels from "./pages/inner-pages/Labels";
import Dropdowns from "./pages/inner-pages/Dropdowns";
import Checkboxes from "./pages/inner-pages/Checkboxes";

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
            <Route path="/components/alerts">
                <Alerts />
            </Route>
            <Route path="/components/labels">
                <Labels />
            </Route>
            <Route path="/components/dropdowns">
                <Dropdowns />
            </Route>
            <Route path="/components/checkboxes">
                <Checkboxes />
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
