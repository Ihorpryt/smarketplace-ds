import React from "react";
import Select from "react-select";

const options = [
    { value: 'miles', label: 'Miles' },
    { value: 'kilometers', label: 'Kilometers' },
];

const InputDropdownButton = () => {

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
            fontSize: state.selectProps.myFontSize,
            margin: "0",
        }),
        control: (provided,state) => ({
            ...provided,
            backgroundColor: "#F9FAFB",
            width: "100%",
            borderRadius: "0 10px 10px 0",
            height: "56px",
            paddingLeft: "5px",
            paddingRight: "5px",
            fontWeight: 500,
            transition: "0.3s",
            cursor: "pointer",
            zIndex: "20",
            '&:hover': {
                borderColor: state.isFocused ? "#1EAAE2" : "#667085",
            },
            borderColor: state.isFocused ? "#1EAAE2" : "#D0D5DD",
            boxShadow: state.isFocused ? "0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 0 0 2px rgba(30, 170, 226, 1)" : "",
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
            className="dropdown"
            options={options}
            defaultValue={options[0]}
            myFontSize="16px"
            styles={styles}
            isSearchable={false}
            isClearable={false}
            components={{
                IndicatorSeparator: () => null,
            }}
        />
    );
};

export default InputDropdownButton;