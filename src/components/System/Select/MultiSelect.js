
import React from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated"
import {MultiControl} from "./MultiControl.tsx";
import Plus2 from "../../../assets/icons/Plus2";

const optionsSizes = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <Plus2 />
        </components.DropdownIndicator>
    );
};


const SingleSelect = () => {
    const [size, setSize] = React.useState({});

    function customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'orange',
                primary: '#1EAAE2',
            },

        };
    }
    const styles = {
        option: (provided, state) => ({
            ...provided,
            marginLeft: "4px",
            marginRight: "4px",
            borderRadius: "6px",
            width: "auto",

            fontWeight: state.isSelected ? "bold" : "normal",
            color: "#202121",
            backgroundColor: state.data.color,
            fontSize: state.selectProps.myFontSize,
            cursor: "pointer",
            transition: "0.3s",
            '&:hover': {
                backgroundColor: "rgba(0,0,0,0.03)",
            },

        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.data.color,
            fontSize: state.selectProps.myFontSize,
            margin: "0",
            marginTop: "18px",
        }),
        control: (provided,state) => ({
            ...provided,
            width: "100%",
            borderRadius: "10px",
            height: "56px",
            paddingLeft: "5px",
            paddingRight: "5px",
            fontWeight: 500,
            boxShadow: state.isFocused ? "0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 2px #1EAAE2" : "0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 0px #1EAAE2",
            transition: "0.3s",
            cursor: "pointer",
            '&:hover': {
                borderColor: state.isFocused ? "#1EAAE2" : "#667085",
            },
            borderColor: state.isFocused ? "#1EAAE2" : "#D0D5DD",
        }),
        input: (provided) => ({
            ...provided,
            margin: "0",
            marginTop: "20px",
            fontWeight: 500,
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "10px",
        }),
        valueContainer: (provided) => ({
            ...provided,
            alignItems: "flex-end",
        }),
        multiValue: (provided) => ({
            ...provided,
            borderRadius: "20px",
            border: "1px solid #D0D5DD",
            backgroundColor: "white",
            paddingLeft: "4px",
            margin:"0px",
            marginRight:"4px",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            margin: "1px",
            paddingLeft: "3px",
            paddingRight: "3px",
            backgroundColor: "#f9fafb",
            transition: "0.3s",
            borderRadius: "20px",
            color: "#344054",
            '&:hover': {
                borderRadius: "20px",
                cursor: "pointer",
                backgroundColor: "#EAEBED",
                color: "#344054",
            },
        }),
    };

    return (

        <Select
            theme={customTheme}
            options={optionsSizes}
            onChange={setSize}
            noOptionsMessage={() => "No option here, sorry"}
            placeholder={""}
            styles={styles}
            isSearchable
            isClearable
            myFontSize="16px"
            components={{
                IndicatorSeparator: () => null,
                Control: MultiControl,
                DropdownIndicator,
            }}
            isMulti
        />
    );
};

export default SingleSelect;