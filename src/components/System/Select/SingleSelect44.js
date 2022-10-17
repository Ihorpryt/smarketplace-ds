import React from "react";
import Select from "react-select";
import {SingleControl44} from "./SingleControl44.tsx";

const optionsSizes = [
    { value: 'Most recent first', label: 'Most recent first' },
    { value: 'Highest paying first', label: 'Highest paying first' },
    { value: 'Closest to me first', label: 'Closest to me first' },
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
            color: "#202121",
            fontSize: "14px",
            margin: "0",
            marginTop: "14px",
        }),
        control: (provided,state) => ({
            ...provided,
            width: "200px",
            borderRadius: "10px",
            height: "44px",
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
            marginTop: "14px",
            fontWeight: 500,
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "10px",
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: "#667085",
        })
    };

    return (

        <Select
            theme={customTheme}
            options={optionsSizes}
            defaultValue={optionsSizes[0]}
            onChange={setSize}
            noOptionsMessage={() => "No option here, sorry"}
            placeholder={""}
            styles={styles}
            isSearchable={false}
            components={{
                IndicatorSeparator: () => null,
                Control: SingleControl44
            }}
        />
    );
};

export default SingleSelect;