import React from "react";
import Select from "react-select";
import {SingleControl} from "./SingleControl.tsx";

const optionsSizes = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];




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
            boxShadow: state.isFocused ? "0 0 0 2px #1EAAE2" : "0 0 0 0px #1EAAE2",
            transition: "0.3s",
            cursor: "pointer",
            '&:hover': {
                //borderColor: '#667085',
                borderColor: state.isFocused ? "#1EAAE2" : "#667085",
            },
            borderColor: state.isFocused ? "#1EAAE2" : "#D0D5DD",
        }),
        input: (provided) => ({
            ...provided,
            margin: "0",
            marginTop: "18px",
            fontWeight: 500,
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "10px",
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
                Control: SingleControl
            }}
        />
    );
};

export default SingleSelect;