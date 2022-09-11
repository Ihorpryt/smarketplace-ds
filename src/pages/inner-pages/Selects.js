import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import SingleSelect from "../../components/System/Select/SingleSelect";
import MultiSelect from "../../components/System/Select/MultiSelect";

const Selects = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Select</h1>
                <p>A select list enables users to select one or more items from a list. Use a select list when options are dynamic or variable.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <div style={{width: "100%"}}>
                        <SingleSelect />
                    </div>
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <div style={{width: "100%"}}>
                        <MultiSelect />
                    </div>
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default Selects;