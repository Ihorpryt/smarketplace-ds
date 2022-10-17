import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Input from "../../components/System/Input/Input";
import InputGroup from "../../components/System/InputGroup/InputGroup";
import Search from "../../components/System/Search/Search";

const Inputs = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Inputs</h1>
                <p>An Input is a form field that a user can type a line of text into</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <Input label="Label" />
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <InputGroup label="Amount" />
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <Search label="Search" />
                </SSizeControl>
            </SComponentCage>


        </>
    );


};

export default Inputs;