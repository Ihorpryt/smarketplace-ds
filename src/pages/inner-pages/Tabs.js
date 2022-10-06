import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import TabBlock from "../../components/System/Tabs/Tab-block";

const Tabs = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Tabs</h1>
                <p>Tabs are used to organize content by grouping similar information on the same page.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <TabBlock />
                </SSizeControl>
            </SComponentCage>



        </>
    );


};

export default Tabs;